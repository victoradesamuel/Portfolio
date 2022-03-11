const mobileMenuToggleClass = (element, toggleClass) => {
  element.classList.toggle(toggleClass);
};

function openNav() {
  document.getElementById('mobile-nav').style.width = '100%';
  mobileMenuToggleClass(document.querySelector('.mobile-nav-content'), 'mobile-toggle');
}
function closeNav() {
  document.getElementById('mobile-nav').style.display = 'none';
  mobileMenuToggleClass(document.querySelector('.mobile-toggle'), 'mobile-nav-content');
}

openNav();
closeNav();



const popup = [
  {
    id: 'project-1',
    name: 'Tonic',
    job: {
      author: 'Canopy',
      stack: 'Back End Dev',
      year: '2015',
    },
    description: {
      summary:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',

      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: './assets/images/Snapshoot-Portfolio.png',
      desktop:
        './assets/images/SnapshootPortfolio.png',
    },
    tools: {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
    },
    section: 'section-img-left',
  },
  {
    id: 'project-2',
    name: 'Multi Stories Post',
    job: {
      author: 'Facebook',
      stack: 'Fullstack',
      year: '2015',
    },
    description: {
      summary:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: './assets/images/Snapshoot-Portfolio-1.png',
      desktop: './assets/images/SnapshootPortfolio1.png',
    },
    tools: {
      html: 'html',
      ror: 'ruby on rails',
      css: 'css',
      javascript: 'javascript',
    },
    section: 'section-img-right',
  },
  {
    id: 'project-3',
    name: 'Facebook 360',
    job: {
      author: 'Facebook',
      stack: 'Full Stack',
      year: '2015',
    },
    description: {
      summary:
        'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: './assets/images/Snapshoot-Portfolio-2.png',
      desktop: './assets/images/SnapshootPortfolio2.png',
    },
    tools: {
      html: 'html',
      ror: 'ruby on rails',
      css: 'css',
      javascript: 'javascript',
    },
    section: 'section-img-left',
  },
  {
    id: 'project-4',
    name: 'Uber Navigation',
    job: {
      author: 'Uber',
      stack: 'Lead Developer',
      year: '2008',
    },
    description: {
      summary:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      portfolio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    },
    image: {
      mobile: './assets/images/Snapshoot-Portfolio-3.png',
      desktop: './assets/images/SnapshootPortfolio3.png',
    },
    tools: {
      html: 'html',
      ror: 'ruby on rails',
      css: 'css',
      javascript: 'javascript',
    },
    section: 'section-img-right',
  },
];


// pop up

const Portfolio = document.querySelector('work-samples');
const popupModal = document.querySelector('modals');

Portfolio.classList.add('projects');

Array.from(Portfolio.children).forEach((child, index) => {
  child.innerHTML = `
    <section class="${popup[index].section}">
      <ul>
        <li><img src="${popup[index].image.mobile}" alt="icon" class="img-1-1" /></li>
        <li><img src="${popup[index].image.desktop}" alt="icon" class="img-1-2" /></li>
      </ul>
      <div class="block-1">
        <div class="text-group">
          <h2 class="lg-text-2">${popup[index].name}</h2>
          <div class="client-info">
            <h3 class="client">${popup[index].job.author}</h3>
            <a href="#"><img src="assets/Icons/Counter.svg" alt="counter" /></a>
            <h3 class="role">${popup[index].job.stack}</h3>
            <a href="#"><img src="assets/Icons/Counter.svg" alt="counter" /></a>
            <h3 class="year-label">${popup[index].job.year}</h3>
          </div>
        </div>
        <h3 class="sm-text-2">${popup[index].description.summary}</h3>
        <ul class="tags">
          <li>${popup[index].tools.html}</li>
          <li>${popup[index].tools.css}</li>
          <li>${popup[index].tools.javascript}</li>
        </ul>
  
        <div class="actions" id="${popup[index].id}">
          <button class="btn" id="btn" type="button">See Project</button>
        </div>
      </div>
    </section>`;
});

Array.from(Portfolio.children).forEach((item, index) => {
  item.firstElementChild.lastElementChild.lastElementChild.firstElementChild.addEventListener(
    'click',
    () => {
      popupModal.innerHTML = `
      <!-- Modal content -->
      <section class="modal-content">
        <div class="popup-text-group">
          <div class="text-group">
            <h2 class="popup-text-lg">${popup[index].name}</h2>
            <div class="client-info">
              <h3 class="client">${popup[index].job.author}</h3>
              <a href="#"><img src="assets/Icons/Counter.svg" alt="counter" /></a>
              <h3 class="role">${popup[index].job.stack}</h3>
              <a href="#"><img src="assets/Icons/Counter.svg" alt="counter" /></a>
              <h3 class="year-label">${popup[index].job.year}</h3>
            </div>
          </div>
          <span class="close">&times;</span>
        </div>
        <ul>
          <li><img src="${popup[index].image.mobile}" alt="icon" class="img-1-1" /></li>
          <li><img src="${popup[index].image.desktop}" alt="icon" class="img-1-2 popup-img" /></li>
        </ul>
        <div class="popup-bottom">
          <p class="popup-text-sm">${popup[index].description.portfolio}</p>
          <div class="popup-block">
            <ul class="tags ${popup[index].id}">
            </ul>
            <div class="popup-actions">
              <button class="btn btnImg" id="btn" type="button">See Live
                <img src="assets/Icons/Icon@2x.svg" alt="icon" id="imgIcon" />
              </button>
              <button class="btn btnImg" id="btn" type="button">See Source
                <img src="assets/Icons/Icon-GitHub.svg" alt="icon" id="imgIcon" />
              </button>
            </div>
          </div>
        </div>
      </section>
      `;

      const ulList = document.querySelector('.popup-block .tags');

      Object.keys(popup[index].tools).forEach((e) => {
        ulList.innerHTML += `<li>${popup[index].tools[e]}</li>`;
      });

      popupModal.style.display = 'block';
      const span = document.getElementsByClassName('close')[0];
      span.addEventListener('click', () => {
        popupModal.style.display = 'none';
      });
      window.addEventListener('click', (e) => {
        if (e.target === popupModal) {
          popupModal.style.display = 'none';
        }
      });
    },
  );
});

const Form = document.querySelector('.form-valid');
const emailInput = document.querySelector('.email');
const validation = document.querySelector('.message-validation');

Form.addEventListener('submit', (event) => {
  const stringMessage = emailInput.value;
  if (/[A-Z]/.test(stringMessage)) {
    validation.innerHTML = 'Error! Your submission was unsuccessful, please input email in lowercase.';
    event.preventDefault();
  }
});

const Forms = document.querySelector('.form');

Forms.addEventListener('input', () => {
  const data = {
    name: document.querySelector('#name').value,
    email: document.querySelector('.email').value,
    message: document.querySelector('#message').value,
  };

  localStorage.setItem('FormData', JSON.stringify(data));
});

const formObject = JSON.parse(localStorage.getItem('FormData'));
document.querySelector('#name').value = formObject.name;
document.querySelector('.email').value = formObject.email;
document.querySelector('#message').value = formObject.message;