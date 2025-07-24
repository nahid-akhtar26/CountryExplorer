import Header from './components/Header'
import { Outlet } from 'react-router'

import './App.css'
import { useState } from 'react'
import { ThemeContext, ThemeProvider } from './components/contexts/ThemeContext'

const App = () => {
  
 
  return (
    <ThemeProvider >
      <Header  />
      <Outlet  />
    </ThemeProvider>
  )
}

export default App