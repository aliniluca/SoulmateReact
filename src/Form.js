import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Form = () => {
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    axios.post('/api/soulmate', { email, firstName, birthdate });
  };

  return (
    <div>
      <div className="container">
        <h1>Get Your Soulmate Sketch</h1>
        <form onSubmit={submitForm}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <label>
            Birthdate:
            <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
          </label>
          <label>
            I agree to the terms and conditions:
            <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
          </label>
          <div className="video-container">
            <iframe
              src="https://player.vimeo.com/video/616281920?h=9b8d1b79a6"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <button type="submit">Yes, I want my future soulmate sketch now!</button>
        </form>
      </div>
      <div className="faq-section">
        <h2>FAQ</h2>
        <h3>How this Soulmate Sketch & Reading Works</h3>
        {/* ... (other FAQ questions and answers) ... */}
        <h3>What is All Included with My Sketch?</h3>
        <p>
          In addition to the sketch of your soulmate, you will receive a complete description of characteristics and qualities of this person that will help you connect when you are at the right time with this person.
        </p>
        <h3>Will I Know My Soulmate?</h3>
        <p>
          Many people have found that their sketch resembles someone that is currently close in their life, their current significant other / partner, or someone they admire or have feelings for.
        </p>
        <h3>What Can I Expect?</h3>
        <p>
          You can expect high quality work including a real sketch of the visions that I receive in my trance of connection with the infinite energy of the universe with a 100% satisfaction guarantee.
        </p>
      </div>
      <div className="disclaimer">
        <p>
          Disclaimer: By participating in reading my services you acknowledge that I
          am not a licensed psychologist, lawyer, or health care professional and my
          services do not replace the care of lawyers, psychologists, or other
          healthcare professionals. Tarot and numerology are in no way to be
          construed or substituted as psychological counseling or any other type of
          therapy or medical advice. I will at all times exercise my best
          professional efforts, skills, and care. However, I cannot guarantee the
