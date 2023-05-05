import React, { useState } from 'react';
import './Form.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function Form() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  return (
    <div>
      <button onClick={openModal}>Yes, I want my future soulmate sketch now!</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>&times;</button>
        <h2>Just answer a few simple questions so we can draw your sketch accurately...</h2>
        <form>
          <label htmlFor="interestedIn">Who are You Interested In?</label>
          <select id="interestedIn">
            <option>I Like Men</option>
            <option>I Like Women</option>
          </select>
          <br />
          <label htmlFor="relationshipStatus">What is Your Relationship Status?</label>
          <select id="relationshipStatus">
            <option>Select Your Status</option>
            <option>Single</option>
            <option>In a Relationship</option>
            <option>Married</option>
            <option>Separated</option>
            <option>Divorced</option>
            <option>Widowed</option>
          </select>
          <br />
          <label htmlFor="zodiacSign">What is Your Zodiac Sign?</label>
          <select id="zodiacSign">
            <option>Select Your Sign</option>
            {zodiacSigns.map((sign, index) => (
              <option key={index} value={sign}>{sign}</option>
            ))}
          </select>
          <br />
          <label htmlFor="firstName">What is Your First Name?</label>
          <input type="text" id="firstName" />
          <br />
          <label htmlFor="lastName">What is Your Last Name?</label>
          <input type="text" id="lastName" />
          <br />
          <label htmlFor="birthdate">What is Your Birthdate?</label>
          <input type="date" id="birthdate" />
          <br />
          <label htmlFor="email">What Email Should We Send Your Sketch To?</label>
          <input type="email" id="email" />
          <br />
                <label>
          <input type="checkbox" required />
          <p>
            I agree to the terms of service & privacy policy and also agree to
            receive my sketch via the email address I provided and consent to
            receive other relevant content from Soulmate Sketch via our
            newsletter which I can opt-out at anytime.
          </p>
        </label>
        <button type="submit">Get Your Soulmate Drawing</button>

        </form>
      </Modal>
    </div>
  );
}

export default Form;
