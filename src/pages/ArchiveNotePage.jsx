import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LangContext";
import { getArchivedNotes } from "../utils/network-data";

function ArchiveNotePage() {
   const [notes, setNotes] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   const [keyword, setKeyword] = useState(() => {
      return searchParams.get("keyword") || "";
   });
   const { locale } = useContext(LocaleContext);

   useEffect(() => {
      getArchivedNotes().then(({ data }) => {
         setNotes(data);
      });
   }, []);

   function onKeywordChangeHandler(keyword) {
      setKeyword(keyword);
      setSearchParams({ keyword });
   }

   return (
      <section>
         <h2>{locale === "id" ? "Catatan Arsip" : "Archive Notes"}</h2>
         <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
         <NoteList notes={notes} />
      </section>
   );
}

ArchiveNotePage.propTypes = {
   defaultKeyword: PropTypes.string,
   keywordChange: PropTypes.func.isRequired,
};

export default ArchiveNotePage;
