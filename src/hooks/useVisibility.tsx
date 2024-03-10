'use client';
import { useState, useEffect } from 'react';

const useVisibility = (offset = 500) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      console.log(window.scrollY);
      window.scrollY > offset ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [offset]);

  return isVisible;
};

export default useVisibility;
