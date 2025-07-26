
import React from 'react';
import { IconProps } from './IconProps';

const RustFileIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M90 50C90 72.0914 72.0914 90 50 90C27.9086 90 10 72.0914 10 50C10 27.9086 27.9086 10 50 10" stroke="#F472B6" strokeWidth="8"/>
        <path d="M50 10L50 90" stroke="#F472B6" strokeWidth="8"/>
        <path d="M30 40H70" stroke="#F472B6" strokeWidth="8" strokeLinecap="round"/>
        <path d="M30 60H70" stroke="#F472B6" strokeWidth="8" strokeLinecap="round"/>
        <path d="M30 40L20 50L30 60" stroke="#F472B6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M70 40L80 50L70 60" stroke="#F472B6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default RustFileIcon;