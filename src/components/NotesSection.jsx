import React from "react";

import Note from "./Note";

function NotesSection(props) {

  function deleteNote(id) {
    props.deleteNote(id)
  }

  return (
    <>
      {props.notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
    </>
  );
}

export default NotesSection;
