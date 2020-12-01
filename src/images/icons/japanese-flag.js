import React from 'react';

const JapaneseFlag = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <defs>
      <path id="japan-flag-round-a" d="M8,0 C12.4182933,0 16,3.58170667 16,8 C16,12.3446611 12.5366791,15.8803871 8.22018704,15.9970284 L7.77981296,15.9970284 C3.46332087,15.8803871 0,12.3446611 0,8 C0,3.58170667 3.58170667,0 8,0 Z"/>
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="japan-flag-round-b" fill="#fff">
        <use href="#japan-flag-round-a"/>
      </mask>
      <polygon fill="#FFFFFE" points="0 15.997 16 15.997 16 0 0 0" mask="url(#japan-flag-round-b)"/>
      <path fill="#A92532" d="M8,3.2 C10.6509867,3.2 12.8,5.34901333 12.8,8 C12.8,10.6509867 10.6509867,12.8 8,12.8 C5.34901333,12.8 3.2,10.6509867 3.2,8 C3.2,5.34901333 5.34901333,3.2 8,3.2" mask="url(#japan-flag-round-b)"/>
    </g>
  </svg>
)

export default JapaneseFlag;