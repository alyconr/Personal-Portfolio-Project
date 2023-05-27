function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting

  const emailInput = document.getElementById('email');
  const lowercaseEmail = emailInput.value.toLowerCase(); // Convert email to lowercase

  // Check if the email is empty or not in lowercase or isnt the same as the original email
  if (!lowercaseEmail || lowercaseEmail !== emailInput.value) {
    const emailError = document.getElementById('emailError');
    if (!lowercaseEmail) {
      emailError.textContent = 'Please enter an email address.';
    } else {
      emailError.textContent = 'Please enter the email address in lowercase.';
    }
    emailError.style.display = 'block'; // Show the error message
    return; // Stop the form submission
  }

  emailInput.value = lowercaseEmail; // Update the input field with the lowercase value

  // Submit the form
  event.target.submit();
}

export default validateForm;
