
import React from 'react';
import { IconProps } from './IconProps';

const CodigoLogoIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad-logo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#A78BFA', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#6D28D9', stopOpacity: 1}} />
            </linearGradient>
            <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.7 0" result="glow"/>
                <feComposite in="glow" in2="SourceGraphic" operator="over"/>
            </filter>
        </defs>
        <g style={{ filter: 'url(#logo-glow)' }}>
             {/* Main Star */}
            <path transform="translate(30 20) rotate(15 25 25)" d="M25 0 L32.5 17.5 L50 25 L32.5 32.5 L25 50 L17.5 32.5 L0 25 L17.5 17.5 Z" fill="url(#grad-logo)" fillOpacity="0.9"/>
             {/* Small accent stars */}
            <path transform="translate(65 50) rotate(-25 15 15)" d="M15 0 L19.5 10.5 L30 15 L19.5 19.5 L15 30 L10.5 19.5 L0 15 L10.5 10.5 Z" fill="url(#grad-logo)" fillOpacity="0.7" />
            <path transform="translate(15 60) rotate(45 12.5 12.5)" d="M12.5 0 L16.25 8.75 L25 12.5 L16.25 16.25 L12.5 25 L8.75 16.25 L0 12.5 L8.75 8.75 Z" fill="url(#grad-logo)" />
             {/* Orbit line */}
            <path d="M35 80 A 40 40 0 0 1 75 30" stroke="#A78BFA" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
        </g>
    </svg>
);

export default CodigoLogoIcon;