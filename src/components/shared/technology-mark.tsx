import Image from 'next/image';
import {
  Braces,
  Database,
  FlaskConical,
  Landmark,
  Workflow,
} from 'lucide-react';
import {
  siAngular,
  siDotnet,
  siMongodb,
  siPerforce,
  siReact,
  siSitecore,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons';

type TechnologyMarkProps = {
  name: string;
  size?: 'sm' | 'lg';
};

const simpleIcons: Record<string, SimpleIcon> = {
  React: siReact,
  TypeScript: siTypescript,
  Angular: siAngular,
  '.NET': siDotnet,
  '.NET Core': siDotnet,
  MongoDB: siMongodb,
  Sitecore: siSitecore,
  Perforce: siPerforce,
  'Perforce Helix Core': siPerforce,
};

const localIcons: Record<string, string> = {
  'C#': '/tech-icons/csharp.svg',
  'SQL Server': '/tech-icons/sql-server.svg',
  Azure: '/tech-icons/azure.svg',
  'Microsoft Azure': '/tech-icons/azure.svg',
  'Azure DevOps': '/tech-icons/azure-devops.svg',
  Jenkins: '/tech-icons/jenkins.svg',
  Prolog: '/tech-icons/prolog.svg',
  'Azure App Service': '/tech-icons/azure-app-service.png',
  IIS: '/tech-icons/iis.svg',
  SharePoint: '/tech-icons/sharepoint.png',
  xUnit: '/tech-icons/xunit.svg',
  'Oracle SQL Developer': '/tech-icons/oracle.svg',
  XSLT: '/tech-icons/xml.svg',
  'OpenAI products': '/tech-icons/openai.svg',
  'Google Antigravity': '/tech-icons/google-antigravity.png',
  'Pure Data': '/tech-icons/pure-data.svg',
  MVC: '/tech-icons/mvc.svg',
};

const fallbackLabels: Record<string, string> = {
  'REST APIs': 'API',
  SQL: 'SQL',
  'Banking systems': 'BANK',
  'Workflow automation': 'FLOW',
};

function GenericMark({ name }: { name: string }) {
  const className = 'size-1/2';

  if (name === 'REST APIs') {
    return <Braces className={className} strokeWidth={1.8} />;
  }

  if (name === 'SQL') {
    return <Database className={className} strokeWidth={1.8} />;
  }

  if (name === 'Banking systems') {
    return <Landmark className={className} strokeWidth={1.8} />;
  }

  if (name === 'Workflow automation') {
    return <Workflow className={className} strokeWidth={1.8} />;
  }

  if (name === 'MSTest') {
    return <FlaskConical className={className} strokeWidth={1.8} />;
  }

  return null;
}

export function TechnologyMark({ name, size = 'sm' }: TechnologyMarkProps) {
  const simpleIcon = simpleIcons[name];
  const localIcon = localIcons[name];
  const dimension =
    size === 'lg' ? 'size-14 rounded-2xl' : 'size-11 rounded-xl';
  const iconDimension = size === 'lg' ? 'size-8' : 'size-6';
  const hasGenericMark = [
    'REST APIs',
    'SQL',
    'Banking systems',
    'Workflow automation',
    'MSTest',
  ].includes(name);

  return (
    <span
      aria-label={name}
      tabIndex={0}
      className={`group/mark relative grid shrink-0 place-items-center border border-black/10 bg-white text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${dimension}`}
    >
      {localIcon ? (
        <Image
          src={localIcon}
          alt=''
          aria-hidden='true'
          width={32}
          height={32}
          unoptimized
          className={`${iconDimension} object-contain`}
        />
      ) : null}

      {simpleIcon ? (
        <svg
          aria-hidden='true'
          viewBox='0 0 24 24'
          className={iconDimension}
          fill='currentColor'
          style={{
            color: ['000000', 'FFFFFF'].includes(simpleIcon.hex.toUpperCase())
              ? '#111827'
              : `#${simpleIcon.hex}`,
          }}
        >
          <path d={simpleIcon.path} />
        </svg>
      ) : null}

      {!localIcon && !simpleIcon && hasGenericMark ? (
        <GenericMark name={name} />
      ) : null}

      {!localIcon && !simpleIcon && !hasGenericMark ? (
        <span
          aria-hidden='true'
          className='px-1 text-center text-[9px] font-bold leading-none tracking-[-0.04em]'
        >
          {fallbackLabels[name] ?? name.slice(0, 4).toUpperCase()}
        </span>
      ) : null}

      <span
        role='tooltip'
        className='pointer-events-none absolute bottom-[calc(100%+0.55rem)] left-1/2 z-30 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1.5 text-[11px] font-medium leading-none text-background opacity-0 shadow-md transition-[opacity,transform] duration-150 group-hover/mark:translate-y-0 group-hover/mark:opacity-100 group-focus-visible/mark:translate-y-0 group-focus-visible/mark:opacity-100'
      >
        {name}
        <span
          aria-hidden='true'
          className='absolute left-1/2 top-full size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-foreground'
        />
      </span>
    </span>
  );
}
