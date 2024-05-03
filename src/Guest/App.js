import React from "react";
import { Route, Routes } from "react-router-dom";
import index from "./pages/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<index />} />
    </Routes>
  );
};

export default App;
