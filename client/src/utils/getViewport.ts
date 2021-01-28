/* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px)

/* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px)

/* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px)

/* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px)

/* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px)

import { useState, useEffect } from 'react';

interface viewport {
  width: number | undefined;
  height: number | undefined;
}

// Hook
export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<viewport>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
