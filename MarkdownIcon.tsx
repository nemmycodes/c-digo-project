
import React from 'react';
import { IconProps } from './IconProps';

const MarkdownIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="80" height="60" rx="5" stroke="#4D4B78" strokeWidth="5"/>
        <path d="M30 60V40L45 55L60 40V60" stroke="#4D4B78" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M70 40L70 60" stroke="#4D4B78" strokeWidth="5" strokeLinecap="round"/>
    </svg>
);

export default MarkdownIcon;