import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Compo/Login'
import Signup from './Compo/Signup'
import Home from './Compo/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Home/:userid' element={<Home/>}/> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
