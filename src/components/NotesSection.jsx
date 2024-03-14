import React from "react";
import notes from "../data/notes";
import Note from './Note';

function NotesSection() {
  console.log(notes)
  return <>{

    notes.map((note, index) => (
 
      <Note 
      key={note.index}
      title={note.title}
      content={note.content}
      />
    ))
  }</>;
}

export default NotesSection;
