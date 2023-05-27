import mobileMenu from './menu.js';
import generateCards from './populatecards.js';
import popUpWindow from './popupwindow.js';
import validateForm from './contact-form-validation.js';
import preserveData from './preserve-data.js';
// Event listener for form submission
document.querySelector('.form').addEventListener('submit', validateForm);
mobileMenu();
generateCards();
popUpWindow();
preserveData();





