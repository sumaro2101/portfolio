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
$(document).ready(function() {
        $('#form').validate({
            rules: {
            name: {
                required: true,
                minlength: 2 
            },
            email: {
                required: true,
                email: true
            },
            checkbox: {
                required: true
            }
            },
            messages: {
            name: {
                required: "Заполните эту строчку!",
                minlength: "Введите миниум {0} символа!"
            },
            email: {
                required : "Введите электронный адресс!",
                email: "Введите электронный адресс имеющий символ '@'"
            },
            checkbox: {
                required: "Отметьте галочкой!"
            }
        }
    });  
});