import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Регистрируем ScrollTrigger плагин
gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  useEffect(() => {
    // Настройка fade-in анимаций для элементов с классом fade-in
    const fadeInElements = gsap.utils.toArray('.fade-in');
    
    fadeInElements.forEach((element) => {
      gsap.from(element as Element, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: element as Element,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Обновляем ScrollTrigger при загрузке страницы
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);

    // Очистка при размонтировании компонента
    return () => {
      window.removeEventListener('load', handleLoad);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Функция для ручного обновления ScrollTrigger (полезно при динамическом контенте)
  const refreshScrollTrigger = () => {
    ScrollTrigger.refresh();
  };

  return { refreshScrollTrigger };
};