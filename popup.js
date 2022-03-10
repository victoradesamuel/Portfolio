const popup = [
    {
        projectName: `Tonic`,
        author: `CANOPY`,
        stack: `Back End Dev`,
        year: `2015`,
        description: `A daily selection of privately personalized reads; no accounts or sign-ups required`,
        projectImage: `./assets/images/SnapshootPortfolio.png`,
        tools: [`html •`, `css •`, `javascript`],
        live: null,
        source: null,
    },
    {
        projectName: `Multi-Post Stories`,
        author: `FACEBOOK`,
        stack: `Full Stack Dev`,
        year: `2015`,
        description: `Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends`,
        projectImage: `./assets/images/SnapshootPortfolio1.png`,
        tools: [`html •`, `css •`, `javascript`],
        live: null,
        source: null,  
    },
    {
        projectName: `Facebook 360`,
        author: `FACEBOOK`,
        stack: `Full Stack Dev`,
        year: `2015`,
        description: `Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.`,
        projectImage: `./assets/images/SnapshootPortfolio2.png`,
        tools: [`html •`, `css •`, `javascript`],
        live: null,
        source: null, 
    },
    {
        projectName: `Uber Navigation`,
        author: `UBER`,
        stack: `Lead Developer`,
        year: `2015`,
        description: `A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.`,
        projectImage: `./assets/images/SnapshootPortfolio3.png`,
        tools: [`html •`, `css •`, `javascript`],
        live: null,
        source: null, 
    },
];

document.querySelector('.modals').innerHTML = popup
  .map(
    (data) => `
<div class="modal" id="modal">
<div class="modal-container"> 
  <div class="modal-title">
<h2 class="project-title">${data.projectName}</h2>
    <button data-close-button class="close-button>&times;</button>
</div>
  <ul class="project-author">
    <li>${data.author}</li>
    <li>${data.stack}</li>
    <li>${data.year}</li>
  </ul>
  <div class="project-img">
    <img
      src= ${data.projectImage}
      class="snapshoot"
      alt="Tonic project image"
    />
  </div>
  <div class="modal-description">
    <p class="project-text"
      >${data.description}</p
    >
    <div class="modal-tools">
      <ul class="project-tools">
        <li>${data.tools[0]}</li>
        <li>${data.tools[1]}</li>
        <li>${data.tools[2]}</li>
      </ul>
      <span></span>
      <div class="buttons">
        <a href="${data.live}" class="modal-button" target="_blank" rel="noopener noreferrer">See Live <img
src="./assets/images/Icon.png"
alt="live site icon" class="modal-img"
/></a>
        <a href="${data.source}" class="modal-button" target="_blank" rel="noopener noreferrer">See Source <img
src="./assets/images/github.png"
alt="github icon" class="modal-img"
/></a>
      </div>
    </div>
  </div>
  </div>
  </div>`,
  )
  .join('');

const openModalBtn = document.querySelectorAll('[data-modal-target]')
const closeModalBtn = document.querySelectorAll('[data-close-button]')

openModalBtn.forEach(button=> {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalBtn.forEach(button=> {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
}

function openModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
}