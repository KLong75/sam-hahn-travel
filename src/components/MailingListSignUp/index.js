// import from react
import React, { useState } from 'react';

// import from emailjs
import emailjs from 'emailjs-com';

// import from react-toastify
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import from material-ui
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

// import images
import frameGlobeLogoPeach from '../../assets/sam_logos/frame_globe_logo_peach.png';

// import from utils
import { validateEmail } from '../../utils/helpers';

const MailingListToast = ({message, icon}) => (
  <div>
    <img src={frameGlobeLogoPeach} alt="frame globe logo peach" style={{width: '100px', height: '100px', borderRadius: '50%', border: '1px solid #fbdecc'}}/>
    <p style={{color: '#fbdecc', fontSize: '20px', marginTop: '10px'}}>{message}</p>
  </div>
)

const MailingListSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateEmail(email);
      if (!isValid) {   
        setErrorMessage('Please enter a valid email address.');
        return;
      } else {
        setErrorMessage('');
      }

    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}`);

    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID_MAILING_LIST, 
      templateParams, 
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
        console.log(firstName, lastName, email);
        toast(<MailingListToast style={{ color: '#fbdecc' }} message='Thank you for joining my mailing list! I will be in touch soon!' icon={frameGlobeLogoPeach}/>);
      }, (error) => {
        console.log(error.text);
      });

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
            error={errorMessage !== ''}
            helperText={<span style={{color: ''}}>{errorMessage}</span>}
          />
          <br/>
          <Grid xs={12}>
            <Button variant="contained" type="submit" size='small' style={{width: '100px', backgroundColor: 'black', marginTop: '-20px'}}>
            Sign Up
            </Button>
          </Grid>
          </FormControl>
        </form>
        
        <ToastContainer
          position="top-center"
          autoClose={5000}
          transition={Zoom}
          theme="dark"
          // style={{ width: '90%'}}
          progressStyle={{ backgroundColor: '#fbdecc' }}
        />
       
      </Grid>
  );
};

export default MailingListSignUp;



