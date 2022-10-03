import react from "react";
import "./note.css";

export default function Note({ id, text, date, deleteNote }) {
  return (
    <div className="note">
      <div>{text}</div>
      <div className="note-footer">
        <div>{date}</div>
        <img
          src="trash bucket.png"
          className="delete-icon"
          onClick={deleteNote}
        />
      </div>
    </div>
  );
}
