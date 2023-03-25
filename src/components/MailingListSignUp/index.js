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

import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

const MailingListSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}`);

    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    // emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_USER_ID)
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });

    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <Grid container spacing={1} justifyContent='center' textAlign='center' >
    <form onSubmit={handleSubmit}>
      <h4 style={{ textDecoration: 'underline', fontSize: '20px', marginTop:'0px'}}>Join My Mailing List</h4>
        <FormControl>
        <TextField
          required
          label="First Name"
          variant="outlined"
          size="small"
          margin="dense"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style= {{
            marginTop: '-10px'
          }}
        />
        <TextField
          required
          label="Last Name"
          variant="outlined"
          size="small"
          margin="dense"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
        <Grid xs={12}>
          <Button variant="contained" type="submit" size='small' style={{width: '100px', backgroundColor: 'black', marginTop: '-20px'}}>
            Sign Up
          </Button>
        </Grid>
        </FormControl>
      </form>
      </Grid>
  );
};

export default MailingListSignUp;



