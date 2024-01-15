import React, { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation/Navigation'
import { Footer } from './components/footer'
import WhatsappButton from './components/WhatsappButton/WhatsappButton'
import Landing from './pages/Landing'
import './App.css'
import { ToastContainer } from 'react-toastify'

// import { Outlet, Route, Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <WhatsappButton />
      <Navigation />
      {/* <Outlet/> */}
      <Landing />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
