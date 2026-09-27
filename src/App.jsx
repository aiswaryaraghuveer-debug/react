import React from "react";
import { Routes, Route } from "react-router-dom";
import PortfolioPage from "./components/PortfolioPage";
import Chatbot from "./components/Chatbot";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  );
}
export default App;