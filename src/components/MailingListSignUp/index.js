// import React from 'react';

// import TextField from '@mui/material/TextField';
// // import Grid from '@mui/material/Unstable_Grid2';
// // import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

// const MailingListSignUp = () => {

  

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission
//   };
//   return (
   
    
//       <div>
       
//           <h5>Mailing List</h5>
//           <TextField id="outlined-basic" label="First Name" size='small' variant="outlined" />
//           <TextField id="outlined-basic" label="Last Name" size='small' variant="outlined" />
//           <TextField id="outlined-basic" label="Email Adress" size='small' variant="outlined" />
//           <Button variant="contained" size='small' onClick={handleSubmit}>Submit</Button>
       
//       </div>
    

   
//   );
// };

// export default MailingListSignUp;

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& $notchedOutline': {
            borderColor: '#000',
          },
        },
        input: {
          color: '#000',
        },
        notchedOutline: {},
        // Remove the background-color property below
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#000',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          backgroundColor: '#000',
          '&:hover': {
            backgroundColor: '#111',
          },
        },
      },
    },
  },
});

const MailingListSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          label="Email Address"
          variant="outlined"
          size="small"
          margin="dense"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <TextField
          label="First Name"
          variant="outlined"
          size="small"
          margin="dense"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br/>
        <TextField
          label="Last Name"
          variant="outlined"
          size="small"
          margin="dense"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br/>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default MailingListSignUp;



