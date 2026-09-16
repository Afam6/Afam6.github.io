'use client';

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

type Technology = {
  name: string;
  context: string;
  icon?: SimpleIcon;
  devicon?: string;
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
        devicon: 'devicon-csharp-plain',
      },
      { name: '.NET', context: 'Professional', icon: siDotnet },
      {
        name: 'SQL Server',
        context: 'Professional',
        devicon: 'devicon-microsoftsqlserver-plain',
      },
      {
        name: 'Microsoft Azure',
        context: 'Professional',
        devicon: 'devicon-azure-plain',
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
        devicon: 'devicon-csharp-plain',
      },
      {
        name: 'Java',
        context: 'Prior experience',
        devicon: 'devicon-java-plain',
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
        devicon: 'devicon-xml-plain',
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
        devicon: 'devicon-apache-plain',
      },
      {
        name: 'XML',
        context: 'University',
        devicon: 'devicon-xml-plain',
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
        devicon: 'devicon-microsoftsqlserver-plain',
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
        devicon: 'devicon-azure-plain',
      },
      {
        name: 'Azure Functions',
        context: 'Professional',
        devicon: 'devicon-azure-plain',
      },
      {
        name: 'AWS',
        context: 'Prior experience',
        devicon: 'devicon-amazonwebservices-plain-wordmark',
      },
      { name: 'Docker', context: 'Professional', icon: siDocker },
      {
        name: 'Heroku',
        context: 'Prior experience',
        devicon: 'devicon-heroku-plain',
      },
      {
        name: 'Oracle SQL Developer',
        context: 'Earlier experience',
        devicon: 'devicon-oracle-original',
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
        devicon: 'devicon-gitlab-plain',
      },
      {
        name: 'Azure DevOps',
        context: 'Professional',
        devicon: 'devicon-azuredevops-plain',
      },
      {
        name: 'Jenkins',
        context: 'Professional',
        devicon: 'devicon-jenkins-line',
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
        devicon: 'devicon-karma-plain',
      },
      { name: 'Jasmine', context: 'Professional', icon: siJasmine },
      { name: 'MSTest', context: 'Professional', fallback: 'MT' },
      {
        name: 'JUnit',
        context: 'Prior experience',
        devicon: 'devicon-junit-plain',
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
        devicon: 'devicon-heroku-plain',
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
        devicon: 'devicon-vscode-plain',
      },
      {
        name: 'Visual Studio',
        context: 'Professional',
        devicon: 'devicon-visualstudio-plain',
      },
      {
        name: 'Jira',
        context: 'Professional',
        devicon: 'devicon-jira-plain',
      },
      {
        name: 'Confluence',
        context: 'Professional',
        devicon: 'devicon-confluence-plain',
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
        devicon: 'devicon-eclipse-plain',
      },
      {
        name: 'Oracle SQL Developer',
        context: 'Earlier experience',
        devicon: 'devicon-oracle-original',
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
        devicon: 'devicon-anaconda-original',
      },
      {
        name: 'NumPy',
        context: 'University',
        devicon: 'devicon-numpy-plain',
      },
      {
        name: 'Jupyter',
        context: 'University',
        devicon: 'devicon-jupyter-plain',
      },
      {
        name: 'PyCharm',
        context: 'University',
        devicon: 'devicon-pycharm-plain',
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
        devicon: 'devicon-arduino-plain',
      },
      {
        name: 'Eclipse',
        context: 'University',
        devicon: 'devicon-eclipse-plain',
      },
      {
        name: 'Apache',
        context: 'Prior experience',
        devicon: 'devicon-apache-plain',
      },
      {
        name: 'XML',
        context: 'University',
        devicon: 'devicon-xml-plain',
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
  if (technology.devicon) {
    return (
      <span
        aria-hidden='true'
        className='grid size-14 place-items-center rounded-2xl border bg-muted shadow-sm'
      >
        <i className={`${technology.devicon} colored text-[2rem] leading-none`} />
      </span>
    );
  }

  if (!technology.icon) {
    return (
      <span
        aria-hidden='true'
        className='grid size-14 place-items-center rounded-2xl border bg-muted text-xs font-semibold tracking-[-0.04em] shadow-sm'
      >
        {technology.fallback ?? technology.name.slice(0, 2)}
      </span>
    );
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

          <p className='max-w-xl text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8 lg:justify-self-end'>
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

                <p className='max-w-lg text-sm leading-6 text-foreground/60 sm:text-base sm:leading-7 lg:justify-self-end'>
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

                      <p className='mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/40'>
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
