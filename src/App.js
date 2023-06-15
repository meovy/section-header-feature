import React from "react";
import Features from "./components/Feature";
import Headers from "./components/Header";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Headers />
      <Features />
    </div>
  );
}

export default App;
