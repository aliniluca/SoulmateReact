import React from 'react';
import './App.css';
import Form from './Form';
import divineDarlingLogo from './divine-darling-logo.jpg'; // Import the logo image file


function App() {
  return (
    <div className="container">
    //  <img
    //    src={divineDarlingLogo}
    //    alt="DivineDarling Logo"
     //   style={{ display: 'block', width: '100%', maxWidth: '250px', margin: '0 auto' }}
     // />
      <h1>Feeling stuck in the anxiety rat race, with no way out?</h1>
      <h2>Someone is offering you a hand to break the chain. Yes, it's your Higher Self!</h2>
      <div className="video-container">
        <iframe
          src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Drawing_-_91883_qmlmjl.mp4"
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
        { <img src="https://seeklogo.com/images/E/etsy-logo-68ADD687A5-seeklogo.com.png" alt="Etsy" />}
        { <img src="https://www.freepnglogos.com/uploads/tik-tok-logo-png/tik-tok-tiktok-logo-app-trend-1.png" alt="Tiktok" />}
      </div>

      {/* Image grid */}
      <div className="image-grid">
        <img src="https://i.etsystatic.com/23917073/r/il/2756f9/4782168692/il_fullxfull.4782168692_k2gl.jpg" alt="Image 1" />
        <img src="https://i.etsystatic.com/23917073/r/il/c76de7/4830433601/il_fullxfull.4830433601_o3m4.jpg" alt="Image 2" />
        <img src="https://i.etsystatic.com/23917073/r/il/8832fe/4782168702/il_fullxfull.4782168702_fxn6.jpg" alt="Image 3" />
        <img src="https://i.etsystatic.com/23917073/r/il/acefea/4830433603/il_fullxfull.4830433603_qj3m.jpg" alt="Image 4" />
      </div>

      {/* FAQ accordion */}
      <div class="faq-accordion">
        <div class="faq-item">
          <input type="checkbox" id="faq1" />
          <label for="faq1"> How Fast is this service?</label>
          <div class="answer">
            <p>Your high quality sketch and reading will be delivered to you via email within 24 hours. In some rare cases when demand is high, it could take up to 48 hours.</p>
          </div>
        </div>
        <div class="faq-item">
          <input type="checkbox" id="faq2" />
          <label for="faq2">What is All Included with My Sketch?</label>
          <div class="answer">
            <p>Your Higher Self plays a pivotal role in your life and destiny, understanding your higher purpose, and working collaboratively for your ultimate good as you journey through life, evolving into a higher vibrational and spiritual being. With love and care, your higher self supports and assists you.
Your higher self serves as the portal to the collective consciousness connecting you to the Source of creation. It possesses all the knowledge you'll ever need to navigate life. Your higher self can receive celestial messages from the Source and desires to share this wisdom with you. Whether you seek love, lucrative business ideas, specific spiritual practices, healing modalities, or anything else to help you live your best life, your higher self holds all the answers.</p>
          </div>
        </div>
        <div class="faq-item">
          <input type="checkbox" id="faq3" />
          <label for="faq3">What is a Higher Self actually?</label>
          <div class="answer">
            <p>A Higher Self Drawing is a valuable asset, as visualizing your Higher Self creates a constant connection in your conscious mind, subconscious energies and frequencies, as well as in your daily life, meditation, sleep, and dreaming.
With this Psychic Reading and Drawing, I will find out exactly what your Higher Self looks like, and I will make an in-depth connection and sense the most important life-changing messages and guidance that your Higher Self wants to share with you. </p>
          </div>
        </div>
        <div class="faq-item">
          <input type="checkbox" id="faq4" />
          <label for="faq4">What can I expect?</label>
          <div class="answer">
            <p> How can we uncover our hidden strengths, secret talents, and treasures that live within us? More importantly, how do we align these gifts with our everyday lives to become the best version of ourselves? Fortunately, there is a way to uncover this valuable information within ourselves, and it has everything to do with the Higher Self.</p>
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
