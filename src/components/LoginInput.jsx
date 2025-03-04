import React from 'react'
import useInput from '../hooks/useInput'
import PropTypes from 'prop-types';

const LoginInput = ({login}) => {
    const [email, onEmailChangeHandler] = useInput();
    const [password, onPasswordChangeHandler] = useInput();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        login({email, password});
    }
  return (
    <form onSubmit={onSubmitHandler} className="input-login">
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
         <button>Login</button>
      </form>
  )
}

LoginInput.propTypes = {
   login: PropTypes.func.isRequired,
};

export default LoginInput