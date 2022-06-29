import { useEffect, useState } from 'react'
import { Widget } from './components/Widget'

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

  return (
    <div>
      <Widget />
    </div>
  )
}
