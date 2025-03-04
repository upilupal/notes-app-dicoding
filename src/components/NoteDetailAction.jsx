import PropTypes from "prop-types";
import React from "react";
import {
   MdOutlineArchive,
   MdOutlineDelete,
   MdOutlineUnarchive
} from "react-icons/md";

const NoteDetailAction = ({
   id,
   onDelete,
   onArchive,
   isArchived,
   onUnarchive,
}) => {
   
   return (
      <section className="detail-page__action">
         <div>
            {isArchived ? (
               <button className="action" onClick={() => onUnarchive(id)}>
                  <MdOutlineUnarchive />
               </button>
            ) : (
               <button className="action" onClick={() => onArchive(id)}>
                  <MdOutlineArchive />
               </button>
            )}
         </div>
         <div>
            <button className="action" onClick={() => onDelete(id)}>
               <MdOutlineDelete />
            </button>
         </div>
      </section>
   );
};

NoteDetailAction.propTypes = {
   id: PropTypes.string.isRequired,
   onDelete: PropTypes.func.isRequired,
   onArchive: PropTypes.func.isRequired,
   isArchived: PropTypes.bool.isRequired,
   onUnarchive: PropTypes.func.isRequired,
};

export default NoteDetailAction;
