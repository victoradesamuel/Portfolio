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
