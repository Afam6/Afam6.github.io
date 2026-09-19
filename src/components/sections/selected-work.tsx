import { ArrowUpRight, Music2 } from 'lucide-react';

const projects = [
  {
    number: '01',
    type: 'Personal · Product rebuild',
    title: 'StockKeeper',
    description:
      'Reworking one of my earliest full-stack products: an inventory platform for tracking warehouses, products, stock levels and business value through a focused operational dashboard.',
    tags: ['Full-stack', 'Inventory', 'Warehouses', 'Dashboards'],
    status: 'Rebuild planned',
    kind: 'stockkeeper',
  },
  {
    number: '02',
    type: 'Personal · Product engineering',
    title: 'Living Bread',
    description:
      'A Bible and hymn-study platform bringing Scripture, footnotes, cross-references, books and audio together—with a visual MIDI player that animates hymn arrangements across a piano keyboard.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'MIDI'],
    status: 'Visit Living Bread',
    href: 'https://livingbread.life/bible',
    kind: 'living-bread',
  },
  {
    number: '03',
    type: 'Personal · Interactive learning',
    title: 'AuraScale',
    description:
      'An interactive music-learning platform connecting piano, guitar and practical theory through instrument paths, key exploration and chord-building tools.',
    tags: ['Music theory', 'Piano', 'Guitar', 'Interactive UI'],
    status: 'Currently in development',
    kind: 'aurascale',
  },
] as const;

type ProjectKind = (typeof projects)[number]['kind'];

