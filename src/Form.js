import React, { useState } from 'react';
import axios from 'axios';

function Modal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>Please agree to receive emails from us before submitting the form.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function Form() {
  const [agree, setAgree] = useState(false);
  const [thickboxOpen, setThickboxOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (agree) {
      try {
        await axios.post('/api/send-email', { email, firstName, birthdate });
        // Handle success
      } catch (error) {
        // Handle error
      }
    } else {
      setThickboxOpen(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="birthdate">Birthdate:</label>
        <input
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree to receive emails from Divine Darling's Twinflame Reading.
        </label>

        <button type="submit">Submit</button>
      </form>
      <Modal open={thickboxOpen} onClose={() => setThickboxOpen(false)} />
    </>
  );
}

export default Form;
