import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 344' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 258L60 229.333C120 200.667 240 143.333 360 150.5C480 157.667 600 229.333 720 229.333C840 229.333 960 157.667 1080 107.5C1200 57.3333 1320 28.6667 1380 14.3333L1440 0V344H1380C1320 344 1200 344 1080 344C960 344 840 344 720 344C600 344 480 344 360 344C240 344 120 344 60 344H0V258Z'
      fill='#FDC435'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
