import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <BrowserRouter>
      <ServicePage />
    </BrowserRouter>
  );
}

export default App;
