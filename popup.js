const popup = [
	{
		name: 'Tonic',
		author: 'CANOPY',
		stack: 'Backend Dev',
		year: 2015,
		description:
			'A daily selection of privately personalized reads; no accounts or sign-ups required.',
		featuredImage: './assets/images/Snapshoot-Portfolio-3.png',
		tools: ['html', 'css', 'javascript'],
		live: 'github.com/victoradesamuel',
		source: 'github.com/victoradesamuel',
	},
	{
		name: 'Multi-Post Stories',
		author: 'FACEBOOK',
		stack: 'Full Stack Dev',
		year: 2015,
		description:
			'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
		featuredImage: './assets/images/Snapshoot-Portfolio-4.png',
		tools: ['html', 'css', 'javascript'],
		live: 'github.com/victoradesamuel',
		source: 'github.com/victoradesamuel',
	},
	{
		name: 'Tonic',
		author: 'FACEBOOK 360',
		stack: 'Full Stack Dev',
		year: 2015,
		description:
			"Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
		featuredImage: './assets/images/Snapshoot-Portfolio.png',
		tools: ['html', 'css', 'javascript'],
		live: 'github.com/victoradesamuel',
		source: 'github.com/victoradesamuel',
	},
	{
		name: 'Uber Navigation',
		author: 'Uber',
		stack: 'Lead Developer',
		year: 2015,
		description:
			"Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
		featuredImage: './assets/images/Snapshoot-Portfolio-2.png',
		tools: ['html', 'css', 'javascript'],
		live: 'github.com/victoradesamuel',
		source: 'github.com/victoradesamuel',
	},
]

document.querySelector('.works').innerHTML = popup
	.map(
		currentProject => `
    <section class="project">
<div class="project-img">
<img
src= ${currentProject.featuredImage}
class="snapshoot"
alt="Tonic project image"
/>
</div>
<div class="project-description">
<h2 class="project-title">${currentProject.name}</h2>
<ul class="project-author">
<li>${currentProject.author}</li>
<li>${currentProject.stack}</li>
<li>${currentProject.year}</li>
</ul>
<p class="project-text"
>${currentProject.description}</p
>
<ul class="project-tools">
<li>${currentProject.tools[0]}</li>
<li>${currentProject.tools[1]}</li>
<li>${currentProject.tools[2]}</li>
</ul>
<button type="button" class="btn">See Project</button>
</div>
</section>
    `,
	)
	.join('')

for (let i = 0; i <= popup.length; i += 1) {
  if (i % 2 === 1) {
    document.querySelectorAll('.project')[i].classList.add('order');
  }
}

document.querySelector('.modals').innerHTML = popup
  .map(
    (currentProject) => `
<div class="modal">
<div class="modal-container"> 
  <div class="modal-title">
<h2 class="project-title">${currentProject.name}</h2>
    <div class="close">
  <i class="fa fa-times fa-1x"></i>
    </div>
</div>
  <ul class="project-author">
    <li>${currentProject.author}</li>
    <li>${currentProject.stack}</li>
    <li>${currentProject.year}</li>
  </ul>
  <div class="project-img">
    <img
      src= ${currentProject.featuredImage}
      class="snapshoot"
      alt="Tonic project image"
    />
  </div>
  <div class="modal-description">
    <p class="project-text"
<<<<<<< HEAD
      >${currentProject.description}</p
    >
    <div class="modal-tools">
      <ul class="project-tools">
        <li>${currentProject.tools[0]}</li>
        <li>${currentProject.tools[1]}</li>
        <li>${currentProject.tools[2]}</li>
      </ul>
      <span></span>
      <div class="buttons">
        <a href="${currentProject.live}" class="modal-button" target="_blank" rel="noopener noreferrer">See Live <img
src="./assets/images/Icon.png"
alt="live site icon" class="modal-img"
/></a>
        <a href="${currentProject.source}" class="modal-button" target="_blank" rel="noopener noreferrer">See Source <img
=======
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
>>>>>>> 128294d1f16e2273ec9f18ae6d206971f6cc8f1c
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

<<<<<<< HEAD
// event listeners for opening modal on button click
const modalButtons = Array.from(document.querySelectorAll('.btn'));
const modals = Array.from(document.querySelectorAll('.modal'));

const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]]);

modalButtonZip.forEach((pair) => {
  pair[0].addEventListener('click', () => {
    pair[1].style.display = 'block';
  });
});

// event listener for closing modal on button click
document.querySelectorAll('.close').forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach((modal) => {
      modal.style.display = 'none';
    });
  });
});
=======
const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelectorAll('[data-close-button]');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
}

openModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});
>>>>>>> 128294d1f16e2273ec9f18ae6d206971f6cc8f1c
