import cardInfo from './data.js';
import { modalWindow } from './templates.js';

export default function popUpWindow() {
  const cardContainer = document.querySelector('.modal-container');
  cardInfo.forEach((data, i) => {
    const popup = document.createElement('div');
    popup.classList.add('open-modal');
    popup.innerHTML = modalWindow(data, i);
    cardContainer.appendChild(popup);
  });

  const openModal = document.querySelectorAll('.open-modal');
  const buttonModal = document.querySelectorAll('.btn-modal');

  const overlay = document.querySelector('.overlay');

  buttonModal.forEach((button) => {
    button.addEventListener('click', (event) => {
      const modal = document.querySelector('.open-modal');
      event.preventDefault();
      modal.classList.toggle('active');
      overlay.classList.toggle('active');
    });
  });

  openModal.forEach((modal) => {
    modal.addEventListener('click', (event) => {
      event.preventDefault();
      modal.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
}
