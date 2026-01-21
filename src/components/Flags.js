import React from 'react';

export const ItFlag = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 640 480"
  >
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#009246" d="M0 0h213.3v480H0z" />
      <path fill="#ce2b37" d="M426.7 0h213.3v480H426.7z" />
    </g>
  </svg>
);

export const UkFlag = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 640 480"
  >
    <path fill="#012169" d="M0 0h640v480H0z" />
    <path
      fill="#fff"
      d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
    />
    <path
      fill="#c8102e"
      d="M424 294l216 163v23h-36L366 313" 
    />
     <path fill="#FFF" d="M250 0h140v480H250zM0 170h640v140H0z" />
     <path fill="#C8102E" d="M280 0h80v480h-80zM0 200h640v80H0z" />
     <path fill="#FFF" d="M0 480h75l565-416V0h-75L0 416v64zM565 480h75V416L75 0H0v64l565 416z" />
     <path fill="#C8102E" d="M0 480h48L640 48v-48h-48L0 432v48zM640 480v-48L48 0H0v48l592 432h48z" /> 
  </svg>
);

export const UkFlagSimple = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width={size} height={size}>
        <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
        </clipPath>
        <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
    </svg>
);
