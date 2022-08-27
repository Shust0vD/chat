import * as React from 'react';

const SvgGreyCircle = (props) => (
  <svg width={59} height={59} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#GreyCircle_svg__a)">
      <rect x={10} y={9} width={40} height={40} rx={20} fill="#333" fillOpacity={0.4} />
    </g>
    <defs>
      <filter
        id="GreyCircle_svg__a"
        x={0}
        y={-1}
        width={60}
        height={60}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation={5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_390" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_390" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgGreyCircle;
