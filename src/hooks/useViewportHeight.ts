import { useEffect, useCallback } from 'react';

interface UseViewportHeightOptions {
  /**
   * CSS переменная для установки (по умолчанию '--fixed-vh')
   */
  cssVariable?: string;
  
  /**
   * Задержка для debounce resize события (по умолчанию 100ms)
   */
  debounceDelay?: number;
  
  /**
   * Дополнительные CSS переменные для установки
   */
  additionalVariables?: {
    /**
     * Имя переменной для установки высоты в px (например '--viewport-height')
     */
    heightPx?: string;
    
    /**
     * Имя переменной для установки ширины в px (например '--viewport-width')
     */
    widthPx?: string;
    
    /**
     * Имя переменной для установки 1vh в px (например '--real-vh')
     */
    realVh?: string;
  };
}

/**
 * Хук для управления CSS переменными viewport размеров
 * Решает проблему мобильной верстки с динамически изменяющейся высотой экрана
 */
export const useViewportHeight = (options: UseViewportHeightOptions = {}) => {
  const {
    cssVariable = '--fixed-vh',
    debounceDelay = 100,
    additionalVariables = {}
  } = options;

  const updateViewportHeight = useCallback(() => {
    if (typeof window === 'undefined') return;

    const height = window.innerHeight;
    const width = window.innerWidth;
    const realVh = height / 100;

    // Основная переменная для фиксированной высоты
    document.documentElement.style.setProperty(cssVariable, `${height}px`);

    // Дополнительные переменные если заданы
    if (additionalVariables.heightPx) {
      document.documentElement.style.setProperty(additionalVariables.heightPx, `${height}px`);
    }

    if (additionalVariables.widthPx) {
      document.documentElement.style.setProperty(additionalVariables.widthPx, `${width}px`);
    }

    if (additionalVariables.realVh) {
      document.documentElement.style.setProperty(additionalVariables.realVh, `${realVh}px`);
    }
  }, [cssVariable, additionalVariables]);

  useEffect(() => {
    // Устанавливаем начальное значение
    updateViewportHeight();

    // Debounced обработчик resize события
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateViewportHeight, debounceDelay);
    };

    // Слушатели событий
    window.addEventListener('resize', debouncedResize);
    window.addEventListener('orientationchange', debouncedResize);
    
    // Дополнительная проверка при изменении viewport на мобильных
    // (когда скрывается/показывается адресная строка)
    let previousHeight = window.innerHeight;
    const checkViewportChange = () => {
      const currentHeight = window.innerHeight;
      if (Math.abs(currentHeight - previousHeight) > 50) { // Значительное изменение
        updateViewportHeight();
        previousHeight = currentHeight;
      }
    };

    // Проверяем изменения viewport каждые 500ms на мобильных устройствах
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    let intervalId: NodeJS.Timeout | null = null;
    
    if (isMobile) {
      intervalId = setInterval(checkViewportChange, 500);
    }

    // Обработчик при возврате фокуса на страницу (для iOS Safari)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(updateViewportHeight, 100);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Очистка при размонтировании
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('orientationchange', debouncedResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [updateViewportHeight, debounceDelay]);

  // Возвращаем функцию для принудительного обновления
  return {
    updateViewportHeight,
    /**
     * Получить текущее значение viewport height
     */
    getCurrentViewportHeight: () => typeof window !== 'undefined' ? window.innerHeight : 0,
    
    /**
     * Получить текущее значение viewport width
     */
    getCurrentViewportWidth: () => typeof window !== 'undefined' ? window.innerWidth : 0
  };
};

export default useViewportHeight;