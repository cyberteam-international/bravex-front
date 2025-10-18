import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: 'vertical' | 'horizontal';
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  infinite?: boolean;
  autoRaf?: boolean;
  autoResize?: boolean;
  syncTouch?: boolean;
  prevent?: (node: Element) => boolean;
  virtualScroll?: (e: any) => boolean;
}

interface UseLenisOptions extends LenisOptions {
  classesToExclude?: string[];
}

export const useLenis = (options: UseLenisOptions = {}) => {
  const lenisRef = useRef<Lenis | null>(null);
  const { classesToExclude = [], ...lenisOptions } = options;

  // Функция для получения текущего масштаба
  const getCurrentScale = (): number => {
    if (typeof window === 'undefined') return 1;
    
    const body = document.body;
    const transform = window.getComputedStyle(body).transform;
    if (transform && transform !== 'none') {
      const matrix = transform.match(/matrix\(([^)]+)\)/);
      if (matrix) {
        const values = matrix[1].split(',');
        return parseFloat(values[0]) || 1;
      }
    }
    return 1;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Отключаем Lenis на мобильных разрешениях (меньше 999px)
    // if (window.innerWidth < 999) {
    //   return;
    // }

    // Переменная для отслеживания текущего масштаба
    let currentScale = getCurrentScale();

    // Инициализация Lenis с настройками по умолчанию
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
      autoRaf: true,
      autoResize: true,
      syncTouch: false,
      
      // Функция предотвращения скролла для определенных элементов
      prevent: (node) => {
        return classesToExclude.some(className => 
          node.classList.contains(className) || 
          node.closest(`.${className}`)
        );
      },
      
      // Виртуальный скролл для обработки автоскейла
      virtualScroll: (e) => {
        const newScale = getCurrentScale();

        if (newScale !== currentScale) {
          currentScale = newScale;
        }
        
        if (currentScale !== 1) {
          e.deltaY = e.deltaY / currentScale;
          e.deltaX = e.deltaX / currentScale;
        }
        
        return true; 
      },
      
      // Переопределяем дефолтные настройки переданными опциями
      ...lenisOptions
    });

    lenisRef.current = lenis;

    // Обработчик изменения размера окна
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        currentScale = getCurrentScale();
        lenis.resize();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    // Обработчик загрузки страницы для установки атрибутов предотвращения скролла
    const handleLoad = () => {
      classesToExclude.forEach((className) => {
        document.querySelectorAll(`.${className}`).forEach((element) => {
          element.setAttribute('data-lenis-prevent', '');
        });
      });
    };

    if (document.readyState === 'loading') {
      window.addEventListener('load', handleLoad);
    } else {
      handleLoad();
    }

    // Обработчик события скролла (опционально)
    const handleScroll = (e: any) => {
      // console.log('Scroll event:', e);
    };

    lenis.on('scroll', handleScroll);

    // Очистка при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
      lenis.off('scroll', handleScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [classesToExclude, lenisOptions]);

  return lenisRef.current;
};

export default useLenis;