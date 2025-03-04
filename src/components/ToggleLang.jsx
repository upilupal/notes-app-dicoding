import React, { useContext } from 'react';
import LocaleContext from '../contexts/LangContext';

const ToggleLang = () => {
    const {locale, toggleLocale} = useContext(LocaleContext);
  return (
    <button onClick={toggleLocale} className='toggle-locale'>
            {locale === 'id' ? 'en' : 'id'}
        </button>
  )
}

export default ToggleLang