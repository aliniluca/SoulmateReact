import React, { useState } from 'react';
import './styles.css';

const Form = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  return (
    <div className="form-container">
      <button className="cta-button" onClick={handleButtonClick}>
        Yes, I want my future soulmate sketch now!
      </button>
      {showForm && (
        <div className="modal">
          <div className="form">
            <button className="close-modal" onClick={closeModal}>X</button>
            <h2>Just answer a few simple questions so we can draw your sketch accurately...</h2>
            <>
              <label htmlFor="interestedIn">Who are You Interested In?</label>
              <select id="interestedIn">
                <option>I Like Men</option>
                <option>I Like Women</option>
              </select>

              <label htmlFor="relationshipStatus">What is Your Relationship Status?</label>
              <select id="relationshipStatus">
                <option>Select Your Status</option>
                {/* Add more options here */}
              </select>

              <label htmlFor="zodiacSign">What is Your Zodiac Sign?</label>
              <select id="zodiacSign">
                <option>Select Your Sign</option>
                {/* Add more options here */}
              </select>

              <label htmlFor="firstName">What is Your First Name?</label>
              <input type="text" id="firstName" placeholder="Your First Name Here..." />

              <label htmlFor="lastName">What is Your Last Name?</label>
              <input type="text" id="lastName" placeholder="Your Last Name Here..." />

              <label htmlFor="birthdate">What is Your Birthdate?</label>
              <input type="date" id="birthdate" placeholder="Your Birthdate Here..." />

              <label htmlFor="email">What Email Should We Send Your Sketch To?</label>
              <input type="email" id="email" placeholder="Your Email Address Here..." />

              <label htmlFor="agree">
                <input type="checkbox" id="agree" />
                I agree to the terms of service & privacy policy and also agree to receive my sketch via the email address I provided and consent to receive other relevant content from Soulmate Sketch via our newsletter which I can opt-out at anytime.
              </label>

              <button type="submit" className="submit-button">Get Your Soulmate Drawing</button>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
