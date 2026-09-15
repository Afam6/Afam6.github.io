import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: '01',
    type: 'Professional · Product modernisation',
    title: 'iApply Workbench',
    description:
      'Modernising a legacy government forms platform into a clearer, faster React experience—without losing the capability built over many years.',
    tags: ['React', 'TypeScript', 'shadcn/ui', '.NET'],
    status: 'Confidential product work',
    kind: 'iapply',
  },
  {
    number: '02',
    type: 'Personal · Product engineering',
    title: 'Living Bread',
    description:
      'A focused Bible-reading and study platform combining Scripture, footnotes, cross-references, audio, books and songs in one considered experience.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Audio'],
    status: 'Visit Living Bread',
    href: 'https://livingbread.life/bible',
    kind: 'living-bread',
  },
  {
    number: '03',
    type: 'Client · Web design and development',
    title: 'Precise Beauty',
    description:
      'A calm, editorial website for a Canberra beauty studio—designed to present services, recent work and booking information with clarity.',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive UI', 'UX'],
    status: 'Currently in development',
    kind: 'precise-beauty',
  },
] as const;

type ProjectKind = (typeof projects)[number]['kind'];

function ProjectPreview({ kind }: { kind: ProjectKind }) {
  if (kind === 'iapply') {
    return (
      <div className='relative flex aspect-[4/3] items-end overflow-hidden rounded-[2rem] border border-white/10 bg-[#152e55] p-5 sm:p-8'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(91,155,255,0.45),transparent_38%)]' />

        <div className='relative w-full overflow-hidden rounded-xl border border-white/15 bg-white shadow-2xl shadow-black/25'>
          <div className='flex h-9 items-center gap-1.5 border-b bg-[#f6f7f9] px-4'>
            <span className='size-2 rounded-full bg-black/15' />
            <span className='size-2 rounded-full bg-black/15' />
            <span className='size-2 rounded-full bg-black/15' />
          </div>

          <div className='grid min-h-52 grid-cols-[4.5rem_1fr] sm:min-h-64 sm:grid-cols-[8rem_1fr]'>
            <div className='space-y-3 bg-[#edf3fb] p-3 sm:p-5'>
              <div className='h-3 w-10 rounded-full bg-[#3974c8]' />
              <div className='h-2 w-full rounded-full bg-[#b8cce8]' />
              <div className='h-2 w-4/5 rounded-full bg-[#cad8eb]' />
              <div className='h-2 w-3/5 rounded-full bg-[#cad8eb]' />
            </div>

            <div className='space-y-4 p-4 sm:p-7'>
              <div>
                <div className='h-3 w-24 rounded-full bg-[#183b67]' />
                <div className='mt-2 h-2 w-36 rounded-full bg-black/10' />
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div className='h-16 rounded-lg border bg-[#f8fafc]' />
                <div className='h-16 rounded-lg border bg-[#f8fafc]' />
              </div>

              <div className='h-14 rounded-lg border bg-[#f8fafc]' />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'living-bread') {
    return (
      <div className='relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#171713] p-7 sm:p-12'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,165,104,0.18),transparent_55%)]' />

        <div className='relative w-full max-w-md rounded-2xl border border-[#d9c69a]/20 bg-[#f1ead9] p-6 text-[#29251d] shadow-2xl shadow-black/40 sm:p-9'>
          <p className='text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8b7342]'>
            The Gospel according to John
          </p>

          <p className='mt-6 font-serif text-xl leading-relaxed sm:text-3xl'>
            In the beginning was the Word, and the Word was with God.
          </p>

          <div className='mt-7 flex items-center justify-between border-t border-[#29251d]/15 pt-4'>
            <span className='text-xs font-medium'>John 1:1</span>
            <div className='flex gap-1.5'>
              <span className='size-2 rounded-full bg-[#a18750]' />
              <span className='size-2 rounded-full bg-[#c7b98f]' />
              <span className='size-2 rounded-full bg-[#29251d]' />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[2rem] border bg-[#e7ddd5] p-8 sm:p-12'>
      <div className='absolute -left-20 -top-20 size-64 rounded-full bg-[#b7907d]/35 blur-3xl' />
      <div className='absolute -bottom-20 -right-16 size-64 rounded-full bg-white/60 blur-3xl' />

      <div className='relative flex items-end gap-4 sm:gap-7'>
        <div className='w-28 rounded-[1.75rem] border border-white/60 bg-[#fbf8f5] p-3 shadow-xl shadow-[#73584b]/15 sm:w-40'>
          <div className='aspect-[3/4] rounded-2xl bg-[#c3a18e]' />
          <div className='mt-4 h-2 w-3/4 rounded-full bg-[#6d5144]/70' />
          <div className='mt-2 h-2 w-1/2 rounded-full bg-[#6d5144]/20' />
        </div>

        <div className='mb-6 w-24 rounded-[1.5rem] border border-white/60 bg-[#fbf8f5] p-3 shadow-xl shadow-[#73584b]/15 sm:w-32'>
          <div className='grid aspect-square place-items-center rounded-xl bg-[#2b2421] text-3xl font-semibold text-[#f2e9e2]'>
            PB
          </div>
          <div className='mt-3 h-2 w-full rounded-full bg-[#6d5144]/20' />
          <div className='mt-2 h-2 w-2/3 rounded-full bg-[#6d5144]/20' />
        </div>
      </div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id='work' className='border-t px-6 py-24 sm:py-32'>
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-8 pb-20 lg:grid-cols-[1fr_1.35fr] lg:items-end'>
          <div>
            <p className='text-sm font-medium text-muted-foreground'>
              01 · Selected work
            </p>

            <h2 className='mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl'>
              Software shaped
              <br />
              around real needs.
            </h2>
          </div>

          <p className='max-w-xl text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8 lg:justify-self-end'>
            A selection of professional, personal and client projects spanning
            product modernisation, interface design and full-stack engineering.
          </p>
        </div>

        <div>
          {projects.map((project, index) => {
            const projectDetails = (
              <div
                className={
                  index % 2 === 1 ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8'
                }
              >
                <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                  <span>{project.number}</span>
                  <span className='h-px w-8 bg-border' />
                  <span>{project.type}</span>
                </div>

                <h3 className='mt-6 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl'>
                  {project.title}
                </h3>

                <p className='mt-6 max-w-lg text-base leading-7 text-foreground/65 sm:text-lg sm:leading-8'>
                  {project.description}
                </p>

                <ul
                  className='mt-8 flex flex-wrap gap-2'
                  aria-label={`${project.title} technologies`}
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className='rounded-full border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground/70'
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {'href' in project ? (
                  <a
                    href={project.href}
                    target='_blank'
                    rel='noreferrer'
                    className='group mt-9 inline-flex items-center gap-2 font-medium'
                  >
                    {project.status}
                    <ArrowUpRight className='size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                  </a>
                ) : (
                  <p className='mt-9 text-sm font-medium text-foreground/45'>
                    {project.status}
                  </p>
                )}
              </div>
            );

            return (
              <article
                key={project.title}
                className='grid gap-10 border-t py-14 first:border-t-0 first:pt-0 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14'
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                  <ProjectPreview kind={project.kind} />
                </div>

                {projectDetails}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
