import React, { useEffect, useMemo, useState } from "react";
import { Link, Route, Routes, useSearchParams } from "react-router-dom";
import { ThemeProvider } from "../contexts/ThemeContext";
import AddNotePage from "../pages/AddNotePage";
import ArchiveNotePage from "../pages/ArchiveNotePage";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { getUserLogged, putAccessToken } from "../utils/network-data";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import ToggleLang from "./ToggleLang";
import ToggleTheme from "./ToggleTheme";
import { LocaleProvider } from "../contexts/LangContext";

function NoteApp() {
   const [searchParams, setSearchParams] = useSearchParams();
   const [authedUser, setAuthedUser] = useState(null);
   const [initializing, setInitializing] = useState(true);
   const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
   const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
   const keyword = searchParams.get("keyword") || "";

   useEffect(() => {
      async function fetchAuthedUser() {
         const { data } = await getUserLogged();
         if (data) {
            setAuthedUser(data);
            setInitializing(false);
         }
      }
      fetchAuthedUser();
   }, []);
   
   useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
   }, [theme]);

   useEffect(() => {
      document.documentElement.setAttribute("data-locale", locale);
   }, [locale]);
   
   function changeSearchParams(keyword) {
      setSearchParams({ keyword });
   }

   async function onLoginSuccess({ accessToken }) {
      putAccessToken(accessToken);
      const { data } = await getUserLogged();
      setAuthedUser(data);
   }

   const onLogoutHandler = () => {
      setAuthedUser(null);
      putAccessToken("");
   };


   const toggleTheme = () => {
      setTheme((prevTheme) => {
         const newTheme = prevTheme === "dark" ? "light" : "dark";
         localStorage.setItem("theme", newTheme);
         return newTheme;
      });
   };

   const toggleLocale = () => {
      setLocale((prevLocale) => {
         const newLocale = prevLocale === "id" ? "en" : "id";
         localStorage.setItem("locale", newLocale);
         return newLocale;
      });
   };

   const themeContextValue = useMemo(() => {
      return {
         theme,
         toggleTheme,
      };
   }, [theme]);

   const localeContextValue = useMemo(() => {
      return {
         locale,
         toggleLocale,
      };
   }, [locale]);

   if (initializing) {
      return null;
   }

   if (authedUser === null) {
      return (
         <LocaleProvider value={localeContextValue}>
            <ThemeProvider value={themeContextValue}>
               <div className="app-container">
                  <header>
                     <Link to="/">
                        <h1>Notes</h1>
                     </Link>
                     <div className="navigation">
                        <ul>
                           <li>
                              <ToggleLang />
                           </li>
                           <li>
                              <ToggleTheme />
                           </li>
                        </ul>
                     </div>
                  </header>
                  <main>
                     <Routes>
                        <Route
                           path="/*"
                           element={<LoginPage loginSuccess={onLoginSuccess} />}
                        />
                        <Route path="/register" element={<RegisterPage />} />
                     </Routes>
                  </main>
               </div>
            </ThemeProvider>
         </LocaleProvider>
      );
   }

   return (
      <LocaleProvider value={localeContextValue}>
         <ThemeProvider value={themeContextValue}>
            <div className="app-container">
               <header>
                  <Link to="/">
                     <h1>Notes</h1>
                  </Link>
                  <Navbar name={authedUser.name} logout={onLogoutHandler} />
               </header>
               <main>
                  <Routes>
                     <Route
                        path="/"
                        element={
                           <HomePage
                              defaulKeyword={keyword}
                              keywordChange={changeSearchParams}
                           />
                        }
                     />
                     <Route
                        path="/notes/:id"
                        element={<DetailPage id={authedUser.id} />}
                     />
                     <Route
                        path="/archive"
                        element={
                           <ArchiveNotePage
                              defaulKeyword={keyword}
                              keywordChange={changeSearchParams}
                           />
                        }
                     />
                     <Route path="/notes/new" element={<AddNotePage />} />
                     <Route path="*" element={<PageNotFound />} />
                  </Routes>
               </main>
            </div>
         </ThemeProvider>
      </LocaleProvider>
   );
}

export default NoteApp;
