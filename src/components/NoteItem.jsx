import React, { useContext } from "react";
import { showFormattedDate, showFormattedEnDate } from "../utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LangContext";

const NoteItem = ({ id, title, body, createdAt }) => {
   const { locale } = useContext(LocaleContext);
   return (
      <div className="note-item">
         <h3 className="note-item__title">
            <Link to={`/notes/${id}`}>{title}</Link>
         </h3>
         <p className="note-item__createdAt">
            {locale === "id"
               ? `${showFormattedDate(createdAt)}`
               : `${showFormattedEnDate(createdAt)}`}
         </p>
         <p className="note-item__body">{body}</p>
      </div>
   );
};

NoteItem.propTypes = {
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   body: PropTypes.string.isRequired,
   createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
