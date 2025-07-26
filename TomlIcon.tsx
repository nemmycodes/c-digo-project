
import React from 'react';
import { IconProps } from './IconProps';

const TomlIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="80" height="80" rx="10" fill="#2DD4BF"/>
        <path d="M30 30H70" stroke="#16152D" strokeWidth="8" strokeLinecap="round"/>
        <path d="M50 30V70" stroke="#16152D" strokeWidth="8" strokeLinecap="round"/>
    </svg>
);

export default TomlIcon;