
import React from 'react';
import { FileExplorerIcon, SearchIcon, GitBranchIcon, DebugIcon, ExtensionsIcon, UserIcon, SettingsIcon } from './icons';

const IconBar: React.FC = () => {
    const topIcons = [
        { icon: <FileExplorerIcon />, active: true },
        { icon: <SearchIcon />, active: false },
        { icon: <GitBranchIcon />, active: false },
        { icon: <DebugIcon />, active: false },
        { icon: <ExtensionsIcon />, active: false },
    ];

    const bottomIcons = [
        { icon: <UserIcon />, active: false },
        { icon: <SettingsIcon />, active: false },
    ];

    return (
        <div className="w-12 bg-[#16152D] flex flex-col justify-between items-center py-2">
            <div className="flex flex-col space-y-2">
                {topIcons.map((item, index) => (
                    <div key={index} className={`relative w-12 h-12 flex items-center justify-center cursor-pointer text-[#6a6890] hover:text-[#E0DFFF] ${item.active ? 'text-[#A78BFA]' : ''}`}>
                        {item.active && <div className="absolute left-0 w-0.5 h-6 bg-[#A78BFA] rounded-r-full"></div>}
                        {item.icon}
                    </div>
                ))}
            </div>
            <div className="flex flex-col space-y-2">
                {bottomIcons.map((item, index) => (
                    <div key={index} className="w-12 h-12 flex items-center justify-center cursor-pointer text-[#6a6890] hover:text-[#E0DFFF]">
                        {item.icon}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconBar;