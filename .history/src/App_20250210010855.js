import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <AboutPage />
    </BrowserRouter>
  );
}

export default App;
