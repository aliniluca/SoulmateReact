import React, { useState } from 'react';
import './styles.css';
import Modal from 'react-modal';
import axios from 'axios';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    maxWidth: '400px',
    height: '80%',
    maxHeight: '600px',
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '20px',
    overflowY: 'auto',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      interestedIn: e.target.interestedIn.value,
      relationshipStatus: e.target.relationshipStatus.value,
      zodiacSign: e.target.zodiacSign.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      birthdate: e.target.birthdate.value,
      email: e.target.email.value,
    };

    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    const mailerLiteApiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYTNkNDlhODM2YWEwODY4YTQ2ZGJiMTUyZTFkOGFjY2UyMzNmMDNmY2I3NDYyOGZjNzI5ZjkzZmM2N2E0NDkzZDNiMWJiMjVhOTViNTc5MmYiLCJpYXQiOjE2ODMzMTA4NTIuMjI0MTAxLCJuYmYiOjE2ODMzMTA4NTIuMjI0MTAzLCJleHAiOjQ4Mzg5ODQ0NTIuMjE5NjI4LCJzdWIiOiI0NTc1OTIiLCJzY29wZXMiOltdfQ.c9RRguRxAPXz--Cuv42J1n5sr16G4GxXe8xFJPOppmH0TbRLJMuc5uZ4s3QfZTTN3FY1VhjgU3ssm5Y_cSmFY3D0njm9rCFpXqj8QILJgJ_bMWLS8bD6IB2pc6OazEmcWEl1aS_q1gs-4jjxBZ1BYfP4P0L6MNjxBRVLEfRJa_DdpE_M7m8kWw-s-x0CibcITnJI5Vrae9-u435ab7ToPau9zN8LAi9mV_9DZFSTGEOFHj4Xhjpxp7d6epTU3xyHFZ7RtLfzO7bwA09ZCRzIOMebnTZPO4KQW-uHcQnSdY8-L5mGXuj4dXfNXWeZqITdsBsRIDpJhnVGVZdU6vhNl1h3XwH2Tcx7Fircfw9vsfbJx3BgC7uL0JpwGDBFi5iaLhegUSFEUDhhJufJbywxOHdKLn3sNDdXfFqXMl6B2TWRmm46AlBn-srA0ADM1AsmzlcRZl_-spB-Xaw2WLXmkKrCDo5FiP50V7A48O5kZvyf1atJg7NvjfMrTBGcOvQwwvf7_L5Mam_EiyC2hJlXZI3LoCW_L3uYVBmkci-A5d2SfXE7hxqktjK9WWf6-Hd5JYcbFSGbrkzlJT9WULtEqAfPsX2Lfde2ho8R2GSjngv48iXXQzPW8i__vCi5Gj_QC_EacChQ7OyrU_k840vxJ9UVlioSdrQroA96FRMm8zw';
    const groupId = 'website';

    const data = {
      email: formData.email,
      name: `${formData.firstName} ${formData.lastName}`,
      fields: {
        interested_in: formData.interestedIn,
        relationship_status: formData.relationshipStatus,
        zodiac_sign: formData.zodiacSign,
        birthdate: formData.birthdate,
      },
      resubscribe: true,
    };

    try {
      await axios.post(
        `https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-MailerLite-ApiKey': mailerLiteApiKey,
          },
        }
      );

      const emailTemplateId = '0';
      const imageUrl = `https://yourserver.com/path/to/images/${randomImage}`;

      const emailData = {
        template_id: emailTemplateId,
        subject: 'Your Higher Self Reading & Sketch',
        to: formData.email,
        from: 'vanlica@gmail.com',
        from_name: 'DivineDarling',
        content: {
          html: `<img src="${imageUrl}" alt="Soulmate Sketch" />`,
        },
      };

      await axios.post(`https://api.mailerlite.com/api/v2/campaigns`, emailData, {
        headers: {
          'Content-Type': 'application/json',
          'X-MailerLite-ApiKey': mailerLiteApiKey,
        },
      });

      closeModal();
      alert('Email sent successfully');
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending the email');
    }
  };
  return (
<div>
<button onClick={openModal}>Yes, I want a Higher Self Reading Now!</button>
<Modal
     isOpen={modalIsOpen}
     onRequestClose={closeModal}
     style={customStyles}
     contentLabel="Example Modal"
   >
<button onClick={closeModal}>×</button>
<h2>Just answer a few simple questions so we can draw your sketch accurately...</h2>
<form onSubmit={handleSubmit}>
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
<button type="submit">Get Your Higher Self Drawing</button>
</form>
</Modal>
</div>
);
}

export default Form;
