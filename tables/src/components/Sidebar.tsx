// src/components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold">Tables</h2>
      <ul className="mt-4">
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Chat 1</li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Chat 2</li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Chat 3</li>
      </ul>
    </div>
  );
}

export default Sidebar;
