import { Mail } from 'lucide-react';
import { TypedHeading } from '@/components/sections/typed-heading';
import { AdroitOrb } from '@/components/sections/adroit-orb';
import { CursorParticles } from './cursor-particles';

export function Hero() {
  return (
    <section
      id='top'
      className='relative flex min-h-svh items-center overflow-hidden px-6 pt-16'
    >
      <CursorParticles />

      <div className='relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center py-24 text-center'>
        <p className='text-sm font-medium text-foreground/60 sm:text-[15px]'>
          Software Developer · Melbourne, Australia
        </p>

        <AdroitOrb />

        <TypedHeading />

        <p className='mt-8 max-w-2xl text-base leading-7 text-foreground/65 sm:text-lg sm:leading-8'>
          Welcome to my slightly over-engineered corner of the internet, where I
          build thoughtful software, modernise complex systems, and document
          what I learn.
          <span className='mt-2 block'>Also, it&apos;s my portfolio.</span>
        </p>

        <a
          href='mailto:afamezechukwu@gmail.com'
          className='group mt-9 inline-flex items-center h-fit px-6 py-2.5 rounded-full border text-base leading-normal tracking-normal font-sans font-medium no-underline transition-transform duration-200 hover:scale-105 active:scale-95 ease-out 
  border-[rgba(33,34,38,0.06)] bg-[#b7bfd9]/10 text-gray-900 backdrop-blur-[6px] hover:bg-[#f0f1f5] focus-visible:bg-[#f0f1f5] focus-visible:outline-none
  dark:border-[rgba(255,255,255,0.1)] dark:bg-white/5 dark:text-gray-100 dark:hover:bg-white/10 dark:focus-visible:bg-white/10'
        >
          <span className='flex items-center gap-2'>
            <Mail className='h-5 w-5 transition-transform duration-300 group-hover:-rotate-6' />
            Say Hi!
          </span>
        </a>
      </div>
    </section>
  );
}
