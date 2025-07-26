import React, { useState } from 'react';
import { FileNode, FileType } from '../types';
import { ChevronRightIcon, ChevronDownIcon, CloseIcon } from './icons';
import { GitignoreIcon, TomlIcon, CargoLockIcon, JsonIcon, MarkdownIcon, RustFileIcon, FolderOpenIcon, FolderIcon } from './icons';

const fileTree: FileNode[] = [
    {
        name: 'migrations',
        type: FileType.FOLDER,
        status: '',
        children: [],
    },
    {
        name: 'programs / anchor-...',
        type: FileType.FOLDER,
        status: '',
        children: [],
    },
    { name: '.gitignore', type: FileType.GITIGNORE, status: 'U' },
    { name: '.prettierignore', type: FileType.GITIGNORE, status: 'U' },
    { name: 'anchor-escrow.idl', type: FileType.JSON, status: 'U' },
    { name: 'Anchor.toml', type: FileType.TOML, status: 'U' },
    { name: 'Cargo.toml', type: FileType.TOML, status: 'U' },
    { name: 'model.json', type: FileType.JSON, status: 'U' },
    { name: 'package-lock.json', type: FileType.JSON, status: 'U' },
    { name: 'package.json', type: FileType.JSON, status: 'U' },
    { name: 'README.md', type: FileType.MARKDOWN, status: 'U' },
    { name: 'tsconfig.json', type: FileType.JSON, status: 'U' },
];

const FileIcon: React.FC<{ type: FileType }> = ({ type }) => {
    switch (type) {
        case FileType.GITIGNORE: return <GitignoreIcon className="w-4 h-4 mr-2 flex-shrink-0" />;
        case FileType.TOML: return <TomlIcon className="w-4 h-4 mr-2 flex-shrink-0" />;
        case FileType.CARGO: return <CargoLockIcon className="w-4 h-4 mr-2 flex-shrink-0" />;
        case FileType.JSON: return <JsonIcon className="w-4 h-4 mr-2 flex-shrink-0" />;
        case FileType.MARKDOWN: return <MarkdownIcon className="w-4 h-4 mr-2 flex-shrink-0" />;
        case FileType.RUST: return <RustFileIcon className="w-4 h-4 mr-2 flex-shrink-0" />;
        default: return <div className="w-4 h-4 mr-2 flex-shrink-0" />;
    }
};

const FileTreeItem: React.FC<{ node: FileNode, level: number }> = ({ node, level }) => {
    const [isOpen, setIsOpen] = useState(true);

    const isDir = node.type === FileType.FOLDER;

    return (
        <div>
            <div
                className="flex items-center pr-2 py-1 cursor-pointer hover:bg-[#2A284D]/50 rounded text-[#E0DFFF]/70 hover:text-[#E0DFFF]"
                style={{ paddingLeft: `${level * 1 + 0.5}rem` }}
                onClick={() => isDir && setIsOpen(!isOpen)}
            >
                {isDir ? (
                    isOpen ? <ChevronDownIcon className="mr-1 flex-shrink-0" /> : <ChevronRightIcon className="mr-1 flex-shrink-0" />
                ) : <div className="w-4 mr-1 flex-shrink-0"></div>}
                
                {isDir ? (isOpen ? <FolderOpenIcon className="w-4 h-4 mr-2 text-[#A78BFA] flex-shrink-0" /> : <FolderIcon className="w-4 h-4 mr-2 text-[#A78BFA] flex-shrink-0"/>) : <FileIcon type={node.type} />}

                <span className="truncate flex-1">{node.name}</span>
                {node.status && <span className="text-[#2DD4BF] ml-2 font-semibold">{node.status}</span>}
            </div>
            {isDir && isOpen && node.children && (
                <div>
                    {node.children.map((child, i) => (
                        <FileTreeItem key={i} node={child} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};


const CollapsibleSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center w-full text-xs font-bold text-[#E0DFFF]/50 hover:text-[#E0DFFF] py-2 px-2 uppercase tracking-wider">
                {isOpen ? <ChevronDownIcon className="mr-1" /> : <ChevronRightIcon className="mr-1" />}
                {title}
            </button>
            {isOpen && <div className="pr-1">{children}</div>}
        </div>
    );
};

const FileExplorer: React.FC = () => {
    return (
        <div className="w-64 bg-[#16152D] flex-shrink-0 flex flex-col">
            <div className="p-2.5 text-xs font-semibold text-[#E0DFFF]/70 tracking-wide">EXPLORER</div>
            <div className="flex-1 overflow-y-auto">
                <CollapsibleSection title="Open Editors">
                    <div className="flex items-center pl-6 pr-2 py-1 cursor-pointer bg-[#2A284D] text-white">
                        <span className="truncate">Welcome</span>
                        <CloseIcon className="ml-auto flex-shrink-0 w-4 h-4 text-neutral-400 hover:text-white" />
                    </div>
                </CollapsibleSection>
                <CollapsibleSection title="NEMMYCODES">
                   {fileTree.map((node, i) => <FileTreeItem key={i} node={node} level={1} />)}
                </CollapsibleSection>
            </div>
        </div>
    );
};

export default FileExplorer;