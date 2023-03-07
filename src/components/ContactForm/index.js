import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [interestedIn, setInterestedIn] = useState('');

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
    console.log(firstName, lastName, email, message, interestedIn);
    // console.log with template literals
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Message: ${message}, Interested In: ${interestedIn}`);

    // clear input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setInterestedIn('');
  }


  return (
    <Grid container spacing={1} justifyContent='center' textAlign='center'>
    <form onSubmit={handleSubmit}>
      <h4>Contact Form</h4>
      <FormControl>
        <FormLabel id="contact-form-label">Your Details</FormLabel>
          <TextField label='First Name' required value={firstName} onChange={handleFirstNameChange} size='small' margin='dense' />
          <TextField label='Last Name' required value={lastName} onChange={handleLastNameChange} size='small' margin='dense' />
          <TextField label='Email Address' required value={email} onChange={handleEmailChange} size='small' margin='dense' />
          <TextField label='Message' required value={message} onChange={handleMessageChange} margin='dense' multiline rows={8}/>
        <FormLabel id="interested-in">Interested In</FormLabel>
          <RadioGroup
            aria-labelledby="interested-in"
            value={interestedIn}
            onChange={handleInterestedInChange}
            name="radio-buttons-group"
            style={{color: 'black'}}
          >
            <FormControlLabel value="Flight and Accommodation Booking/Group Booking" control={<Radio style={{color: 'black'}} />} label="Flight and Accommodation Booking/Group Booking" />
            <FormControlLabel value="Custom Travel Design" control={<Radio style={{color: 'black'}}/>} label="Custom Travel Design" />
            <FormControlLabel value="Just Curious" control={<Radio style={{color: 'black'}}/>} label="Just Curious" />
          </RadioGroup>
          <br/>
         <Button type='submit' size='small' color='primary' variant='contained' style={{width: '100px', backgroundColor:'black'}}>Submit</Button>
      </FormControl>
    </form>
    </Grid>
  );
}

export default ContactForm;

