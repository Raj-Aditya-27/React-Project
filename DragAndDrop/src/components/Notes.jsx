import React, { createRef, useEffect, useRef } from "react";
import Note from "./Note";

function Notes({ notes = [], setNotes = () => {} }) {
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updateNotes = notes.map((note) => {
      const savedNote = savedNotes.find((n) => n.id == note.id);
      if (savedNote) {
        return { ...note, position: savedNote.position };
      } else {
        const position = determineNewPosition();
        return { ...note, position };
      }
    });
    setNotes(updateNotes);
    localStorage.setItem("notes", JSON.stringify(updateNotes));
  }, [notes.length]);

  const notesRef = useRef([]);
  console.log(notesRef);

  const handleDragStart = (note, e) => {
    const { id } = note;
    const noteRef = notesRef.current[id].current;
    const rect = noteRef.getBoundingClientRect();
    console.log(rect);
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const startPos = note;

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      const finalRect = noteRef.getBoundingClientRect();
      const newPosition = { x: finalRect.left, y: finalRect.top };

      if (false) {
      } else {
        updateNotePosition(id, newPosition);
      }
    };

    const updateNotePosition = (id, newPosition) => {
      const updatedNotes = notes.map((note) =>
        note.id === id ? { ...note, position: newPosition } : note
      );
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;
      noteRef.style.left = `${newX}px`;
      noteRef.style.top = `${newY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const determineNewPosition = () => {
    const maxWidth = window.innerWidth - 250;
    const maxHeight = window.innerHeight - 250;
    return {
      x: Math.floor(Math.random() * maxWidth),
      y: Math.floor(Math.random() * maxHeight),
    };
  };

  return (
    <>
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            ref={
              notesRef.current[note.id]
                ? notesRef.current[note.id]
                : (notesRef.current[note.id] = createRef())
            }
            onMouseDown={(e) => handleDragStart(note, e)}
            intialpostion={note.position}
            text={note.text}
          />
        );
      })}
    </>
  );
}

export default Notes;
