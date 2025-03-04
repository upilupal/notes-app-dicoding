import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import LocaleContext from "../contexts/LangContext";
import { login } from "../utils/network-data";

const LoginPage = ({ loginSuccess }) => {
   const { locale } = useContext(LocaleContext);
   async function onLoginHandler({ email, password }) {
      const { error, data } = await login({ email, password });

      if (!error) {
         loginSuccess(data);
      }
   }
   return (
      <section>
         <h2>
            {locale === "id"
               ? "Login untuk menggunakan aplikasi."
               : "Log in to use the app."}
         </h2>
         <LoginInput login={onLoginHandler} />
         <p>
            {locale === "id" ? "Belum punya akun?" : "Don't have any account?"}{" "}
            <Link to="/register">
               {locale === "id" ? "Daftar disini" : "Register here"}
            </Link>
         </p>
      </section>
   );
};

LoginPage.propTypes = {
   loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
