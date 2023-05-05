import React from 'react';
import './App.css';
import Form from './Form';
import divineDarlingLogo from './divine-darling-logo.jpg'; // Import the logo image file


function App() {
  return (
    <div className="container">
      <img
        src={divineDarlingLogo}
        alt="DivineDarling Logo"
        style={{ display: 'block', width: '100%', maxWidth: '250px', margin: '0 auto' }}
      />
      <h1>Are You Ready to Finally Meet Your True Soulmate?</h1>
      <div className="video-container">
        <iframe
          src="https://player.vimeo.com/video/616281920"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video"
        ></iframe>
      </div>
      <Form />

      {/* As Seen On section */}
      <div className="as-seen-on">
        <h2>As Seen On</h2>
        { <img src="https://via.placeholder.com/300" alt="Image 5" />}
        { <img src="https://via.placeholder.com/300" alt="Image 6" />}
      </div>

      {/* Image grid */}
      <div className="image-grid">
        <img src="https://via.placeholder.com/300" alt="Image 1" />
        <img src="https://via.placeholder.com/300" alt="Image 2" />
        <img src="https://via.placeholder.com/300" alt="Image 3" />
        <img src="https://via.placeholder.com/300" alt="Image 4" />
      </div>

      {/* FAQ accordion */}
      <div class="faq-accordion">
        <div class="faq-item">
          <input type="checkbox" id="faq1" />
          <label for="faq1"> How Fast Can I Get My Sketch and Reading?</label>
          <div class="answer">
            <p>Your high quality sketch and reading will be delivered to you via email within 24 hours. In some rare cases when demand is high, it could take up to 48 hours.</p>
          </div>
        </div>
        <div class="faq-item">
          <input type="checkbox" id="faq2" />
          <label for="faq2">What is All Included with My Sketch?</label>
          <div class="answer">
            <p> In addition to the sketch of your soulmate, you will receive a complete description of characteristics and qualities of this person that will help you connect when you are at the right time with this person.</p>
          </div>
        </div>
        <div class="faq-item">
          <input type="checkbox" id="faq3" />
          <label for="faq3">Will I Know My Soulmate?</label>
          <div class="answer">
            <p> Many people have found that their sketch resembles someone that is currently close in their life, their current significant other / partner, or someone they admire or have feelings for.</p>
          </div>
        </div>
        <div class="faq-item">
          <input type="checkbox" id="faq4" />
          <label for="faq4">What can I expect?</label>
          <div class="answer">
            <p> You can expect high quality work including a real sketch of the visions that I receive in my trance of connection with the infinite energy of the universe with a 100% satisfaction guarantee.</p>
</div>
</div>
</div>
          <p className="disclaimer">
        Disclaimer: By participating in reading my services you acknowledge that I am not a licensed psychologist, lawyer, or health care professional and my services do not replace the care of lawyers, psychologists, or other healthcare professionals. Tarot and numerology are in no way to be construed or substituted as psychological counseling or any other type of therapy or medical advice. I will at all times exercise my best professional efforts, skills, and care. However, I cannot guarantee the outcome of reading efforts and/or recommendations on my website and my comments about the outcome are expressions of opinion only. I cannot make any guarantees other than to deliver the services purchased as described. All my sketches and readings are intended for entertainment purposes only and may not be unique.
      </p>
</div>
);
}

export default App;
