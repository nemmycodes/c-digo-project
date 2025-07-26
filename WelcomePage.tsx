
import React from 'react';
import { ChatIcon, KeyboardIcon, RocketIcon } from './icons';

const WelcomePage: React.FC = () => {
    const sectionStyle = "mb-12 border border-[#2A284D] rounded-lg p-6 bg-[#16152D]/50 backdrop-blur-sm";
    const h2Style = "text-2xl font-semibold text-white mb-4 flex items-center";
    const iconStyle = "mr-3 text-[#A78BFA]";
    
    return (
        <div 
            className="flex-1 bg-[#0D0C1D] overflow-y-auto p-12 text-[#E0DFFF]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(167, 139, 250, 0.1) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}
        >
            <div className="max-w-4xl mx-auto">
                <section className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-3 flex items-center">
                        <span className="mr-3">👋</span> Welcome to Código
                    </h1>
                    <p className="text-lg text-[#E0DFFF]/70">
                        Your AI powered development environment for building on Solana.
                    </p>
                    <p className="mt-2 text-[#E0DFFF]/50">
                        Here, you can create, explore, and deploy smart contracts with the help of an integrated AI developer platform in an online IDE. You can get started by prompt engineering, or by using one of the available templates, or by importing a GitHub repository.
                    </p>
                </section>

                <section className={sectionStyle}>
                    <h2 className={h2Style}>
                        <ChatIcon className={iconStyle} /> Chat with Código AI
                    </h2>
                    <p className="text-[#E0DFFF]/70 mb-4">Código is your co-pilot for building smart contracts.</p>
                    <h3 className="font-bold text-white mb-2">Want to ask questions about your code?</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#E0DFFF]/70 pl-2">
                        <li>Type the name of the file you want to read</li>
                        <li>Ask questions like:
                            <ul className="list-disc list-inside space-y-1 text-[#E0DFFF]/50 pl-6 mt-2">
                                <li>Implement the business logic for the file foo.rs</li>
                                <li>Check for security vulnerabilities in the files foo.rs and bar.rs</li>
                                <li>Show me how to do a token transfer from the escrow PDA account</li>
                            </ul>
                        </li>
                         <li>Easily accept or refuse the new code proposed by the AI with the buttons</li>
                    </ul>
                </section>

                <section className={sectionStyle}>
                    <h2 className={h2Style}>
                        <KeyboardIcon className={iconStyle} /> Inline Code Completions
                    </h2>
                    <p className="text-[#E0DFFF]/70 mb-4">Get AI-powered code suggestions as you type.</p>
                    <h3 className="font-bold text-white mb-2">How to use inline completions:</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#E0DFFF]/70 pl-2">
                        <li>Press <kbd className="bg-[#2A284D] px-2 py-1 rounded-md border border-[#4D4B78] text-[#E0DFFF] font-sans">Ctrl+Shift+Space</kbd> to manually trigger suggestions</li>
                        <li>Use <kbd className="bg-[#2A284D] px-2 py-1 rounded-md border border-[#4D4B78] text-[#E0DFFF] font-sans">Tab</kbd> to accept the current suggestion</li>
                        <li>Use <kbd className="bg-[#2A284D] px-2 py-1 rounded-md border border-[#4D4B78] text-[#E0DFFF] font-sans">Right Arrow</kbd> to accept the next word</li>
                        <li>Use <kbd className="bg-[#2A284D] px-2 py-1 rounded-md border border-[#4D4B78] text-[#E0DFFF] font-sans">Escape</kbd> to dismiss suggestions</li>
                    </ul>
                </section>
                
                 <section className={sectionStyle}>
                    <h2 className={h2Style}>
                        <RocketIcon className={iconStyle} /> Build and Deploy your program
                    </h2>
                     <p className="text-[#E0DFFF]/70">Use the built-in commands to build, test and deploy your Solana programs seamlessly.</p>
                </section>
            </div>
        </div>
    );
};

export default WelcomePage;