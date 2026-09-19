'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const greeting = "Hi, I'm Afam!";

export function TypedHeading() {
  const textElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textElement.current) {
      return;
    }

    const typed = new Typed(textElement.current, {
      strings: [greeting],
      typeSpeed: 100,
      startDelay: 300,
      showCursor: true,
      cursorChar: '|',
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h1
      aria-label={greeting}
      className='max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-balance sm:text-6xl lg:text-8xl'
    >
      <span ref={textElement} aria-hidden='true' />
    </h1>
  );
}
