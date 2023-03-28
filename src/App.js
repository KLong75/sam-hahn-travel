import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import from MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Swiper from './components/Swiper';

// import page components
import Home from './pages/Home/Home';
// import BookHotel from './pages/BookHotel/BookHotel';
import Contact from './pages/Contact/Contact';
import DesignProcess from './pages/DesignProcess/DesignProcess';
import About from './pages/About/About';
import SelfBooking from './pages/SelfBooking/SelfBooking';

const theme = createTheme({
  typography: {
    fontFamily: [
      // 'Courgette',
      // 'sans-serif',
      'Cormorant',
      'Roboto Flex',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  palette: {
    background: {
      // default: '#757263',
      default: '#fbdecc',
    },
    text: {
      primary: '#000000',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ul: {
          listStyleType: 'none',
          padding: 0,
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
        {/* <div className="App"> */}
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/design-process" element={<DesignProcess />} />
              <Route path="/self-booking" element={<SelfBooking />} />
              {/* <Route path="/book-hotel" element={<BookHotel />} /> */}
            </Routes>
            <Swiper />
          <Footer />
        {/* </div> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
