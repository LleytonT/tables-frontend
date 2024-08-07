// src/App.tsx
import React from "react";
import Chat from "./components/Chat";
import Feed from "./components/Feed";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./components/Project";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:id" element={<Project />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
        {/* <Route path="/feed" element={<Feed />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
