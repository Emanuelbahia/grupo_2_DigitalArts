import "./App.css";
import React from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />

      <Dashboard />
    </div>
  );
}

export default App;
