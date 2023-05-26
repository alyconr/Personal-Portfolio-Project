import cardInfo from "./data.js";
import { modalWindow } from "./templates.js";

export default function popUpWindow() {
  const cardContainer = document.querySelector(".modal-container");
    cardInfo.forEach((data, i) => {
    const popup = document.createElement("div");
    popup.classList.add("open-modal");
    popup.innerHTML = modalWindow(data, i);
    cardContainer.appendChild(popup);
    
  });

    const openModal = document.querySelectorAll(".open-modal");
    const buttonModal = document.querySelectorAll(".btn-modal");
  
   


}
