import PropTypes from "prop-types";
import React, { useContext } from "react";
import LocaleContext from "../contexts/LangContext";
import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
   const { locale } = useContext(LocaleContext);
   return (
      <div className="notes-list">
         {notes.length > 0 ? (
            notes.map((note) => <NoteItem key={note.id} {...note} />)
         ) : (
            <div className="notes-list-empty">
               <p>{locale === 'id' ? 'Tidak ada catatan' : 'Notes not found'}</p>
            </div>
         )}
      </div>
   );
};

NoteList.propTypes = {
   notes: PropTypes.array.isRequired,
};

export default NoteList;
