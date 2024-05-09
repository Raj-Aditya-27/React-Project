import { useState } from "react";
import Notes from "./components/Notes";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Today's IPL match is between RCB and PBKS.",
    },
    {
      id: 2,
      text: "Yesterday's IPL match was between SRH and LSG.",
    },
  ]);

  return (
    <>
      <Notes notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;
