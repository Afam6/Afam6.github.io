'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  siAndroid,
  siAndroidstudio,
  siAngular,
  siApple,
  siBootstrap,
  siC,
  siClaudecode,
  siCss,
  siDjango,
  siDocker,
  siDotnet,
  siExpress,
  siGit,
  siGithub,
  siGraphql,
  siHaskell,
  siHtml5,
  siJasmine,
  siJavascript,
  siJquery,
  siMongodb,
  siMui,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siNvidia,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siRuby,
  siRubyonrails,
  siShadcnui,
  siSitecore,
  siSwift,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { TechnologyMark } from '@/components/shared/technology-mark';

type Technology = {
  name: string;
  context: string;
  icon?: SimpleIcon;
  iconSrc?: string;
  fallback?: string;
};

type Category = {
  id: string;
  label: string;
  heading: string;
  description: string;
  technologies: Technology[];
};

const categories: Category[] = [
  {
    id: 'most-used',
    label: 'Most used',
    heading: 'The tools at the centre of my work.',
    description:
      'Technologies I use regularly to build, modernise and support production software.',
    technologies: [
      { name: 'TypeScript', context: 'Current', icon: siTypescript },
      { name: 'JavaScript', context: 'Current', icon: siJavascript },
      { name: 'React', context: 'Current', icon: siReact },
      { name: 'Angular', context: 'Professional', icon: siAngular },
      {
        name: 'C#',
        context: 'Professional',
        iconSrc: '/tech-icons/csharp.svg',
      },
      { name: '.NET', context: 'Professional', icon: siDotnet },
      {
        name: 'SQL Server',
        context: 'Professional',
        iconSrc: '/tech-icons/sql-server.svg',
      },
      {
        name: 'Microsoft Azure',
        context: 'Professional',
        iconSrc: '/tech-icons/azure.svg',
      },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    heading: 'Languages encountered across the journey.',
    description:
      'From current production work to university foundations and earlier experimentation.',
    technologies: [
      { name: 'TypeScript', context: 'Current', icon: siTypescript },
      { name: 'JavaScript', context: 'Current', icon: siJavascript },
      {
        name: 'C#',
        context: 'Professional',
        iconSrc: '/tech-icons/csharp.svg',
      },
      {
        name: 'Java',
        context: 'Prior experience',
        iconSrc: '/tech-icons/java.svg',
      },
      { name: 'Python', context: 'Prior experience', icon: siPython },
      { name: 'Ruby', context: 'Prior experience', icon: siRuby },
      { name: 'Swift', context: 'Earlier exploration', icon: siSwift },
      { name: 'PHP', context: 'Earlier exploration', icon: siPhp },
      { name: 'C', context: 'University', icon: siC },
      { name: 'Haskell', context: 'University', icon: siHaskell },
      { name: 'Prolog', context: 'University', fallback: 'PL' },
      {
        name: 'XML',
        context: 'University',
        iconSrc: '/tech-icons/xml.svg',
      },
      { name: 'XSLT', context: 'Professional', fallback: 'XSLT' },
    ],
  },
  {
    id: 'web-development',
    label: 'Web development',
    heading: 'Across generations of the web.',
    description:
      'A technical journey spanning server-rendered applications, enterprise frontends and modern full-stack React products.',
    technologies: [
      { name: 'React', context: 'Current', icon: siReact },
      { name: 'Next.js', context: 'Current', icon: siNextdotjs },
      { name: 'Angular', context: 'Professional', icon: siAngular },
      { name: 'AngularJS', context: 'Prior experience', icon: siAngular },
      { name: 'ASP.NET Core', context: 'Professional', icon: siDotnet },
      { name: 'Node.js', context: 'Project work', icon: siNodedotjs },
      { name: 'Express', context: 'Project work', icon: siExpress },
      { name: 'Django', context: 'Prior experience', icon: siDjango },
      {
        name: 'Ruby on Rails',
        context: 'Prior experience',
        icon: siRubyonrails,
      },
      { name: 'GraphQL', context: 'Explored', icon: siGraphql },
      { name: 'HTML5', context: 'Foundation', icon: siHtml5 },
      { name: 'CSS', context: 'Foundation', icon: siCss },
      { name: 'Tailwind CSS', context: 'Current', icon: siTailwindcss },
      { name: 'shadcn/ui', context: 'Current', icon: siShadcnui },
      { name: 'Material UI', context: 'Professional', icon: siMui },
      { name: 'Bootstrap', context: 'Prior experience', icon: siBootstrap },
      { name: 'jQuery', context: 'Professional', icon: siJquery },
      { name: 'jQuery UI', context: 'Professional', icon: siJquery },
      {
        name: 'Apache',
        context: 'Prior experience',
        iconSrc: '/tech-icons/apache.svg',
      },
      {
        name: 'XML',
        context: 'University',
        iconSrc: '/tech-icons/xml.svg',
      },
      { name: 'XSLT', context: 'Professional', fallback: 'XSLT' },
    ],
  },
  {
    id: 'data-cloud',
    label: 'Data & cloud',
    heading: 'Data, infrastructure and deployment.',
    description:
      'Databases and platforms used across professional systems, personal products and technical investigation.',
    technologies: [
      {
        name: 'SQL Server',
        context: 'Professional',
        iconSrc: '/tech-icons/sql-server.svg',
      },
      { name: 'MongoDB', context: 'Project work', icon: siMongodb },
      {
        name: 'PostgreSQL',
        context: 'Prior experience',
        icon: siPostgresql,
      },
      { name: 'MySQL', context: 'Prior experience', icon: siMysql },
      {
        name: 'Microsoft Azure',
        context: 'Professional',
        iconSrc: '/tech-icons/azure.svg',
      },
      {
        name: 'Azure Functions',
        context: 'Professional',
        iconSrc: '/tech-icons/azure.svg',
      },
      {
        name: 'AWS',
        context: 'Prior experience',
        iconSrc: '/tech-icons/aws.svg',
      },
      { name: 'Docker', context: 'Professional', icon: siDocker },
      {
        name: 'Heroku',
        context: 'Prior experience',
        iconSrc: '/tech-icons/heroku.svg',
      },
      {
        name: 'Oracle SQL Developer',
        context: 'Earlier experience',
        iconSrc: '/tech-icons/oracle.svg',
      },
    ],
  },
  {
    id: 'testing-delivery',
    label: 'Testing & delivery',
    heading: 'How the work moves safely into production.',
    description:
      'Testing, source control, continuous integration and deployment experience across modern and legacy production systems.',
    technologies: [
      { name: 'Git', context: 'Current', icon: siGit },
      { name: 'GitHub', context: 'Current', icon: siGithub },
      {
        name: 'GitLab',
        context: 'Professional',
        iconSrc: '/tech-icons/gitlab.svg',
      },
      {
        name: 'Azure DevOps',
        context: 'Professional',
        iconSrc: '/tech-icons/azure-devops.svg',
      },
      {
        name: 'Jenkins',
        context: 'Professional',
        iconSrc: '/tech-icons/jenkins.svg',
      },
      {
        name: 'Perforce Helix Core',
        context: 'Professional',
        fallback: 'P4',
      },
      { name: 'Docker', context: 'Professional', icon: siDocker },
      {
        name: 'Karma',
        context: 'Professional',
        iconSrc: '/tech-icons/karma.svg',
      },
      { name: 'Jasmine', context: 'Professional', icon: siJasmine },
      { name: 'MSTest', context: 'Professional', fallback: 'MT' },
      {
        name: 'JUnit',
        context: 'Prior experience',
        iconSrc: '/tech-icons/junit.svg',
      },
      { name: 'xUnit', context: 'Prior experience', fallback: 'xU' },
      {
        name: 'IIS / App Service',
        context: 'Professional',
        fallback: 'IIS',
      },
      {
        name: 'Heroku',
        context: 'Prior experience',
        iconSrc: '/tech-icons/heroku.svg',
      },
    ],
  },
  {
    id: 'tools-collaboration',
    label: 'Tools & collaboration',
    heading: 'The environments behind the engineering.',
    description:
      'Editors, delivery tools, collaboration platforms and enterprise products used across teams and organisations.',
    technologies: [
      {
        name: 'VS Code',
        context: 'Current',
        iconSrc: '/tech-icons/vscode.svg',
      },
      {
        name: 'Visual Studio',
        context: 'Professional',
        iconSrc: '/tech-icons/visual-studio.svg',
      },
      {
        name: 'Jira',
        context: 'Professional',
        iconSrc: '/tech-icons/jira.svg',
      },
      {
        name: 'Confluence',
        context: 'Professional',
        iconSrc: '/tech-icons/confluence.svg',
      },
      { name: 'Claude Code', context: 'Current', icon: siClaudecode },
      {
        name: 'Google Antigravity',
        context: 'Current',
        fallback: 'AG',
      },
      { name: 'Sitecore', context: 'Professional', icon: siSitecore },
      {
        name: 'SharePoint',
        context: 'Professional',
        fallback: 'SP',
      },
      {
        name: 'Android Studio',
        context: 'University',
        icon: siAndroidstudio,
      },
      {
        name: 'Eclipse',
        context: 'University',
        iconSrc: '/tech-icons/eclipse.svg',
      },
      {
        name: 'Oracle SQL Developer',
        context: 'Earlier experience',
        iconSrc: '/tech-icons/oracle.svg',
      },
    ],
  },
  {
    id: 'ai-scientific',
    label: 'AI & scientific',
    heading: 'Exploration beyond product interfaces.',
    description:
      'AI-assisted development, data tooling and scientific computing encountered through current work, personal exploration and university.',
    technologies: [
      {
        name: 'OpenAI products',
        context: 'Current',
        fallback: 'AI',
      },
      { name: 'Claude Code', context: 'Current', icon: siClaudecode },
      {
        name: 'Google Antigravity',
        context: 'Current',
        fallback: 'AG',
      },
      { name: 'Python', context: 'Prior experience', icon: siPython },
      {
        name: 'Anaconda',
        context: 'University',
        iconSrc: '/tech-icons/anaconda.svg',
      },
      {
        name: 'NumPy',
        context: 'University',
        iconSrc: '/tech-icons/numpy.svg',
      },
      {
        name: 'Jupyter',
        context: 'University',
        iconSrc: '/tech-icons/jupyter.svg',
      },
      {
        name: 'PyCharm',
        context: 'University',
        iconSrc: '/tech-icons/pycharm.svg',
      },
      { name: 'CUDA', context: 'University', icon: siNvidia },
      { name: 'Pure Data', context: 'University', fallback: 'Pd' },
    ],
  },
  {
    id: 'explorations',
    label: 'Earlier explorations',
    heading: 'Where the journey has taken me.',
    description:
      'Technologies explored through university, earlier projects and previous stages of my development career.',
    technologies: [
      {
        name: 'Android Development',
        context: 'Earlier exploration',
        icon: siAndroid,
      },
      {
        name: 'Android Studio',
        context: 'University',
        icon: siAndroidstudio,
      },
      {
        name: 'iOS Development',
        context: 'Earlier exploration',
        icon: siApple,
      },
      { name: 'Swift', context: 'Earlier exploration', icon: siSwift },
      {
        name: 'Arduino',
        context: 'University',
        iconSrc: '/tech-icons/arduino.svg',
      },
      {
        name: 'Eclipse',
        context: 'University',
        iconSrc: '/tech-icons/eclipse.svg',
      },
      {
        name: 'Apache',
        context: 'Prior experience',
        iconSrc: '/tech-icons/apache.svg',
      },
      {
        name: 'XML',
        context: 'University',
        iconSrc: '/tech-icons/xml.svg',
      },
      { name: 'XSLT', context: 'Professional', fallback: 'XSLT' },
      {
        name: 'Pure Data',
        context: 'University',
        fallback: 'Pd',
      },
      { name: 'CUDA', context: 'University', icon: siNvidia },
      { name: 'MVC', context: 'Foundation', fallback: 'MVC' },
    ],
  },
];

function TechnologyIcon({ technology }: { technology: Technology }) {
  if (technology.iconSrc) {
    return (
      <span className='grid size-14 place-items-center rounded-2xl border bg-white shadow-sm'>
        <Image
          src={technology.iconSrc}
          alt=''
          aria-hidden='true'
          width={32}
          height={32}
          unoptimized
          className='size-8 object-contain'
        />
      </span>
    );
  }

  if (!technology.icon) {
    return <TechnologyMark name={technology.name} size='lg' />;
  }

  const useCurrentColor = ['000000', 'FFFFFF'].includes(
    technology.icon.hex.toUpperCase(),
  );

  return (
    <span className='grid size-14 place-items-center rounded-2xl border bg-muted text-sm font-semibold tracking-[-0.03em]'>
      <svg
        role='img'
        viewBox='0 0 24 24'
        className='size-8'
        fill='currentColor'
        style={{
          color: useCurrentColor ? 'currentColor' : `#${technology.icon.hex}`,
        }}
      >
        <title>{technology.name}</title>
        <path d={technology.icon.path} />
      </svg>
    </span>
  );
}

export function Capabilities() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const prefersReducedMotion = useReducedMotion();

  const activeCategory =
    categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <section id='capabilities' className='border-t px-6 py-24 sm:py-32'>
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-end'>
          <div>
            <p className='text-sm font-medium text-muted-foreground'>
              02 · Capabilities
            </p>

            <h2 className='mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl'>
              What I&apos;ve built with.
            </h2>
          </div>

          <p className='max-w-xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 lg:justify-self-end'>
            A toolkit built across university, professional engineering and
            years of personal experimentation—from foundational programming
            concepts to modern full-stack product development.
          </p>
        </div>

        <div
          className='mt-14 flex gap-2 overflow-x-auto pb-3 sm:mt-20'
          role='tablist'
          aria-label='Technology categories'
        >
          {categories.map((category) => {
            const isActive = category.id === activeId;

            return (
              <button
                key={category.id}
                id={`${category.id}-tab`}
                type='button'
                role='tab'
                aria-selected={isActive}
                aria-controls={`${category.id}-panel`}
                onClick={() => setActiveId(category.id)}
                className={`shrink-0 cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-background text-foreground/60 hover:border-foreground/30 hover:text-foreground'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className='mt-5 overflow-hidden rounded-[2rem] border bg-muted/20 p-5 sm:p-8 lg:p-10'>
          <AnimatePresence mode='wait' initial={false}>
            <motion.div
              key={activeCategory.id}
              id={`${activeCategory.id}-panel`}
              role='tabpanel'
              aria-labelledby={`${activeCategory.id}-tab`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }
              }
              transition={{
                duration: prefersReducedMotion ? 0 : 0.25,
                ease: 'easeOut',
              }}
            >
              <div className='grid gap-5 border-b pb-8 lg:grid-cols-[1fr_1fr] lg:items-end'>
                <h3 className='max-w-lg text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl'>
                  {activeCategory.heading}
                </h3>

                <p className='max-w-lg text-sm leading-6 text-foreground/70 sm:text-base sm:leading-7 lg:justify-self-end'>
                  {activeCategory.description}
                </p>
              </div>

              <div className='mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4'>
                {activeCategory.technologies.map((technology, index) => (
                  <motion.article
                    key={technology.name}
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 10 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.3,
                      delay: prefersReducedMotion ? 0 : index * 0.025,
                      ease: 'easeOut',
                    }}
                    className='group flex min-h-36 flex-col justify-between rounded-2xl border bg-background p-4 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-sm sm:p-5'
                  >
                    <TechnologyIcon technology={technology} />

                    <div className='mt-7'>
                      <h4 className='text-sm font-semibold tracking-[-0.02em] sm:text-base'>
                        {technology.name}
                      </h4>

                      <p className='mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/55'>
                        {technology.context}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
