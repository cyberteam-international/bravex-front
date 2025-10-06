'use client';

import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useViewportHeight } from '@/hooks/useViewportHeight';

interface ViewportHeightContextType {
  updateViewportHeight: () => void;
  getCurrentViewportHeight: () => number;
  getCurrentViewportWidth: () => number;
}

const ViewportHeightContext = createContext<ViewportHeightContextType | null>(null);

interface ViewportHeightProviderProps {
  children: ReactNode;
  
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
    heightPx?: string;
    widthPx?: string;
    realVh?: string;
  };
}

export const ViewportHeightProvider: React.FC<ViewportHeightProviderProps> = ({ 
  children,
  cssVariable = '--fixed-vh',
  debounceDelay = 100,
  additionalVariables = {
    heightPx: '--viewport-height',
    widthPx: '--viewport-width', 
    realVh: '--real-vh'
  }
}) => {
  const {
    updateViewportHeight,
    getCurrentViewportHeight,
    getCurrentViewportWidth
  } = useViewportHeight({
    cssVariable,
    debounceDelay,
    additionalVariables
  });

  const contextValue: ViewportHeightContextType = {
    updateViewportHeight,
    getCurrentViewportHeight,
    getCurrentViewportWidth
  };

  return (
    <ViewportHeightContext.Provider value={contextValue}>
      {children}
    </ViewportHeightContext.Provider>
  );
};

/**
 * Хук для получения доступа к контексту viewport height
 */
export const useViewportHeightContext = () => {
  const context = useContext(ViewportHeightContext);
  if (!context) {
    throw new Error('useViewportHeightContext must be used within a ViewportHeightProvider');
  }
  return context;
};

export default ViewportHeightProvider;