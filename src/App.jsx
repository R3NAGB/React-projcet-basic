import React from 'react'
import Nav from './components/Nav'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import { About } from './pages/About'
import { Contact } from './pages/Contact'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      
    </div>
  )
}

export default App
