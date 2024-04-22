import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask"

function App() {
  return (
    <>
      <div className="flex flex-col items-center  p-2">
        <h1 className="border w-1/5 p-3 text-lg font-bold">Todo Application</h1>
        <AddTask/>
      </div>
    </>
    
  );
}

export default App;
