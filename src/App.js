import React from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./routes/Root";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/contact" element={<Root />}/>
    </Routes>
      
    </>
  );
}

export default App;
