import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import LocaleContext from "../contexts/LangContext";
import { register } from "../utils/network-data";

const RegisterPage = () => {
   const { locale } = useContext(LocaleContext);
   async function onRegisterHandle(user) {
      await register(user);
   }
   return (
      <section>
         <h2>
            {locale === "id"
               ? "Isi form untuk mendaftar akun."
               : "Fill the form to register"}
         </h2>
         <RegisterInput register={onRegisterHandle} />
         <p>
            {locale === "id" ? "Sudah punya akun?" : "Already have account?"}{" "}
            <Link to="/login">
               {locale === "id" ? "Login disini" : "Login here"}
            </Link>
         </p>
      </section>
   );
};

export default RegisterPage;
