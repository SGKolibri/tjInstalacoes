import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/notFound'
import HomePage from './pages/homePage'
import { RequireAuth } from 'react-auth-kit'
import ServicesPage from './pages/servicesPage'
import PartnershipPage from './pages/partnershipPage'
import FAQPage from './pages/faqPage'
import WorkPage from './pages/workPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/partnerships' element={<PartnershipPage />} />
      <Route path='/work' element={<WorkPage />} />
      <Route path='/faq' element={<FAQPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes >
  )
}

export default App;
