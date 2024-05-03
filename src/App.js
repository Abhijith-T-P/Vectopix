import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Guest from './Guest/App';
const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/*" element={<Guest/>} />

    </Routes>
  </div>  
  )
}

export default App