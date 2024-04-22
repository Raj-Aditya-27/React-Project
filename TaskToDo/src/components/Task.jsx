import React, { useState } from "react";

function Task({ task, onDelete, onEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    onEdit(editedTask);
    setEditMode(false);
  };

  return (
    <div className="w-full">
      {editMode ? (
        <>
          <div className="mt-4 flex justify-around items-center bg-zinc-800 px-4 py-2 rounded">
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              className="w-9/12 text-center bg-gray-800 rounded border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button className="w-20 py-1 px-4"></button>
            <button
              className="w-20 text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mt-4 flex justify-around items-center bg-zinc-800 px-4 py-2 rounded">
            <div className="w-9/12 text-center bg-gray-800 rounded border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              {task}
            </div>
            <button
              className="w-20 text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
            <button
              className="w-20 text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Task;
