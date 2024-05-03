import React from "react";
import { Route, Routes } from "react-router-dom";
import home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<home />} />
    </Routes>
  );
};

export default App;
