const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__cancel');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.use__stat-procent'),
      lines = document.querySelectorAll('.use__stat-scale .use__stat-scale_info');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});