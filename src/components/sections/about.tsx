'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id='about' className='border-t px-6 py-24 sm:py-32'>
      <div className='mx-auto max-w-6xl'>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.55,
            ease: 'easeOut',
          }}
        >
          <p className='text-sm font-medium text-muted-foreground'>
            04 · About
          </p>

          <h2 className='mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl'>
            A little more about me.
          </h2>

          <div className='mt-12 border-t pt-12 sm:mt-16 sm:pt-16'>
            <div className='grid gap-14 lg:grid-cols-[18rem_1fr] lg:gap-20'>
              <aside className='lg:sticky lg:top-28 lg:self-start'>
                <div className='relative mx-auto aspect-square w-full max-w-[15rem] overflow-hidden rounded-full border bg-muted shadow-sm lg:mx-0'>
                  <Image
                    src='/images/afam-linkedin.png'
                    alt='Afam Ezechukwu'
                    fill
                    sizes='240px'
                    className='object-cover object-top'
                  />
                </div>

                <div className='mt-7 text-center lg:text-left'>
                  <h3 className='text-2xl font-semibold tracking-[-0.035em]'>
                    Afam Ezechukwu
                  </h3>
                  <p className='mt-2 text-base text-foreground/65'>
                    Software Developer
                  </p>
                  <p className='mt-1 text-sm text-foreground/50'>
                    Melbourne, Australia
                  </p>
                </div>
              </aside>

              <div className='max-w-3xl'>
                <h3 className='text-3xl font-semibold tracking-[-0.04em] sm:text-4xl'>
                  Hi, I&apos;m Afam.
                </h3>

                <div className='mt-8 space-y-7 text-base leading-7 text-foreground/72 sm:text-lg sm:leading-8'>
                  <p>
                    I&apos;m a software developer based in Melbourne with
                    experience across banking, civic technology and government
                    digital services. I enjoy taking complicated systems and
                    turning them into software that feels clearer, more modern
                    and easier to trust. I earned an MEng in Software
                    Engineering from the University of Sheffield.
                  </p>

                  <p>
                    Right now, I work at DWS across the iApply platform and the
                    South Australian Parliament managed service. My work moves
                    between application development, production support, data
                    investigation and untangling issues across mature systems
                    where reliability matters just as much as new features.
                  </p>

                  <p>
                    When I&apos;m not working, I&apos;m usually building one of
                    my own products, playing football, going on a long walk or
                    making music on the guitar or piano. Personal projects give
                    me room to experiment with ideas and technologies that I may
                    not encounter during the working day.
                  </p>

                  <p>
                    At the moment, I&apos;m especially interested in modernising
                    legacy products, thoughtful interface design, interactive
                    web experiences and practical uses of AI in software
                    development. There is always another system to understand
                    and a better way to build it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
