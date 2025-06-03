import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage.jsx'
import SpecializedServices from './pages/SpecializedServices.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  // Simple routing based on pathname
  const currentPath = window.location.pathname;
  
  const renderPage = () => {
    switch (currentPath) {
      case '/usluge':
        return <SpecializedServices />;
      case '/o-nama':
        return <AboutUs />;
      case '/kontakt':
        return <Contact />;
      default:
        return <Homepage />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  )
}

export default App