import React, { useContext } from 'react'
import {  Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Price from './pages/Price'
import Navbar from './components/Navbar'
import Result from './pages/Result'
import { AppContext } from './contex/AppContex'
const App = () => {

  const {backendUrl,  token, setToken} = useContext(AppContext)
  return   (
    <div className='min-h-screen bg-slate-100'>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/price" element={<Price />} />
        <Route path="/result" element={<Result />} />

      </Routes>
    </div>
  )
}

export default App