function ProjectPreview({ kind }: { kind: ProjectKind }) {
  if (kind === 'stockkeeper') {
    return (
      <div className='relative aspect-[4/3] overflow-hidden rounded-[2rem] border bg-[#f4f7fc] p-4 sm:p-7'>
        <div className='flex h-full overflow-hidden rounded-xl border border-[#dce5f3] bg-white shadow-2xl shadow-[#1d4f91]/15'>
          <aside className='flex w-[22%] flex-col border-r border-[#dce5f3] bg-white p-2.5 sm:p-4'>
            <div className='mb-5 flex items-center gap-1.5 sm:mb-8'>
              <span className='grid size-7 place-items-center rounded-lg bg-[#2f7ee6] text-[8px] font-bold text-white sm:size-9 sm:text-[10px]'>
                SK
              </span>
              <span className='hidden h-2 w-8 rounded-full bg-[#122a4a] sm:block' />
            </div>
            <div className='space-y-3'>
              <div className='h-5 rounded-md bg-[#eaf2fd] p-1.5'>
                <div className='h-2 w-4/5 rounded-full bg-[#2f7ee6]/45' />
              </div>
              <div className='h-2 w-4/5 rounded-full bg-[#91a9ca]/35' />
              <div className='h-2 w-3/5 rounded-full bg-[#91a9ca]/35' />
            </div>
            <div className='mt-auto h-6 rounded-md bg-[#2f7ee6]' />
          </aside>

          <div className='min-w-0 flex-1 bg-[#f7f9fd] p-3 sm:p-5'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='h-1.5 w-10 rounded-full bg-[#8da9cf]/55' />
                <div className='mt-2 h-3 w-20 rounded-full bg-[#132a49]' />
              </div>
              <div className='h-6 w-20 rounded-md bg-[#2f7ee6]' />
            </div>

            <div className='mt-4 grid grid-cols-4 gap-1.5 sm:gap-2.5'>
              {[48, 34, 58, 42].map((width) => (
                <div
                  key={width}
                  className='rounded-md border border-[#dce5f3] bg-white p-2 sm:p-3'
                >
                  <div className='h-1.5 w-3/4 rounded-full bg-[#9bb3d4]/45' />
                  <div
                    className='mt-2 h-2 rounded-full bg-[#173253]'
                    style={{ width: `${width}%` }}
                  />
                </div>
              ))}
            </div>

            <div className='mt-3 grid grid-cols-[1fr_34%] gap-2.5'>
              <div className='rounded-md border border-[#dce5f3] bg-white p-3'>
                <div className='flex items-center justify-between'>
                  <span className='h-2 w-20 rounded-full bg-[#173253]' />
                  <span className='h-1.5 w-12 rounded-full bg-[#9bb3d4]/40' />
                </div>
                <div className='mt-4 flex h-24 items-end justify-around gap-1.5 border-b border-[#dce5f3] px-1 sm:h-32'>
                  {[32, 55, 42, 82, 61, 73, 38].map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className='w-1.5 rounded-t-full bg-[#2f7ee6] sm:w-2'
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className='rounded-md border border-[#dce5f3] bg-white p-2.5'>
                <div className='h-2 w-14 rounded-full bg-[#173253]' />
                <div className='mt-3 space-y-2.5'>
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className='flex items-center gap-2 border-b border-[#e6edf7] pb-2'
                    >
                      <span className='size-5 rounded bg-[#b6cae5]' />
                      <span className='h-1.5 flex-1 rounded-full bg-[#8da9cf]/45' />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'living-bread') {
    return (
      <div className='relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[2rem] border bg-[#e7e8e5] p-5 sm:p-8'>
        <div className='absolute inset-0 opacity-45'>
          <div className='mx-auto mt-8 h-2 w-1/3 rounded-full bg-[#547968]/25' />
          <div className='mx-auto mt-4 h-2 w-1/2 rounded-full bg-[#547968]/15' />
        </div>

        <div className='relative w-full overflow-hidden rounded-2xl border border-[#d7d4ca] bg-[#fbfaf6] text-[#202b27] shadow-2xl shadow-black/20'>
          <div className='flex items-center justify-between border-b border-[#ddd9ce] px-4 py-3 sm:px-5'>
            <div>
              <p className='text-[7px] font-semibold uppercase tracking-[0.18em] text-[#567767] sm:text-[9px]'>
                MIDI player
              </p>
              <p className='mt-1 font-serif text-xs font-semibold sm:text-base'>
                Be Thou my vision
              </p>
            </div>
            <span className='grid size-7 place-items-center rounded-full border border-[#cfd7d1] text-xs text-[#567767]'>
              ×
            </span>
          </div>

          <div className='p-3 sm:p-4'>
            <div className='flex items-center gap-2 rounded-lg border border-[#ddd9ce] bg-white/70 p-2'>
              <span className='grid size-6 place-items-center rounded-full border border-[#cfd7d1] text-[8px] text-[#567767]'>
                ▶
              </span>
              <span className='h-1 flex-1 rounded-full bg-[#567767]' />
              <span className='text-[7px] text-[#5d6977]'>0:15 / 0:31</span>
            </div>

            <div className='relative mt-3 h-20 overflow-hidden rounded-lg border border-[#ddd9ce] bg-gradient-to-b from-[#e3e5e3] to-[#f5f3ed] sm:h-28'>
              {[
                ['18%', '22%', 'green'],
                ['31%', '48%', 'green'],
                ['43%', '30%', 'green'],
                ['55%', '62%', 'blue'],
                ['68%', '38%', 'blue'],
                ['79%', '54%', 'blue'],
              ].map(([left, height, colour]) => (
                <span
                  key={`${left}-${height}`}
                  className={`absolute top-2 w-2 rounded-sm border sm:w-3 ${
                    colour === 'green'
                      ? 'border-emerald-600 bg-emerald-300'
                      : 'border-blue-600 bg-blue-300'
                  }`}
                  style={{ left, height }}
                />
              ))}
            </div>

            <div className='mt-2 grid h-14 grid-cols-12 overflow-hidden rounded-lg border border-[#d7d4ca] bg-white sm:h-20'>
              {Array.from({ length: 12 }, (_, index) => (
                <span
                  key={index}
                  className={`relative border-r border-[#d7d4ca] last:border-r-0 ${
                    [4, 8].includes(index) ? 'bg-blue-200' : 'bg-white'
                  }`}
                >
                  {[0, 1, 3, 4, 5, 7, 8, 10].includes(index) ? (
                    <span className='absolute left-[62%] top-0 h-[58%] w-1/2 bg-[#111827]' />
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-[#071120] text-white'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_68%_38%,rgba(108,99,255,0.24),transparent_42%)]' />
      <div className='absolute inset-x-[18%] bottom-0 h-2/5 bg-[#4f46e5]/15 blur-3xl' />

      <div className='relative flex h-12 items-center justify-between border-b border-white/10 px-4 sm:h-16 sm:px-6'>
        <div className='flex items-center gap-2.5'>
          <span className='grid size-7 place-items-center rounded-lg bg-gradient-to-br from-[#7067ff] to-[#4937df] sm:size-9'>
            <Music2 className='size-3.5 sm:size-4.5' strokeWidth={2.2} />
          </span>
          <span className='text-xs font-semibold tracking-[-0.02em] sm:text-sm'>
            AuraScale
          </span>
        </div>

        <div className='hidden items-center gap-4 text-[9px] text-white/50 sm:flex'>
          <span>Piano</span>
          <span>Guitar</span>
          <span>Key Explorer</span>
        </div>

        <span className='h-6 w-14 rounded-md bg-[#6658ef] sm:h-7 sm:w-16' />
      </div>

      <div className='absolute inset-x-0 bottom-0 top-12 flex flex-col items-center justify-center px-7 text-center sm:top-16 sm:px-12'>
        <div className='rounded-full border border-white/15 bg-white/[0.035] px-3 py-1 text-[7px] font-medium uppercase tracking-[0.24em] text-white/60 sm:text-[9px]'>
          Piano and guitar · one theory backbone
        </div>

        <p className='mt-5 max-w-md text-2xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-4xl'>
          Master the{' '}
          <span className='bg-gradient-to-r from-[#a6a8ff] via-[#8177ff] to-[#e3b770] bg-clip-text text-transparent'>
            language
          </span>{' '}
          of music
        </p>

        <p className='mt-4 max-w-sm text-[10px] leading-4 text-white/50 sm:text-xs sm:leading-5'>
          Practical instrument paths and interactive theory tools that feel
          connected instead of fragmented.
        </p>

        <div className='mt-5 flex gap-2'>
          <span className='rounded-lg bg-gradient-to-r from-[#7d75ff] to-[#5542eb] px-4 py-2 text-[9px] font-medium sm:text-[10px]'>
            Start learning
          </span>
          <span className='rounded-lg border border-white/15 bg-white/[0.035] px-4 py-2 text-[9px] text-white/70 sm:text-[10px]'>
            Explore tools
          </span>
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
            A selection of personal products spanning practical software,
            interactive learning and full-stack engineering.
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
                  aria-label={`${project.title} project tags`}
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
