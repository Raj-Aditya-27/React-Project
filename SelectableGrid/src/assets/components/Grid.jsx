import React from "react";
import { useState } from "react";

function Grid({ row = 10, column = 10 }) {
  const [isMouseDown, setisMouseDown] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [dragStartBox, setDragStartBox] = useState(null);

  const handleMouseUp = () => {
    setisMouseDown(false);
    setDragStartBox(null);
  };

  const handleMouseDown = (boxNumber) => {
    setisMouseDown(true);
    setDragStartBox(boxNumber);
    setSelectedBoxes([boxNumber]);
  };

  const handleMouseMove = (event) => {
    if (!isMouseDown) return;

    const gridRect = event.currentTarget.getBoundingClientRect();
    const clientX = event.clientX;
    const clientY = event.clientY;

    const x = clientX - gridRect.left;
    const y = clientY - gridRect.top;

    const endRow = Math.floor(y / (gridRect.height / row));
    const endCol = Math.floor(x / (gridRect.width / column));

    if (!dragStartBox) return;

    const startBox = dragStartBox;

    const startRow = Math.floor((startBox - 1) / column);
    const startCol = (startBox - 1) % column;

    const minRow = Math.min(startRow, endRow);
    const maxRow = Math.max(startRow, endRow);
    const minCol = Math.min(startCol, endCol);
    const maxCol = Math.max(startCol, endCol);

    const selected = [];
    for (let row = minRow; row <= maxRow; row++) {
      for (let col = minCol; col <= maxCol; col++) {
        selected.push(row * column + col + 1);
      }
    }

    setSelectedBoxes(selected);
  };

  return (
    <div
      className="grid"
      style={{ "--column": column, "--row": row }}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {[...Array(row * column).keys()].map((_, i) => {
        return (
          <div
            className={`box ${selectedBoxes.includes(i + 1) ? "selected" : ""}`}
            key={i}
            onMouseDown={() => handleMouseDown(i + 1)}
          >
            {i + 1}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
