// import from React
import React, { useState } from 'react';

// import from emailjs
import emailjs from 'emailjs-com';

// import from react-toastify
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import from Material UI
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

// import { styled } from '@mui/material/styles';
// import { Paper } from '@mui/material';

// import images
import frameGlobeLogoPeach from '../../assets/sam_logos/frame_globe_logo_peach.png';

// import from utils
import { validateEmail } from '../../utils/helpers';

const ContactFormToast = ({message, icon}) => (
  <div>
    <img src={frameGlobeLogoPeach} alt="frame globe logo peach" style={{width: '100px', height: '100px', borderRadius: '50%', border: '1px solid #fbdecc'}}/>
    <p style={{color: '#fbdecc', fontSize: '20px', marginTop: '10px'}}>{message}</p>
  </div>
)


const ContactForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [interestedIn, setInterestedIn] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleInterestedInChange = (e) => {
    setInterestedIn(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateEmail(email);
      if (!isValid) {   
        setErrorMessage('Please enter a valid email address.');
        return;
      } else {
        setErrorMessage('');
      }
    
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Message: ${message}, Interested In: ${interestedIn}`);

    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
      interestedIn: interestedIn
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT_FORM, 
      templateParams, 
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
        console.log(firstName, lastName, email, message, interestedIn);
        toast(<ContactFormToast style={{color: '#fbdecc' }} message='Thank you for message! I will be in touch soon!' icon={frameGlobeLogoPeach}/>);
      }, (error) => {
        console.log(error.text);
      });

    // clear input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setInterestedIn('');
  };



  return (
    <Grid container spacing={2} justifyContent='center' textAlign='center' >
    
    <form onSubmit={handleSubmit}>
      <h4 style={{ fontSize: '20px', marginTop:'0px'}}>Send Me a Message</h4>
      <FormControl>
        <TextField label='First Name' required value={firstName} onChange={handleFirstNameChange} size='small' margin='dense' style={{ marginTop: '-10px'}} />
        <TextField label='Last Name' required value={lastName} onChange={handleLastNameChange} size='small' margin='dense' />
        <TextField 
          label='Email Address' 
          required 
          value={email} 
          onChange={handleEmailChange} 
          size='small' 
          margin='dense' 
          error={errorMessage !== ''}
          helperText={<span style={{color: ''}}>{errorMessage}</span>}

        />
        <TextField label='Message' required value={message} onChange={handleMessageChange} margin='dense' multiline rows={8}/>
        <FormLabel id="interested-in">Interested In</FormLabel>
          <RadioGroup
            aria-labelledby="interested-in"
            value={interestedIn}
            onChange={handleInterestedInChange}
            name="radio-buttons-group"
            style={{color: 'black'}}
          >
            <FormControlLabel value="Flight and Accommodation Booking/Group Booking" control={<Radio style={{color: 'black'}} />} label="Flight and Accommodation Booking / Group Booking" />
            <FormControlLabel value="Custom Travel Design" control={<Radio style={{color: 'black'}}/>} label="Custom Travel Design" />
            <FormControlLabel value="Just Curious" control={<Radio style={{color: 'black'}}/>} label="Just Curious" />
          </RadioGroup>
          <br/>
        <Grid xs={12}>
        <Button 
          type='submit' 
          size='small' 
          color='primary' 
          variant='contained' 
          style={{
            width: '100px', 
            backgroundColor:'black',
            marginTop: '-20px'
          }}
        >
          Submit
        </Button>
        </Grid>
      </FormControl>
    </form>

    <ToastContainer
          position="top-center"
          autoClose={5000}
          transition={Zoom}
          theme="dark"
          style={{ color: '#fbdecc' }}
          progressStyle={{ backgroundColor: '#fbdecc' }}
        />
    
    </Grid>
  );
}

export default ContactForm;

