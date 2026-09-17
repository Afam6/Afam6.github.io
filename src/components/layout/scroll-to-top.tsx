'use client';

import { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react';

export function ScrollToTop() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const threshold = Math.max(500, window.innerHeight * 0.75);
    setVisible(current > threshold);
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type='button'
          aria-label='Scroll to the top'
          title='Back to top'
          onClick={scrollToTop}
          initial={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.8, y: 12 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.85, y: 10 }
          }
          whileHover={prefersReducedMotion ? undefined : { y: -3 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          className='fixed bottom-[calc(env(safe-area-inset-bottom)+1.5rem)] right-5 z-40 grid size-12 cursor-pointer place-items-center rounded-full border border-border/70 bg-background/90 text-foreground shadow-lg shadow-black/10 backdrop-blur-md transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:right-8 sm:size-13'
        >
          <ArrowUp className='size-5' strokeWidth={1.8} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
