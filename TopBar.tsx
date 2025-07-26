
import React from 'react';
import { SolanaIcon, ChevronRightIcon, PlusIcon, LayoutIcon } from './icons';

const TopBar: React.FC = () => {
    return (
        <div className="h-8 bg-[#16152D] flex items-center justify-between px-4 text-[#4D4B78] flex-shrink-0 border-b border-[#2A284D]">
            <div className="flex items-center space-x-2 text-sm font-medium">
                <SolanaIcon className="w-4 h-4 text-[#2DD4BF]" />
                <span>/</span>
                <span className="text-[#E0DFFF]">SOLANA</span>
                <ChevronRightIcon className="w-3 h-3" />
                <span className="text-[#E0DFFF]">Nemmycodes</span>
            </div>
            <div className="flex items-center space-x-3">
                <PlusIcon className="w-5 h-5 cursor-pointer hover:text-[#E0DFFF]" />
                <LayoutIcon className="w-5 h-5 cursor-pointer hover:text-[#E0DFFF]" />
            </div>
        </div>
    );
};

export default TopBar;