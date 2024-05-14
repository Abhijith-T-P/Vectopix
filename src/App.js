import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Guest from './Guest/App';
import User from './User/App';
import"./style.css";
const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/*" element={<Guest/>} />
      <Route path="/User?/*" element={<User/>} />

    </Routes>
  </div>  
  )
}

export default App