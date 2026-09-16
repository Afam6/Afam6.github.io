'use client';

import { ArrowUpRight, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/afam-ezechukwu-026493ba',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Afam6',
    external: true,
  },
  {
    label: 'Résumé',
    href: '/resume',
    external: false,
  },
];

export function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id='contact' className='border-t px-6 pb-8 pt-24 sm:pt-32'>
      <div className='mx-auto max-w-6xl'>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            ease: 'easeOut',
          }}
          className='overflow-hidden rounded-[2rem] bg-foreground text-background sm:rounded-[2.5rem]'
        >
          <div className='p-7 sm:p-12 lg:p-16'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
              <p className='text-sm font-medium text-background/55'>
                05 · Let&apos;s talk
              </p>

              <div className='inline-flex items-center gap-2 rounded-full border border-background/15 px-3 py-1.5 text-xs font-medium text-background/65'>
                <span
                  aria-hidden='true'
                  className='size-2 rounded-full bg-emerald-400'
                />
                Melbourne · Open to the right opportunity
              </div>
            </div>

            <h2 className='mt-16 max-w-5xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:mt-24 sm:text-6xl lg:text-7xl'>
              Have a role, product or difficult system in mind?
            </h2>

            <p className='mt-7 max-w-2xl text-base leading-7 text-background/60 sm:text-lg sm:leading-8'>
              I&apos;m always interested in thoughtful engineering work,
              ambitious product teams and the kind of software challenge that
              benefits from patience, curiosity and a fresh pair of eyes.
            </p>

            <a
              href='mailto:afamezechukwu@gmail.com?subject=Let%27s%20work%20together'
              className='group mt-12 inline-flex items-center gap-3 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground sm:px-6 sm:py-3.5 sm:text-base'
            >
              <Mail className='size-5' strokeWidth={1.8} />
              Email me
              <ArrowUpRight
                className='size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                strokeWidth={1.8}
              />
            </a>

            <div className='mt-16 border-t border-background/15 pt-4 sm:mt-24'>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className='group flex items-center justify-between border-b border-background/15 py-5 text-lg font-medium tracking-[-0.02em] text-background/70 transition-colors hover:text-background sm:text-xl'
                >
                  {link.label}
                  <ArrowUpRight
                    className='size-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                    strokeWidth={1.6}
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className='flex flex-col gap-5 py-8 text-sm text-foreground/45 sm:flex-row sm:items-center sm:justify-between'>
          <p>© {new Date().getFullYear()} Afam Ezechukwu</p>

          <div className='flex items-center gap-5'>
            <span>Designed and built in Melbourne</span>
            <a
              href='#top'
              className='font-medium text-foreground/65 transition-colors hover:text-foreground'
            >
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
