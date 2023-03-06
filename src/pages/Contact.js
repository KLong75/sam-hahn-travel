import React from 'react';

import ContactForm from '../components/ContactForm';
import MailingListSignUp from '../components/MailingListSignUp';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <ContactForm />
      <MailingListSignUp />
    </div>
  );
};

export default Contact;