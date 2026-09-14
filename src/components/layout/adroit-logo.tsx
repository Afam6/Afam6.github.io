import type { SVGProps } from 'react';

export function AdroitLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 128 128'
      aria-hidden='true'
      focusable='false'
      {...props}
    >
      <rect
        x='2'
        y='2'
        width='124'
        height='124'
        rx='32'
        className='fill-[#eaf3ff] stroke-foreground/10 transition-colors dark:fill-[#111827]'
        strokeWidth='2'
      />

      <path
        d='M28 94 57.5 35.2c2.7-5.4 10.3-5.4 13 0L100 94'
        fill='none'
        className='stroke-[#101828] transition-colors dark:stroke-[#f8fafc]'
        strokeWidth='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      <g className='transition-transform duration-300 ease-out group-hover:translate-x-[3px]'>
        <path
          d='M43 76h39m-10-9 10 9-10 9'
          fill='none'
          className='stroke-[#2563eb] dark:stroke-[#8ba3ff]'
          strokeWidth='8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
}