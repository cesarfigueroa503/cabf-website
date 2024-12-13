document.addEventListener('astro:before-preparation', () => {
  document.querySelector('.main-content').classList.remove('page-enter');
  document.querySelector('.main-content').classList.add('page-exit');
});

document.addEventListener('astro:after-preparation', () => {
  document.querySelector('.main-content').classList.remove('page-exit');
  document.querySelector('.main-content').classList.add('page-enter');
});