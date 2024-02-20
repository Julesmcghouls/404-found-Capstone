import React, { useRef } from 'react';

// This is nonfunctional. Need to set up server-side endpoint to receive data.

function ContactForm() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log('Form submitted!');

    // Clear the form
    formRef.current.reset();
  };

  const handleButtonClick = () => {
    // Add button click logic here
    console.log('Button clicked!');
  };

  const formStyle = {
    maxWidth: '100%',
    width: '80%',
    margin: 'auto',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
  };

  return (
    <form ref={formRef} id="contact-form" onSubmit={handleSubmit} method="POST" style={formStyle}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="name" style={{ color: 'yellow', marginBottom: '0.5rem', display: 'block' }}>Name:</label>
        <input type="text" id="name" style={inputStyle} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email" style={{ color: 'yellow', marginBottom: '0.5rem', display: 'block' }}>Email address:</label>
        <input type="email" id="email" aria-describedby="emailHelp" style={inputStyle} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="message" style={{ color: 'yellow', marginBottom: '0.5rem', display: 'block' }}>Message:</label>
        <textarea id="message" rows="5" style={{ ...inputStyle, resize: 'vertical' }}></textarea>
      </div>
      <button type="submit" style={buttonStyle} onClick={handleButtonClick}>Submit</button>
    </form>
  );
}

export default ContactForm;
