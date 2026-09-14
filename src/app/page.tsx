import { SiteHeader } from '@/components/layout/site-header';

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id='top'>
        <section className='flex min-h-screen items-center px-6 pt-28'>
          <div className='mx-auto w-full max-w-7xl'>
            <p className='mb-5 text-sm font-medium text-muted-foreground'>
              Software Developer · Melbourne, Australia
            </p>

            <h1 className='max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-8xl'>
              I build thoughtful software for real-world problems.
            </h1>

            <p className='mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl'>
              I&apos;m Afam Ezechukwu — a full-stack developer focused on modern
              web products, thoughtful interfaces, and making complex systems
              feel simple.
            </p>
          </div>
        </section>

        <section id='work' className='min-h-[80vh] border-t px-6 py-28'>
          <div className='mx-auto max-w-7xl'>
            <p className='text-sm text-muted-foreground'>01</p>
            <h2 className='mt-4 text-4xl font-semibold tracking-tight'>
              Selected work
            </h2>
          </div>
        </section>

        <section id='about' className='min-h-[80vh] border-t px-6 py-28'>
          <div className='mx-auto max-w-7xl'>
            <p className='text-sm text-muted-foreground'>02</p>
            <h2 className='mt-4 text-4xl font-semibold tracking-tight'>
              About
            </h2>
          </div>
        </section>

        <section id='experience' className='min-h-[80vh] border-t px-6 py-28'>
          <div className='mx-auto max-w-7xl'>
            <p className='text-sm text-muted-foreground'>03</p>
            <h2 className='mt-4 text-4xl font-semibold tracking-tight'>
              Experience
            </h2>
          </div>
        </section>

        <section id='credentials' className='min-h-[80vh] border-t px-6 py-28'>
          <div className='mx-auto max-w-7xl'>
            <p className='text-sm text-muted-foreground'>04</p>
            <h2 className='mt-4 text-4xl font-semibold tracking-tight'>
              Credentials
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
