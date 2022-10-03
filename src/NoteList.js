import react from "react";
import Note from "./Note";
import "./note.css";
import Addnote from "./Addnote";

export default function NoteList({ notes, handleAddNote, deleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={() => deleteNote(note.id)}
        />
      ))}
      <Addnote handleAddNote={handleAddNote} />
    </div>
  );
}
