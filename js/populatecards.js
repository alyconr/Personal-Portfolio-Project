import cardInfo from "./data.js";
import { template, revTemplate } from "./templates.js";

export default function generateCards() {
  const cardContainer = document.querySelector("#works");
  cardInfo.forEach((data, i) => {
    const cardFront = template(data, i);
    const cardReverse = revTemplate(data, i);
    
   if(data.reverse === true){
    cardContainer.innerHTML += cardReverse;
    }else{
        cardContainer.innerHTML += cardFront;
        }


  });
}


