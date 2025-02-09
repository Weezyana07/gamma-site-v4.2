import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";

function App() {
  return (
    <BrowserRouter>
      <Service />
    </BrowserRouter>
  );
}

export default App;
