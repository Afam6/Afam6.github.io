import { SiteHeader } from '@/components/layout/site-header';
import { Capabilities } from '@/components/sections/capabilities';
import { Hero } from '@/components/sections/hero';
import { SelectedWork } from '@/components/sections/selected-work';
import { Experience } from '@/components/sections/experience';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <SelectedWork />
        <Capabilities />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}
