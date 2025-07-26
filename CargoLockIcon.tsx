
import React from 'react';
import { IconProps } from './IconProps';

const CargoLockIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10L10 30V70L50 90L90 70V30L50 10Z" stroke="#4D4B78" strokeWidth="5"/>
        <path d="M50 10V90" stroke="#4D4B78" strokeWidth="5"/>
        <path d="M10 30L90 70" stroke="#4D4B78" strokeWidth="3" strokeDasharray="5 5"/>
        <path d="M90 30L10 70" stroke="#4D4B78" strokeWidth="3" strokeDasharray="5 5"/>
    </svg>
);

export default CargoLockIcon;