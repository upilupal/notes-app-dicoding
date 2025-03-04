import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import {
   archiveNote,
   deleteNote,
   getNote,
   unarchiveNote,
} from "../utils/network-data";

function DetailPage() {
   const { id } = useParams();
   const navigate = useNavigate();
   const [noteDetail, setNoteDetail] = useState(null);

   useEffect(() => {
      const fetchNote = async () => {
         const result = await getNote(id);
         if (!result.error) {
            setNoteDetail(result.data);
         }
      };

      fetchNote();
   }, [id]);

   function onDeleteHandler(id) {
      deleteNote(id);
      navigate("/");
   }

   function onArchiveHandler(id) {
      archiveNote(id);
      setNoteDetail(getNote(id));
      navigate("/");
   }

   function onUnarchiveHandler(id) {
      unarchiveNote(id);
      setNoteDetail(getNote(id));
      navigate("/");
   }

   if (!noteDetail) {
      return <p>Loading...</p>;
   }

   return (
      <section className="detail-page">
         <NoteDetail
            {...noteDetail}
            onDelete={onDeleteHandler}
            onArchive={onArchiveHandler}
            onUnarchive={onUnarchiveHandler}
         />
      </section>
   );
}

DetailPage.propTypes = {
   id: PropTypes.string.isRequired,
};

export default DetailPage;
