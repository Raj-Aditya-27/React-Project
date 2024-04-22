import React, { useEffect, useState } from "react";
import Task from "./Task";

function AddTask() {
  const [tasks, setTasks] = useState([]);

  function handleAdd() {
    const inputTask = document.getElementById("inputTask").value;
    if (inputTask.trim() !== "") {
      // Make sure the input is not empty
      const newTasks = [...tasks, inputTask];
      setTasks(newTasks);
      document.getElementById("inputTask").value = "";
    }
  }

  function handleDelete(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleEdit(index, updatedTask) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? updatedTask : task
    );
    setTasks(updatedTasks);
  }

  function handleKeyPress(event) {
    if (event.key == "Enter") handleAdd();
  }

  return (
    <div className="w-9/12">
      <div className="space-x-3 mt-5 flex items-center px-4 py-2 justify-around">
        <div className="w-9/12 border">
          <input
            className=" w-full bg-gray-800 rounded  border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            type="text"
            id="inputTask"
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="w-2/12">
          <button
            className="w-full bg-teal-600  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleAdd}
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full ">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onDelete={() => handleDelete(index)}
            onEdit={(updatedTask) => handleEdit(index, updatedTask)}
          />
        ))}
      </div>
    </div>
  );
}

export default AddTask;
