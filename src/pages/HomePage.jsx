import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HomePageAction from "../components/HomePageAction";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LangContext";
import { getActiveNotes } from "../utils/network-data";

function HomePage() {
   const [notes, setNotes] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");
   const { locale } = useContext(LocaleContext);
 
   useEffect(() => {
      async function fetchNotes() {
         const { error, data } = await getActiveNotes();
         if (!error) {
            setNotes(data);
         }
      }

      fetchNotes();

   }, []);
 
   function onKeywordChangeHandler(newKeyword) {
      setKeyword(newKeyword);
      setSearchParams({ keyword: newKeyword });
   }

   const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
   );
   return (
      <section>
         <h2>{locale === "id" ? "Catatan Aktif" : "Active Notes"}</h2>
         <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
         <NoteList notes={filteredNotes} />
         <HomePageAction />
      </section>
   );
}

export default HomePage;
