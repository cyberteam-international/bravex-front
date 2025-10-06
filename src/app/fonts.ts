import localFont from 'next/font/local'

// Helvetica Neue font family
export const helveticaNeue = localFont({
  src: [
    {
      path: '../assets/fonts/HelveticaNeueBoldCondensed.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNeueBlackCondensed.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica-neue',
  display: 'swap',
})

// HelveticaNeueCyr font family with all variants
export const helveticaNeueCyr = localFont({
  src: [
    // Thin variants (100)
    {
      path: '../assets/fonts/HelveticaNeueCyr-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNeueCyr-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    // Ultra Light variants (200)
    {
      path: '../assets/fonts/HelveticaNeueCyr-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNeueCyr-UltraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    // Light variants (300)
    {
      path: '../assets/fonts/HelveticaNeueCyr-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNeueCyr-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    // Normal/Roman (400)
    {
      path: '../assets/fonts/HelveticaNeueCyr-Roman.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNeueCyr-Italic.woff2',
      weight: 'normal',
      style: 'italic',
    },
    // Medium variants (500)
    {
      path: '../assets/fonts/HelveticaNeueCyr-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNeueCyr-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    // Bold variants (700)
    {
      path: '../assets/fonts/HelveticaNeueCyr-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNeueCyr-BoldItalic.woff2',
      weight: 'bold',
      style: 'italic',
    },
    // Black/Heavy variants (900)
    {
      path: '../assets/fonts/HelveticaNeueCyr-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNeueCyr-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../assets/fonts/HelveticaNeueCyr-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNeueCyr-HeavyItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-helvetica-neue-cyr',
  display: 'swap',
})