import * as React from 'react';

const SvgRectangle = (props) => (
  <svg width={78} height={78} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#Rectangle_svg__a)">
      <rect x={10} y={10} width={58} height={58} rx={29} fill="#0848C0" />
    </g>
    <defs>
      <filter
        id="Rectangle_svg__a"
        x={0}
        y={0}
        width={78}
        height={78}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation={5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_84_3" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_84_3" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgRectangle;
