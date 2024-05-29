import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Guest from './Guest/App';
import User from './User/App';
import Admin from './Admin/App';
import"./style.css";
const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/Guest*" element={<Guest/>} />
      <Route path="/Vectopix/*" element={<Guest/>} />
      <Route path="/User/*" element={<User/>} />
      <Route path="/Admin/*" element={<Admin/>} />


    </Routes>
  </div>  
  )
}

export default App