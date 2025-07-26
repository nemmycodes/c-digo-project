
import React from 'react';
import { IconProps } from './IconProps';

const JsonIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20C30 10 70 10 80 20" stroke="#A78BFA" strokeWidth="8" strokeLinecap="round"/>
        <path d="M20 80C30 90 70 90 80 80" stroke="#A78BFA" strokeWidth="8" strokeLinecap="round"/>
        <path d="M50 20V80" stroke="#A78BFA" strokeWidth="8"/>
        <path d="M40 30L60 30" stroke="#A78BFA" strokeWidth="6" strokeLinecap="round"/>
        <path d="M40 70L60 70" stroke="#A78BFA" strokeWidth="6" strokeLinecap="round"/>
    </svg>
);

export default JsonIcon;