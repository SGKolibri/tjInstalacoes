import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/notFound'
import HomePage from './pages/homePage'
import { RequireAuth } from 'react-auth-kit'

function App() {

  return (
    <Routes>
      <Route path='/' element={
        <HomePage />
      } />
      <Route path="/*" element={<NotFound />} />
    </Routes >
  )
}

export default App;
