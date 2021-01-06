$(document).ready(function (){

    let today = new Date();
    let hourNow = today.getHours();
    let greeting;
    
    if (hourNow >= 18){greeting = 'Добрый вечер!';}
        else if (hourNow >= 12){greeting = 'Добрый день!';}
            else if (hourNow >= 0){greeting = 'Доброе утро!';}
                else {greeting = 'Приветствуем!';}
    
    $(".greeting").text(greeting);            


let hamburger = document.querySelector('.hamburger'),		
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click' , function () {
menu.classList.add('active');
});

closeElem.addEventListener('click' , function () {
menu.classList.remove('active');
});

let counters = document.querySelectorAll('.skills__ratings-counter'),
lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( function (item , i) {
lines[i].style.width = item.innerHTML;
});	

$('input[name=phone]').mask("+7 (999) 999-99-99");

// validateForms
   
function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
}

validateForms('#contacts-form');


// Smooth scroll and pageup

$(function () {
    $('[data-toggle="popover"]').popover();
});	

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

let href = this.getAttribute('href').substring(1);

const scrollTarget = document.getElementById(href);

const topOffset = document.querySelector('.scrollto').offsetHeight;
// const topOffset = 0; // если не нужен отступ сверху 
const elementPosition = scrollTarget.getBoundingClientRect().top;
const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

/* new WOW().init(); */

$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		/* $('#consultation, #order').fadeOut();
		$('.overlay, #thanks').fadeIn('slow'); */

		$('form').trigger('reset');
	});
	return false;
});


});