import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import from MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import page components
import Home from './pages/Home';
import BookHotel from './pages/BookHotel';
import Contact from './pages/Contact';
import DesignProcess from './pages/DesignProcess';
import About from './pages/About';

const theme = createTheme({
  palette: {
    background: {
      default: '#fbdecc',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ul: {
          listStyleType: 'none',
        },
        a: {
          textDecoration: 'none',
          color: 'black',
        },
      },
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/design-process" element={<DesignProcess />} />
              <Route path="/book-hotel" element={<BookHotel />} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
