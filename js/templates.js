const template = (data, index) => `
<div class= 'card '>
    <img
            src='${data.imagePath}'
            alt='${data.title}'
            class='image-card'
          />
          <div class='card-content'>
            <h2 class='tonic ton'>${data.title}</h2>
            <ul class='dates'>
                ${data.dates
    .map((date) => `<li>${date}</li>`)
    .join(
      '<li><img src="./images/bullet.svg" alt="counter" /></li>',
    )} 
            </ul>
            <p class='paragraph'>
              ${data.description}
            </p>
            <ul class='stacks'>
              ${data.stacks
    .map((stack) => `<li class='stack-over'>${stack}</li>`)
    .join('')}
            </ul>
            <a href='#' data-id=${index}  class='btn btn-modal'>See Project</a>
          </div>
          </div>
    `;

const revTemplate = (data, index) => `
<div class=' card card-reverse  '>
    <img
            src='${data.imagePath}'
            alt='${data.title}'
            class='image-card'
          />
          <div class='card-content'>
            <h2 class='tonic ton'>${data.title}</h2>
            <ul class='dates'>
                ${data.dates
    .map((date) => `<li>${date}</li>`)
    .join(
      '<li><img src="./images/bullet.svg" alt="counter" /></li>',
    )}
            </ul>
            <p class='paragraph'>
              ${data.description}
            </p>
            <ul class='stacks'>
              ${data.stacks
    .map((stack) => `<li class='stack-over'>${stack}</li>`)
    .join('')}
            </ul>
            <a href='#' data-id=${index}  class='btn btn-modal'>See Project</a>
          </div>
          </div>
      `;
const modalWindow = (data) => `
<img class='modal-close' src='./images/cancel modal.svg' alt='cancel'/>
        <div class='modal-content'>
          <h2 class='tonic ton'>${data.title}</h2>
            <ul class='dates'>
            ${data.dates
    .map((date) => `<li>${date}</li>`)
    .join('<li><img src="./images/bullet.svg" alt="counter" /></li>')}
            </ul>
            <img
            src='${data.imagePath}'
            alt='${data.title}'
            class='image-card-modal'
          />
    <div class="content-final">
          <p class='paragraph'>
          ${data.description}
            </p>
      <div class="final-details">
          <ul class='stacks'>
          ${data.stacks
    .map((stack) => `<li class='stack-over'>${stack}</li>`)
    .join(' ')}
            </ul>
          <div class='button-stack'>
            <a href='${data.demoLive}' class='btn demo'>See Live
              <img src='./images/demo.svg' alt='demo'>
            </a>
            <a href='${data.sourceCode}' class='btn github'>See Source
              <img src='./images/githubpopup.svg' alt='github'>
             
            </a>
          </div>
        </div>
      </div>
    </div>
`;

export {
  template,
  revTemplate,
  modalWindow,
};