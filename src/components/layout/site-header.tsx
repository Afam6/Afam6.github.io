'use client';

import { useState } from 'react';
import { BarChart3, Menu, Search } from 'lucide-react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';

import { AdroitLogo } from '@/components/layout/adroit-logo';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#credentials' },
];

export function SiteHeader() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (mobileOpen || current < 80) {
      setHidden(false);
      return;
    }

    setHidden(current > previous);
  });

  const closeMobileNavigation = () => {
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={false}
      animate={{
        y: hidden && !mobileOpen ? -65 : 0,
      }}
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
          className='group inline-flex w-fit items-center'
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

        <div className='hidden items-center justify-end gap-1 md:flex'>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.85 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
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
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
            className='flex cursor-pointer'
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

        <div className='flex items-center justify-end gap-0.5 md:hidden'>
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='size-10 cursor-pointer rounded-full transition-transform active:scale-90'
            aria-label='Search'
            title='Search'
          >
            <Search className='size-5' strokeWidth={1.9} />
          </Button>

          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='size-10 cursor-pointer rounded-full transition-transform active:scale-90'
            aria-label='View activity'
            title='View activity'
          >
            <BarChart3 className='size-5' strokeWidth={1.9} />
          </Button>

          <ThemeToggle />

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  type='button'
                  variant='ghost'
                  size='icon'
                  className='size-10 cursor-pointer rounded-full transition-transform active:scale-90'
                  aria-label='Open navigation menu'
                >
                  <Menu className='size-6' strokeWidth={1.9} />
                </Button>
              }
            />

            <SheetContent
              side='left'
              className='w-[78vw] max-w-sm border-r border-border/70 bg-background/95 px-7 pb-8 pt-7 backdrop-blur-xl'
            >
              <SheetHeader>
                <SheetTitle className='sr-only'>Navigation menu</SheetTitle>

                <SheetDescription className='sr-only'>
                  Navigate to the main sections of Afam&apos;s portfolio.
                </SheetDescription>
              </SheetHeader>

              <div className='flex h-full flex-col'>
                <a
                  href='#top'
                  aria-label='Adroit — back to the top'
                  className='group inline-flex w-fit items-center'
                  onClick={closeMobileNavigation}
                >
                  <AdroitLogo className='size-9 transition-transform duration-300 ease-out group-hover:scale-105' />
                </a>

                <nav
                  className='mt-16 flex flex-col'
                  aria-label='Mobile navigation'
                >
                  {navigation.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.055,
                        ease: 'easeOut',
                      }}
                      onClick={closeMobileNavigation}
                      className='border-b border-border/70 py-5 text-3xl font-semibold tracking-[-0.045em] text-foreground transition-colors hover:text-foreground/60'
                    >
                      <span className='mr-4 align-middle text-xs font-medium tracking-normal text-foreground/40'>
                        0{index + 1}
                      </span>

                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
