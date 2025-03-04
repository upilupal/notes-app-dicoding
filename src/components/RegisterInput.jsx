import PropTypes from "prop-types";
import React from "react";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

const RegisterInput = () => {
   const [name, onNameChangeHandler] = useInput();
   const [email, onEmailChangeHandler] = useInput();
   const [password, onPasswordChangeHandler] = useInput();
   const [confirmPassword, onConfirmPasswordChangeHandler] = useInput();
   const navigate = useNavigate();

   const onSubmitHandler = (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
         alert("Password do not match!");
         return;
      }

      if (password.length < 6) {
         alert("Password must contain 6 characters");
         return;
      }
      register({ name, email, password });
      navigate("/");
   };
   return (
      <form onSubmit={onSubmitHandler} className="input-register">
         <label htmlFor="name">Name</label>
         <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={onNameChangeHandler}
         />
         <label htmlFor="email">Email</label>
         <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={onEmailChangeHandler}
         />
         <label htmlFor="password">Password</label>
         <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onPasswordChangeHandler}
         />
         <label htmlFor="confirmPassword">Confirm password</label>
         <input
            type="text"
            id="confirmPassword"
            placeholder="Confirm password..."
            value={confirmPassword}
            onChange={onConfirmPasswordChangeHandler}
            required
         />
         <button>Register</button>
      </form>
   );
};

RegisterInput.propTypes = {
   register: PropTypes.func.isRequired,
};

export default RegisterInput;
