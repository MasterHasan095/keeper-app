import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  function expand(){
    setIsExpanded(true)
  }

  return (
    <div>
      <form className="create-note">
        { isExpanded ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {isExpanded ? 3 : 1 }
          onClick={expand}
        />
       {isExpanded? <Zoom in={true}>
          <Fab
            onClick={submitNote}
            size="small"
            color="secondary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Zoom> : null}
      </form>
    </div>
  );
}

export default CreateArea;
