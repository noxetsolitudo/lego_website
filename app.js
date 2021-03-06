const exit = document.querySelector('.exit');
const hamMenu = document.querySelector('.ham-icon')
const headerMainLeft = document.querySelector('.header-main-left');

hamMenu.addEventListener('click', () => {
  console.log('clicked');
  headerMainLeft.classList.add('show');
});

exit.addEventListener('click', () => {
  headerMainLeft.classList.remove('show');
});
