import * as React from 'react';

const SvgCross = (props) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m2 2 12 12M14 2 2 14" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" />
  </svg>
);

export default SvgCross;
