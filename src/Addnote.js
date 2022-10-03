import React from "react";
import "./note.css";

export default function Addnote({ handleAddNote }) {
  const [noteText, setNoteText] = React.useState("");
  let characterLength = 200;

  function handleChange(event) {
    if (characterLength - event.target.value.length > 0) {
      setNoteText(event.target.value);
    }
  }
  function handleSave(event) {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  }

  return (
    <div className="new-note">
      <div>
        <textarea
          rows={8}
          columns={10}
          type="text"
          placeholder="Add text to create a new note"
          onChange={handleChange}
          value={noteText}
        ></textarea>
        <div className="new-footer">
          <small>{characterLength - noteText.length} remaining</small>
          <button className="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
