'use client';

import { useState } from 'react';
import { BarChart3, Search } from 'lucide-react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';

import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';
import { AdroitLogo } from './adroit-logo';

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#credentials' },
];

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (current < 80) {
      setHidden(false);
      return;
    }

    setHidden(current > previous);
  });

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? -65 : 0 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className='fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md'
    >
      <div className='mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6'>
        <a
          href='#top'
          aria-label='Adroit — back to the top'
          className='group inline-flex items-center gap-2.5'
        >
          <AdroitLogo className='size-8 transition-transform duration-300 ease-out group-hover:scale-105' />
        </a>

        <nav
          className='hidden items-center gap-2 md:flex'
          aria-label='Primary navigation'
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='rounded-md px-4 py-2 text-[15px] font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='flex items-center justify-end gap-1'>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='flex cursor-pointer'
          >
            <Button
              type='button'
              variant='ghost'
              size='icon'
              className='size-10 cursor-pointer rounded-full text-foreground'
              aria-label='Search'
              title='Search'
            >
              <Search className='size-5' strokeWidth={1.9} />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='hidden cursor-pointer sm:flex'
          >
            <Button
              type='button'
              variant='ghost'
              size='icon'
              className='size-10 cursor-pointer rounded-full text-foreground'
              aria-label='View activity'
              title='View activity'
            >
              <BarChart3 className='size-5' strokeWidth={1.9} />
            </Button>
          </motion.div>

          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
