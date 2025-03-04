import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomePageAction = () => {
   return (
      <section className="homepage__action">
         <Link to={"/notes/new"} className="action">
            <FaPlus />
         </Link>
      </section>
   );
};

export default HomePageAction;
