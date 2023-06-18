import React from "react";
import Features from "./components/Feature";
import Headers from "./components/Header";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div
        style={{
          height: "100vh",
          fontSize: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        Make for test scroll to headers
      </div>
      <Headers />
      <Features />
    </div>
  );
}

export default App;
