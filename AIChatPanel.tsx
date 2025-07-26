
import React, { useState } from 'react';
import { CodigoLogoIcon, CloseIcon, SendIcon } from './icons';

const AIChatPanel: React.FC = () => {
    const [message, setMessage] = useState('');

    return (
        <div className="w-[450px] bg-[#16152D] border-l border-[#2A284D] flex flex-col flex-shrink-0">
            <div className="h-10 flex items-center justify-between px-4 border-b border-[#2A284D] flex-shrink-0">
                <span className="font-semibold text-white">AI Chat</span>
                <CloseIcon className="w-5 h-5 cursor-pointer text-[#6a6890] hover:text-[#E0DFFF]" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <CodigoLogoIcon className="w-24 h-24 mb-4" />
                <h2 className="text-xl font-bold text-white">AI-Enhanced coding, for everyone</h2>
                <p className="text-[#E0DFFF]/70 mt-1">Build, test, and deploy solana programs</p>

                <div className="mt-8 w-full max-w-xs">
                    <p className="text-[#E0DFFF]/70 mb-3">Need some inspiration?</p>
                    <button className="w-full bg-[#2A284D] hover:border-[#A78BFA] border border-[#4D4B78] text-white py-2 px-4 rounded-lg mb-2 text-sm transition-all duration-200">
                        Generate an NFT Marketplace
                    </button>
                    <button className="w-full bg-[#2A284D] hover:border-[#A78BFA] border border-[#4D4B78] text-white py-2 px-4 rounded-lg text-sm transition-all duration-200">
                        Create an informal lender DeFi
                    </button>
                </div>
            </div>

            <div className="p-4 border-t border-[#2A284D]">
                <div className="bg-[#0D0C1D] border border-[#4D4B78] rounded-lg p-2 focus-within:border-[#A78BFA] transition-all duration-200">
                    <div className="text-xs text-[#E0DFFF]/50 mb-2 px-1">No Changes</div>
                    <div className="relative">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="What's your idea?"
                            className="w-full bg-transparent border-none focus:ring-0 resize-none text-white placeholder-[#4D4B78] pl-1 pr-10"
                            rows={2}
                        />
                        <button className="absolute right-1 bottom-1 bg-[#A78BFA] hover:bg-[#c084fc] rounded-md p-1.5 disabled:bg-[#4D4B78] disabled:cursor-not-allowed transition-all duration-200 hover:shadow-[0_0_10px_#A78BFA]">
                           <SendIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIChatPanel;