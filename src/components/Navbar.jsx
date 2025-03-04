import PropTypes from "prop-types";
import React, { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LangContext";
import ToggleLang from "./ToggleLang";
import ToggleTheme from "./ToggleTheme";

const Navbar = ({ name, logout }) => {
   const { locale } = useContext(LocaleContext);
   return (
      <nav className="navigation">
         <ul>
            <li>
               <Link to="/archive">{locale === 'id' ? 'Arsip' : 'Archive'}</Link>
            </li>
            <li>
               <button onClick={logout} className="button-logout">
                  {name} <FiLogOut />
               </button>
            </li>
            <li>
               <ToggleLang />
            </li>
            <li>
               <ToggleTheme />
            </li>
         </ul>
      </nav>
   );
};

Navbar.propTypes = {
   logout: PropTypes.func.isRequired,
   name: PropTypes.string.isRequired,
};

export default Navbar;
