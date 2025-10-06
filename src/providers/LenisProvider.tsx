'use client';

import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useLenis } from '@/hooks/useLenis';
import Lenis from 'lenis';

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

interface LenisProviderProps {
  children: ReactNode;
  classesToExclude?: string[];
  options?: {
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
  };
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ 
  children, 
  classesToExclude = [],
  options = {}
}) => {
  const lenis = useLenis({ 
    classesToExclude,
    ...options
  });

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenisContext = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error('useLenisContext must be used within a LenisProvider');
  }
  return context;
};

export default LenisProvider;