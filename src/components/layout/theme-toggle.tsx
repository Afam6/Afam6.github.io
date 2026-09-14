'use client';

import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.7, rotate: 360 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className='flex cursor-pointer'
    >
      <Button
        type='button'
        variant='ghost'
        size='icon'
        className='relative size-10 cursor-pointer rounded-full text-foreground'
        aria-label='Toggle colour theme'
        title='Toggle colour theme'
        onClick={toggleTheme}
      >
        <Sun
          className='size-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0'
          strokeWidth={1.9}
        />

        <Moon
          className='absolute size-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100'
          strokeWidth={1.9}
        />
      </Button>
    </motion.div>
  );
}
