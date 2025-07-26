import React from 'react';
import { IconProps } from './IconProps';

const SendIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`w-4 h-4 text-white ${className}`}>
    <path d="M1.353 7.083L14.07 1.353a.5.5 0 0 1 .616.616L8.917 14.647a.5.5 0 0 1-.95.034L6.333 9.667 1.316 8.034a.5.5 0 0 1 .037-.95Z" />
  </svg>
);

export default SendIcon;
