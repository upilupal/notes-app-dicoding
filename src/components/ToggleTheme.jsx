import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

const ToggleTheme = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <button onClick={toggleTheme} className='toggle-theme'>
        {theme === 'dark' ? <FaSun/> : <FaMoon/>}
    </button>
  )
}

export default ToggleTheme