
import React from 'react';
import { GitBranchIcon, ErrorIcon, WarningIcon, BellIcon, CheckCircleIcon } from './icons';

const StatusBar: React.FC = () => {
    return (
        <div className="h-6 bg-[#16152D] border-t border-[#2A284D] flex items-center justify-between px-4 text-xs text-[#4D4B78] flex-shrink-0">
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 cursor-pointer hover:bg-[#2A284D] px-2 rounded">
                    <GitBranchIcon className="w-4 h-4" />
                    <span className="text-[#E0DFFF]/70">master*</span>
                </div>
                <div className="flex items-center space-x-1">
                   <ErrorIcon className="w-4 h-4 text-pink-500" />
                   <span>0</span>
                   <WarningIcon className="w-4 h-4 text-yellow-500" />
                   <span>0</span>
                </div>
            </div>
            <div className="flex items-center space-x-4 font-medium">
                <span className="text-[#E0DFFF]/70">Solana</span>
                <span className="flex items-center space-x-1">
                    <CheckCircleIcon className="w-4 h-4 text-[#2DD4BF]" />
                    <span className="text-[#A78BFA]">Código</span>
                </span>
                <BellIcon className="w-4 h-4 cursor-pointer hover:text-white" />
            </div>
        </div>
    );
};

export default StatusBar;