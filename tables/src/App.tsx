// src/App.tsx
import React from "react";
import Chat from "./components/Chat";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Project from "./components/Project";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/project/:id" element={<Project />} />

      </Routes>
    </Router>
  );
};

export default App;
