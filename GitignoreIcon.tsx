
import React from 'react';
import { IconProps } from './IconProps';

const GitignoreIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#F472B6" rx="10"/>
        <path d="M20 50H80" stroke="#16152D" strokeWidth="10" strokeLinecap="round"/>
    </svg>
);

export default GitignoreIcon;