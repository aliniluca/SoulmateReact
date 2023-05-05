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
        {/* Add logos of famous news sites and TV shows here */}
        {/* Example: <img src={newsSiteLogo} alt="News Site" /> */}
      </div>
// Inside your App function
<div className="container">
  <div className="image-grid">
    <img src="https://via.placeholder.com/300" alt="Image 1" />
    <img src="https://via.placeholder.com/300" alt="Image 2" />
    <img src="https://via.placeholder.com/300" alt="Image 3" />
    <img src="https://via.placeholder.com/300" alt="Image 4" />
  </div>

  <Carousel className="faq-carousel">
    <Carousel.Item>
      <div className="faq-item">
        <h3>Question 1</h3>
        <p>Answer 1</p>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="faq-item">
        <h3>Question 2</h3>
        <p>Answer 2</p>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="faq-item">
        <h3>Question 3</h3>
        <p>Answer 3</p>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="faq-item">
        <h3>Question 4</h3>
        <p>Answer 4</p>
      </div>
    </Carousel.Item>
  </Carousel>
</div>
    </div>
  );
}

export default App;
