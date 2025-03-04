import React from "react";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";

const AddNotePage = () => {
   const navigate = useNavigate();
   function onAddNoteHandler(note) {
      addNote(note);
      navigate("/");
   }
   return (
      <div>
         <NoteInput addNote={onAddNoteHandler} />
      </div>
   );
};

export default AddNotePage;
