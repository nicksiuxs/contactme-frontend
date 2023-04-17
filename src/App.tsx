import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Client/LoginClient";
import NotFound from "./pages/NotFound/NotFound";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
