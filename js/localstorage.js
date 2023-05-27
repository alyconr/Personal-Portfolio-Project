function saveLocalStorage() {
  const form = document.querySelector('.form');

  // Add event listener for form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an object to store the input data
    const inputData = {
      name: name,
      email: email,
      message: message,
    };

    // Save the input data in local storage
    localStorage.setItem('formData', JSON.stringify(inputData));

    // Submit the form to the server
    form.submit();
  });
}

export default saveLocalStorage;
