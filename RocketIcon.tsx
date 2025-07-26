
import React from 'react';
import { IconProps } from './IconProps';

const RocketIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a6 6 0 0 1-1.27 8.17m-4.57-8.17a6 6 0 0 1 5.84 2.56m-2.56-5.84a6 6 0 0 1 7.38-5.84m-7.38 5.84v4.82m-2.56-5.84a6 6 0 0 1-5.84-2.56m5.84 2.56a6 6 0 0 1-8.17-1.27m8.17 1.27v-4.82m-8.17 1.27a6 6 0 0 1 2.56-5.84m2.56 5.84a6 6 0 0 1-2.56-5.84m0 0a6 6 0 0 1 5.84-2.56" />
    </svg>
);

export default RocketIcon;
