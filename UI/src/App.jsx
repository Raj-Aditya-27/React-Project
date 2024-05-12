import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import RightSide from "./components/RightSide";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className={darkMode ? "bg-black" : "bg-gray-400"} style={{height:'100vh',overflow:'hidden'}}>
      <Header darkMode={darkMode} handleToggle={handleToggle} />
      <div className="text-white flex justify-between px-6 h-[87vh]">
        <div className="w-1/5 h-full">
          <Sidebar />
        </div>
        <div className="w-1/2 h-[78vh] overflow-y-scroll scrollbar-hide"><Content/></div>
        <div className="w-1/5 h-full"><RightSide/></div>
      </div>
    </div>
  );
}

export default App;
