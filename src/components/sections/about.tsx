'use client';

import { motion, useReducedMotion } from 'motion/react';

const details = [
  {
    label: 'Journey',
    value: 'Nigeria → Sheffield → Melbourne',
  },
  {
    label: 'Experience',
    value: 'Banking · Civic tech · Government',
  },
  {
    label: 'Best at',
    value: 'Making complex products feel considered',
  },
];

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id='about' className='border-t px-6 py-24 sm:py-32'>
      <div className='mx-auto max-w-6xl'>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.55,
            ease: 'easeOut',
          }}
          className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'
        >
          <div>
            <p className='text-sm font-medium text-muted-foreground'>
              04 · About
            </p>

            <h2 className='mt-5 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl'>
              I make complicated software feel considered.
            </h2>
          </div>

          <div className='lg:pt-9'>
            <div className='space-y-6 text-base leading-7 text-foreground/65 sm:text-lg sm:leading-8'>
              <p>
                I&apos;m Afam, a Nigerian-born software developer based in
                Melbourne. My path through the University of Sheffield, banking
                software in Lagos and public-sector technology in Australia has
                taught me to look at software from more than one angle.
              </p>

              <p>
                I&apos;m most energised by mature, complicated products—the ones
                carrying years of business knowledge beneath interfaces people
                have simply learned to tolerate. I enjoy understanding what
                makes them valuable, then making them clearer, faster and easier
                to trust.
              </p>

              <p>
                That same curiosity follows me outside work, where I build
                products spanning Bible study, small-business experiences and
                whatever new idea refuses to leave me alone.
              </p>
            </div>

            <dl className='mt-12 divide-y border-y'>
              {details.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.4,
                    delay: prefersReducedMotion ? 0 : index * 0.07,
                    ease: 'easeOut',
                  }}
                  className='grid gap-2 py-5 sm:grid-cols-[8rem_1fr] sm:items-baseline'
                >
                  <dt className='text-xs font-semibold uppercase tracking-[0.12em] text-foreground/35'>
                    {detail.label}
                  </dt>
                  <dd className='text-base font-medium tracking-[-0.015em] sm:text-lg'>
                    {detail.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </motion.div>

        <motion.blockquote
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.55,
            delay: prefersReducedMotion ? 0 : 0.1,
            ease: 'easeOut',
          }}
          className='mt-16 rounded-[2rem] border bg-muted/25 p-7 sm:mt-24 sm:p-10 lg:p-14'
        >
          <p className='max-w-4xl text-2xl font-medium leading-[1.2] tracking-[-0.035em] sm:text-4xl sm:leading-[1.15]'>
            “The work I enjoy most starts with{' '}
            <span className='text-foreground/45'>
              ‘this is how it has always been’
            </span>{' '}
            and ends with something people are genuinely happier to use.”
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
