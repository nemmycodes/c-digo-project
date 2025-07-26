
import React from 'react';
import { CloseIcon } from './icons';

const EditorTabs: React.FC = () => {
    return (
        <div className="h-10 bg-[#16152D] flex-shrink-0 border-b border-t border-[#2A284D] flex items-center">
            <div className="relative flex items-center h-full px-4 bg-[#0D0C1D] text-[#E0DFFF]">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#A78BFA]"></div>
                <span className="mr-4">Welcome</span>
                <CloseIcon className="w-4 h-4 cursor-pointer text-[#6a6890] hover:text-[#E0DFFF]" />
            </div>
        </div>
    );
};

export default EditorTabs;