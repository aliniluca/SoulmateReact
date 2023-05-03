import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>
          Thank you for submitting your information. Check your email for your
          Twinflame Reading.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function Form() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [agree, setAgree] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !email || !birthdate || !agree) {
      alert('Please complete all fields and agree to the terms.');
      return;
    }

    try {
      await axios.post('/api/signup', {
        firstName,
        email,
        birthdate,
      });
      setIsModalOpen(true);
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h1>Divine Darling's Twinflame Reading</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Birthdate
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          I agree to the terms and conditions.
        </label>
        <button type="submit">Submit</button>
      </form>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Form;
