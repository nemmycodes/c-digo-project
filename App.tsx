
import React from 'react';
import IconBar from './components/IconBar';
import FileExplorer from './components/FileExplorer';
import WelcomePage from './components/WelcomePage';
import AIChatPanel from './components/AIChatPanel';
import StatusBar from './components/StatusBar';
import TopBar from './components/TopBar';
import EditorTabs from './components/EditorTabs';

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-[#0D0C1D] text-sm text-[#E0DFFF] flex flex-col font-['Inter',_sans-serif] overflow-hidden">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <IconBar />
        <FileExplorer />
        <div className="flex flex-1 flex-col min-w-0">
          <EditorTabs />
          <div className="flex flex-1 min-w-0 min-h-0">
            <WelcomePage />
            <AIChatPanel />
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
};

export default App;