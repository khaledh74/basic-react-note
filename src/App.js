import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(undefined);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: activeNote?.title,
      body: activeNote?.body,
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const handleChangeTitle = (event) => {
    setActiveNote((prev) => ({
      ...prev,
      title: event?.target?.value,
    }));
  };

  const handleChangeBody = (event) => {
    setActiveNote((prev) => ({
      ...prev,
      body: event?.target?.value,
    }));
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        setActiveNote={setActiveNote}
        activeNote={activeNote}
      />
      <Main
        activeNote={getActiveNote()}
        handleChangeTitle={handleChangeTitle}
        handleChangeBody={handleChangeBody}
      />
    </div>
  );
}

export default App;
