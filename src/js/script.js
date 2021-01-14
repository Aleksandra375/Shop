$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1500,
        slidesToShow: 1,
        adaptiveHeight: true,
        // prevArrow: '<button type="button" class="slick-prev"><img src="img/slider_left.png" alt=""></button>',
        // nextArrow: '<button type="button" class="slick-next"><img src="img/slider_right.png" alt=""></button>',
    });

    const menuButton = document.querySelector('#menuButton');
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('#mainMenu');
    menuButton.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('d-block');
    });

    
    $('.feed-form').validate({
        rules: {
            name: "required",
            message: "required",
            email: {
                required: true,
                email: true
              }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите Ваше имя!"
            },
            message: {
                required: "Пожалуйста, введите сообщение"
            },
            email: {
              required: "Пожалуйста, введите Ваш почтовый адрес!",
              email: "Неправильно введён адрес почты!"
            }
        }
    });
});