document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    menu.classList.toggle('open');
  });
});

const input = document.getElementById('uv-address');
const searchContent = document.querySelector('.search-content');

input.addEventListener('focus', () => {
  searchContent.classList.add('focused');
});

input.addEventListener('blur', () => {
  searchContent.classList.remove('focused');
});


var closeBtn = document.querySelector('.popup-close');
  closeBtn.onclick = function() {
      document.getElementById("popup").style.display = 'none';
  };


function show() {
  document.querySelector('.hamburger').classList.toggle('open');
  document.querySelector('.navigation').classList.toggle('active');
}