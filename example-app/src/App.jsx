import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Registration from './Registration.jsx'
import sidebar from './sidebar.jsx'

function App() {
return(
  <div className="App">
    <Header />
    <Registration />
    <sidebar />
  </div>
)
  
}

export default App
