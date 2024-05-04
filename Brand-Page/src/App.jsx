import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Herosection from "./components/Herosection"

function App() {
  return (
    <>
      <Header/>
      <Herosection/>
    </>
  );
}

export default App;
