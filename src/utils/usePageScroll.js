import { useState, useEffect } from 'react';

export const usePageScroll = (scrollThreshold = 400) => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > scrollThreshold) {
        setIsPageScrolled(true);
      } else {
        setIsPageScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [scrollThreshold]);

  return isPageScrolled;
};
