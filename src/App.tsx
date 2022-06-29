import { useEffect, useState } from 'react'
import { Widget } from './components/Widget'
import { FaSun, FaMoon } from 'react-icons/fa'

export const App = () => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if(window.matchMedia('prefers-color-scheme: dark').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <button
       type="button"
       onClick={handleThemeSwitch}
       className="fixed z-10 right-40 bottom-7 bg-slate-500 text-lg p-2 rounded-full  " 
      >
        {theme === 'dark' ? <FaMoon className="w-full h-full text-white"></FaMoon>  : <FaSun className="w-full h-full text-white"></FaSun>}
        
      </button>
      <div>
        <Widget />
      </div>
    </>  
  )
}
