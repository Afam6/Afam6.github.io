'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { TechnologyMark } from '@/components/shared/technology-mark';

type ExperienceItem = {
  id: string;
  company: string;
  shortCompany: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  workstreams: Array<{ title: string; description: string }>;
  technologies: string[];
};

const experience: ExperienceItem[] = [
  {
    id: 'dws',
    company: 'DWS',
    shortCompany: 'DWS',
    role: 'IT Consultant / Software Developer',
    period: 'Jan 2025 — Present',
    location: 'Melbourne, Australia',
    summary:
      'Developing and supporting government software across two distinct areas: the iApply platform for South Australian Government clients and DWS’s managed service for the South Australian Parliament.',
    workstreams: [
      {
        title: 'iApply',
        description:
          'Investigating defects, delivering enhancements and supporting a mature forms and workflow platform used by government clients. The work spans Angular, C#/.NET, ASMX services, MongoDB, SQL Server and Azure-hosted environments.',
      },
      {
        title: 'SA Parliament',
        description:
          'Acting as the team’s primary technical contributor across Parliament’s public website and internal systems including SALT and Committees Admin—diagnosing incidents, maintaining Sitecore applications and delivering controlled production changes.',
      },
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'C#',
      '.NET',
      'MongoDB',
      'SQL Server',
      'Azure App Service',
      'IIS',
      'Sitecore',
      'SharePoint',
      'XSLT',
    ],
  },
  {
    id: 'orikan',
    company: 'Orikan / DCA',
    shortCompany: 'Orikan',
    role: 'Software Developer',
    period: 'Jan 2020 — Dec 2024',
    location: 'Melbourne, Australia',
    summary:
      'Helped build the next generation of infringement-management software for councils and government organisations, from the earliest stages through production delivery.',
    workstreams: [
      {
        title: 'IMaaS',
        description:
          'Built full-stack features for the web successor to NovaPark, supporting the infringement lifecycle and the operational teams responsible for managing it.',
      },
      {
        title: 'Correspondence & SSP',
        description:
          'Delivered an integrated WYSIWYG correspondence editor and contributed to the Self-Service Portal, where members of the public can pay fines or submit appeals and nominations online.',
      },
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
      'Perforce Helix Core',
    ],
  },
  {
    id: 'access-bank',
    company: 'Access Bank',
    shortCompany: 'Access Bank',
    role: 'Graduate Software Engineer',
    period: 'Oct 2018 — Oct 2019',
    location: 'Lagos, Nigeria',
    summary:
      'Started my professional career creating internal banking software for operational teams working with high-volume, time-sensitive financial data.',
    workstreams: [
      {
        title: 'Settlement',
        description:
          'Helped automate ATM, POS and web settlement reconciliation, reducing repetitive manual investigation and making exceptions easier to identify.',
      },
      {
        title: 'Internal tools',
        description:
          'Built .NET tools for transaction review and exception handling, after initially contributing fixes and workflow changes to PayDayLoan systems.',
      },
    ],
    technologies: [
      'C#',
      '.NET',
      '.NET Core',
      'SQL Server',
      'Oracle SQL Developer',
      'Workflow automation',
    ],
  },
];

export function Experience() {
  const [activeId, setActiveId] = useState(experience[0].id);
  const prefersReducedMotion = useReducedMotion();
  const activeExperience =
    experience.find((item) => item.id === activeId) ?? experience[0];

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

          <p className='max-w-xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 lg:justify-self-end'>
            Eight years of building and supporting dependable software across
            banking, civic technology and government digital services.
          </p>
        </div>

        <div className='mt-16 overflow-hidden rounded-[2rem] border bg-muted/20 shadow-sm sm:mt-24'>
          <div className='grid lg:grid-cols-[17rem_1fr]'>
            <div
              role='tablist'
              aria-label='Companies'
              className='flex gap-2 overflow-x-auto border-b bg-muted/45 p-3 lg:flex-col lg:border-b-0 lg:border-r lg:p-5'
            >
              {experience.map((item, index) => {
                const isActive = item.id === activeId;

                return (
                  <button
                    key={item.id}
                    id={`${item.id}-experience-tab`}
                    type='button'
                    role='tab'
                    aria-selected={isActive}
                    aria-controls={`${item.id}-experience-panel`}
                    onClick={() => setActiveId(item.id)}
                    className={`group relative min-w-[12rem] cursor-pointer rounded-2xl border px-4 py-4 text-left transition-colors lg:min-w-0 lg:px-5 lg:py-5 ${
                      isActive
                        ? 'border-foreground/[0.12] bg-background text-foreground shadow-sm'
                        : 'border-transparent text-foreground/55 hover:bg-background/65 hover:text-foreground'
                    }`}
                  >
                    <span className='flex items-center justify-between gap-5'>
                      <span>
                        <span className='block text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/40'>
                          0{index + 1}
                        </span>
                        <span className='mt-2 block text-base font-semibold tracking-[-0.02em]'>
                          {item.shortCompany}
                        </span>
                      </span>
                      <span
                        aria-hidden='true'
                        className={`size-2 rounded-full transition-colors ${isActive ? 'bg-foreground' : 'bg-foreground/15'}`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className='min-h-[43rem] bg-background/90 p-6 backdrop-blur-sm sm:p-9 lg:p-12'>
              <AnimatePresence mode='wait' initial={false}>
                <motion.article
                  key={activeExperience.id}
                  id={`${activeExperience.id}-experience-panel`}
                  role='tabpanel'
                  aria-labelledby={`${activeExperience.id}-experience-tab`}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: -8 }
                  }
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.28,
                    ease: 'easeOut',
                  }}
                >
                  <div className='border-b pb-8'>
                    <p className='text-sm font-medium text-foreground/55'>
                      {activeExperience.period} · {activeExperience.location}
                    </p>
                    <h3 className='mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl'>
                      {activeExperience.company}
                    </h3>
                    <p className='mt-2 text-sm font-medium text-foreground/65 sm:text-base'>
                      {activeExperience.role}
                    </p>
                    <p className='mt-7 max-w-3xl text-lg leading-8 tracking-[-0.018em] text-foreground/80 sm:text-xl sm:leading-9'>
                      {activeExperience.summary}
                    </p>
                  </div>

                  <div className='divide-y'>
                    {activeExperience.workstreams.map((workstream) => (
                      <div
                        key={workstream.title}
                        className='grid gap-3 py-6 sm:grid-cols-[10rem_1fr] sm:gap-7'
                      >
                        <h4 className='text-sm font-semibold tracking-[-0.015em]'>
                          {workstream.title}
                        </h4>
                        <p className='text-sm leading-6 text-foreground/68 sm:text-base sm:leading-7'>
                          {workstream.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className='border-t pt-7'>
                    <p className='mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/45'>
                      Technologies used
                    </p>
                    <div className='flex flex-wrap gap-2.5'>
                      {activeExperience.technologies.map((technology) => (
                        <TechnologyMark key={technology} name={technology} />
                      ))}
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
