// Function to save input data to local storage

export default function preserveData() {
  function saveFormData() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Create an object to store the form data
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };

    // Convert the object to JSON string
    const formDataJSON = JSON.stringify(formData);

    // Save the JSON string to local storage
    localStorage.setItem('formData', formDataJSON);
  }

  // Function to load and pre-fill data from local storage
  function loadFormData() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Get the saved JSON string from local storage
    const formDataJSON = localStorage.getItem('formData');

    // Parse the JSON string into an object
    const formData = JSON.parse(formDataJSON);

    if (formData) {
      // Pre-fill the input fields with the saved values
      nameInput.value = formData.name || '';
      emailInput.value = formData.email || '';
      messageInput.value = formData.message || '';
    }
  }

  // Add event listeners to the input fields
  const nameInput = document.getElementById('name');
  nameInput.addEventListener('input', saveFormData);

  const emailInput = document.getElementById('email');
  emailInput.addEventListener('input', saveFormData);

  const messageInput = document.getElementById('message');
  messageInput.addEventListener('input', saveFormData);

  // Load the form data when the page is loaded
  window.addEventListener('load', loadFormData);
}
