import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [interestedIn, setInterestedIn] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
      interestedIn: interestedIn,
    };

  }




  return (
    <section>
      <h1>Contact Form</h1>
      <FormControl>
      <FormLabel id="contact-form-label">Your Details</FormLabel>
        <TextField label='First Name' size='small' margin='dense' />
        <TextField label='Last Name' size='small' margin='dense' />
        <TextField label='Email Address' size='small' margin='dense' />
        <TextField label='Message'  margin='dense' multiline rows={12}/>
        <FormLabel id="interested-in">Interested In</FormLabel>
        <RadioGroup
        aria-labelledby="interested-in"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Flight and Accommodation Booking/Group Booking" control={<Radio />} label="Flight and Accommodation Booking/Group Booking" />
        <FormControlLabel value="Custom Travel Design" control={<Radio />} label="Custom Travel Design" />
        <FormControlLabel value="Just Curious" control={<Radio />} label="Just Curious" />
      </RadioGroup>
        <Button type='submit' variant='contained' onClick={handleSubmit}>Submit</Button>
        </FormControl>
    </section>
  );
}

export default ContactForm;

