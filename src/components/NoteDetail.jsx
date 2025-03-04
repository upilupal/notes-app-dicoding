import PropTypes from "prop-types";
import React from "react";
import { showFormattedDate } from "../utils";
import NoteDetailAction from "./NoteDetailAction";

const NoteDetail = ({
   id,
   archived,
   onArchive,
   onUnarchive,
   onDelete,
   title,
   createdAt,
   body,
}) => {
   return (
      <section className="">
         <h2 className="detail-page__title">{title}</h2>
         <p className="detail-page__createdAt">
            {showFormattedDate(createdAt)}
         </p>
         <p className="detail-page__body">{body}</p>
         <NoteDetailAction
            id={id}
            isArchived={archived}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
            onDelete={onDelete}
            onEdit={() => setIsEditing(true)}
         />
      </section>
   );
};

NoteDetail.propTypes = {
   title: PropTypes.string.isRequired,
   createdAt: PropTypes.string.isRequired,
   body: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   archived: PropTypes.bool.isRequired,
   onArchive: PropTypes.func.isRequired,
   onUnarchive: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
