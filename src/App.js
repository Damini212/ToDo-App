import React from "react";
import "./App.css";
import NoteList from "./NoteList";
import { nanoid } from "nanoid";
import Navbar from "./Navbar";

export default function App() {
  const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem("notes")) || [
      {
        id: nanoid(),
        text: "Buy groceries",
        date: new Date().toLocaleDateString(),
      },
      {
        id: nanoid(),
        text: "Fill petrol",
        date: new Date().toLocaleDateString(),
      },
    ]
  );
  const [searchTerm, setSearchTerm] = React.useState("");
  const [darkmode, setDarkmode] = React.useState();

  function toggle() {
    setDarkmode(!darkmode);
  }

  function addNote(text) {
    const date = new Date();
    setNotes(
      notes.concat({
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
      })
    );
  }

  function deleteNote(id) {
    setNotes(notes.filter((item) => item.id != id));
  }
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={darkmode ? "page darkmode" : "page lightmode"}>
      <div class="page-inner">
        <Navbar handleChange={handleChange} toggle={toggle} />
        <div>
          <NoteList
            notes={notes.filter((note) =>
              note.text.toLocaleLowerCase().includes(searchTerm)
            )}
            handleAddNote={addNote}
            deleteNote={deleteNote}
          />
        </div>
      </div>
    </div>
  );
}
