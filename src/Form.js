const handleSubmit = async (e) => {
  e.preventDefault();

  if (!agree) {
    setThickboxOpen(true);
    return;
  }

  // Send data to your backend
  try {
    const response = await axios.post('/subscribe', {
      email,
      firstName,
      birthdate
    });

    // Handle success (e.g., show a success message to the user)
  } catch (error) {
    console.error('Error sending data to the backend:', error);
  }
};

export default Form;
