import PropTypes from "prop-types";
import React, { Component } from "react";
import { FaCheck } from "react-icons/fa6";

class NoteInput extends Component {
   constructor(props) {
      super(props);

      this.state = {
         title: "",
         body: "",
      };

      this.onTitleChangeEventHandler =
         this.onTitleChangeEventHandler.bind(this);
      this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
   }

   onTitleChangeEventHandler = (event) => {
      const inputValue = event.target.value;

      this.setState(() => {
         return {
            title: inputValue.slice(0, 50),
         };
      });
   };

   onBodyChangeEventHandler(event) {
      this.setState(() => {
         return {
            body: event.target.innerHTML,
         };
      });
   }

   onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.addNote(this.state);
      // reset input fields
      this.setState({
         title: "",
         body: "",
      });
   }

   render() {
      const { title, body } = this.state;
      return (
         <form
            className="add-new-page__input"
            onSubmit={this.onSubmitEventHandler}
         >
            <input
               type="text"
               placeholder="Judul..."
               className="add-new-page__input__title"
               value={title}
               onChange={this.onTitleChangeEventHandler}
            />
            <div
               data-placeholder="Tulis catatan..."
               className="add-new-page__input__body"
               value={body}
               onInput={this.onBodyChangeEventHandler}
               contentEditable
            />
            <div className="add-new-page__action">
               <button className="action" type="submit">
                  <FaCheck />
               </button>
            </div>
         </form>
      );
   }
}

NoteInput.propTypes = {
   addNote: PropTypes.func.isRequired,
};

export default NoteInput;
