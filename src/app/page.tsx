import { SiteHeader } from '@/components/layout/site-header';
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />

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
