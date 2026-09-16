'use client';

import { motion, useReducedMotion } from 'motion/react';

type ExperienceItem = {
  company: string;
  mark: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  current?: boolean;
};

const experience: ExperienceItem[] = [
  {
    company: 'DWS',
    mark: 'DWS',
    role: 'IT Consultant / Software Developer',
    period: 'Jan 2025 — Present',
    location: 'Melbourne, Australia',
    current: true,
    summary:
      'Building, modernising and supporting government-facing software across iApply and the South Australian Parliament managed service.',
    highlights: [
      'Leading a modern React and TypeScript direction for iApply Workbench while preserving the capability of a mature, highly configurable forms platform.',
      'Delivering across Angular, C#/.NET, REST services, MongoDB and SQL Server—from interface work to data investigation and production fixes.',
      'Investigating staging, UAT and production issues across Azure App Services, IIS and Sitecore, then translating findings clearly for technical and non-technical stakeholders.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Angular',
      'C#',
      '.NET',
      'MongoDB',
      'SQL Server',
      'Azure',
      'Sitecore',
    ],
  },
  {
    company: 'Orikan / DCA',
    mark: 'O',
    role: 'Software Developer',
    period: 'Jan 2020 — Dec 2024',
    location: 'Melbourne, Australia',
    summary:
      'Developed operational and customer-facing software for councils and government organisations, including infringement management, self-service and payment workflows.',
    highlights: [
      'Built full-stack workflow and data features across C#/.NET Core, Angular, TypeScript, SQL Server and REST APIs.',
      'Turned complex operational requirements into maintainable product behaviour in systems used by public-sector clients.',
      'Handled debugging, automated testing, production fixes and delivery through established team and release processes.',
    ],
    technologies: [
      'C#',
      '.NET Core',
      'Angular',
      'TypeScript',
      'SQL Server',
      'REST APIs',
      'Azure DevOps',
      'Jenkins',
      'Perforce',
    ],
  },
  {
    company: 'Access Bank',
    mark: 'A',
    role: 'Graduate Software Engineer',
    period: 'Oct 2018 — Oct 2019',
    location: 'Lagos, Nigeria',
    summary:
      'Started my professional career building internal banking tools that reduced manual work across branch operations, lending and settlement reconciliation.',
    highlights: [
      'Built .NET and .NET Core tools for branch transaction review, exception handling and loan workflows.',
      'Helped automate ATM, POS and web settlement reconciliation processes used by operational teams.',
      'Developed an early grounding in production reliability, financial data and software used by people doing time-sensitive work.',
    ],
    technologies: [
      'C#',
      '.NET',
      '.NET Core',
      'SQL',
      'Banking systems',
      'Workflow automation',
    ],
  },
];

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id='experience' className='border-t px-6 py-24 sm:py-32'>
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-end'>
          <div>
            <p className='text-sm font-medium text-muted-foreground'>
              03 · Experience
            </p>

            <h2 className='mt-5 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl'>
              Built in the real world.
            </h2>
          </div>

          <p className='max-w-xl text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8 lg:justify-self-end'>
            Eight years of turning complex requirements into dependable
            software—across banking, civic technology and government-scale
            digital services.
          </p>
        </div>

        <div className='relative mt-16 sm:mt-24'>
          <div
            aria-hidden='true'
            className='absolute bottom-0 left-5 top-0 hidden w-px bg-border sm:block'
          />

          <div className='space-y-5 sm:space-y-8'>
            {experience.map((item, index) => (
              <motion.article
                key={item.company}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.06,
                  ease: 'easeOut',
                }}
                className='relative sm:pl-16'
              >
                <span
                  aria-hidden='true'
                  className={`absolute left-3.5 top-10 hidden size-3 rounded-full border-[3px] border-background sm:block ${
                    item.current ? 'bg-foreground' : 'bg-border'
                  }`}
                />

                <div className='overflow-hidden rounded-[2rem] border bg-background'>
                  <div className='grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.78fr_1.4fr] lg:gap-14 lg:p-10'>
                    <div className='flex flex-col'>
                      <div className='flex items-start justify-between gap-4'>
                        <span className='grid min-h-14 min-w-14 place-items-center rounded-2xl border bg-muted px-3 text-sm font-bold tracking-[-0.04em] shadow-sm'>
                          {item.mark}
                        </span>

                        {item.current ? (
                          <span className='rounded-full border border-foreground/15 bg-foreground px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-background'>
                            Current
                          </span>
                        ) : null}
                      </div>

                      <div className='mt-8'>
                        <p className='text-sm font-medium text-foreground/45'>
                          {item.period}
                        </p>
                        <p className='mt-1 text-sm text-foreground/45'>
                          {item.location}
                        </p>

                        <h3 className='mt-6 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl'>
                          {item.company}
                        </h3>
                        <p className='mt-2 text-sm font-medium leading-6 text-foreground/65'>
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className='text-lg font-medium leading-8 tracking-[-0.02em] text-foreground/85 sm:text-xl sm:leading-9'>
                        {item.summary}
                      </p>

                      <ul className='mt-8 divide-y border-y'>
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className='grid gap-3 py-5 text-sm leading-6 text-foreground/60 sm:grid-cols-[1.5rem_1fr] sm:text-base sm:leading-7'
                          >
                            <span
                              aria-hidden='true'
                              className='font-medium text-foreground/35'
                            >
                              ↳
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className='mt-7 flex flex-wrap gap-2'>
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className='rounded-full border px-3 py-1.5 text-xs font-medium text-foreground/55'
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
