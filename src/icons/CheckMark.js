import * as React from 'react';

const SvgCheckMark = (props) => (
  <svg width={17} height={13} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m12.296 7.154-4.418 5.411a1.096 1.096 0 0 1-.058.07.956.956 0 0 1-.697.352.956.956 0 0 1-.73-.28 1.127 1.127 0 0 1-.064-.064L3.536 9.85c-.943-.943.471-2.357 1.414-1.415.943.943-.471 2.357-1.414 1.415L.708 7.02c-.943-.943.471-2.357 1.414-1.414L4.95 8.435l2.047 2.047 3.75-4.593c.843-1.033 2.392.232 1.549 1.265l-1.55-1.265 1.55 1.265ZM3.536 9.85 4.95 8.435 3.536 9.85Zm7.21-3.961 4.45-5.45c.844-1.033 2.393.232 1.55 1.265l-4.45 5.45c-.843 1.032-2.393-.232-1.55-1.265Z"
      fill="#0A50D1"
    />
  </svg>
);

export default SvgCheckMark;
