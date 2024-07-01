// src/App.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
