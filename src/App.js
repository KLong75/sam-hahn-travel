import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import page components
import BookHotel from './pages/BookHotel';
import Contact from './pages/Contact';
import DesignProcess from './pages/DesignProcess';
import About from './pages/About';


function App() {
  return (
    <>
    <CssBaseline />
    <Router>
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/design-process" element={<DesignProcess />} />
        <Route path="/book-hotel" element={<BookHotel />} />
      </Routes>
      
      <Footer />
    </div>
    </Router>
    </>
  );
}

export default App;
