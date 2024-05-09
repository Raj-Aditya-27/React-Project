import React, { forwardRef } from "react";

const Note = forwardRef(({ text, intialpostion, ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: `${intialpostion?.x}px`,
        top: `${intialpostion?.y}px`,
        border: "1px solid black",
        userSelect: "none",
        padding: "10px",
        width: "200px",
        cursor: "move",
        background: "lightblue",
      }}
      {...props}
    >
      📌{text}
    </div>
  );
});

export default Note;
