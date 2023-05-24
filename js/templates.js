const template = (data, index) => `
<div class=" card   ">
    <img
            src="${data.imagePath}"
            alt="${data.title}"
            class="image-card"
          />
          <div class="card-content">
            <h2 class="tonic ton">${data.title}</h2>
            <ul class="dates">
                ${data.dates
                  .map(
                    (date) => `<li>${date}</li> 
                   `
                  )
                  .join("")}
            </ul>
            <p class="paragraph">
              ${data.description}
            </p>
            <ul class="stacks">
              ${data.stacks
                .map((stack) => `<li class="stack-over">${stack}</li>`)
                .join(" ")}
            </ul>
            <a href="#" content-id="${index}" class="btn">See Project</a>
          </div>
          </div>
   `;
const revTemplate = (data, index) => `
<div class=" card card-reverse  ">
    <img
            src="${data.imagePath}"
            alt="${data.title}"
            class="image-card"
          />
          <div class="card-content">
            <h2 class="tonic ton">${data.title}</h2>
            <ul class="dates">
                ${data.dates
                  .map(
                    (date) => `<li>${date}</li> 
                   `
                  )
                  .join("")}
            </ul>
            <p class="paragraph">
              ${data.description}
            </p>
            <ul class="stacks">
              ${data.stacks
                .map((stack) => `<li class="stack-over">${stack}</li>`)
                .join(" ")}
            </ul>
            <a href="#" content-id="${index}" class="btn">See Project</a>
          </div>
          </div>
   `;

export { template, revTemplate };
