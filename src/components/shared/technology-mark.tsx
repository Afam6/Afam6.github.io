import Image from 'next/image';
import {
  AudioWaveform,
  Braces,
  CodeXml,
  Database,
  FlaskConical,
  Landmark,
  PanelsTopLeft,
  Server,
  Sparkles,
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

  if (name === 'XSLT') {
    return <CodeXml className={className} strokeWidth={1.8} />;
  }

  if (name === 'MSTest' || name === 'xUnit') {
    return <FlaskConical className={className} strokeWidth={1.8} />;
  }

  if (name === 'IIS / App Service') {
    return <Server className={className} strokeWidth={1.8} />;
  }

  if (name === 'OpenAI products' || name === 'Google Antigravity') {
    return <Sparkles className={className} strokeWidth={1.8} />;
  }

  if (name === 'SharePoint' || name === 'MVC') {
    return <PanelsTopLeft className={className} strokeWidth={1.8} />;
  }

  if (name === 'Pure Data') {
    return <AudioWaveform className={className} strokeWidth={1.8} />;
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
    'XSLT',
    'MSTest',
    'xUnit',
    'IIS / App Service',
    'OpenAI products',
    'Google Antigravity',
    'SharePoint',
    'Pure Data',
    'MVC',
  ].includes(name);

  return (
    <span
      title={name}
      aria-label={name}
      className={`group/mark relative grid shrink-0 place-items-center border shadow-sm ${
        localIcon ? 'bg-white' : 'bg-background'
      } ${dimension}`}
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
              ? 'currentColor'
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
    </span>
  );
}
