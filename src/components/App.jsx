import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import NotesSection from "./NotesSection";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {

    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setNotes(prevValue=>{
      return prevValue.filter((note, index) =>{
        return index != id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <NotesSection notes={notes} deleteNote = {deleteNote}/>
      <Footer />
    </div>
  );
}

export default App;