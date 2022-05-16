$(document).ready(function (){
// Welcome 
let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow >= 18){greeting = 'Добрый вечер!';}
    else if (hourNow >= 12){greeting = 'Добрый день!';}
        else if (hourNow >= 0){greeting = 'Доброе утро!';}
            else {greeting = 'Приветствую!';}
 
let welcome = document.querySelector('.greeting');
    welcome.insertAdjacentHTML('beforebegin', greeting);               

let year = new Date().getFullYear();
let currentYear = document.querySelector('.current-year');
    currentYear.insertAdjacentHTML('beforebegin', year + 1);
// hamburger
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

// popover
$(function () {
    $('[data-toggle="popover"]').popover();
});	

// slow scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {

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

// scroll to up page
const arrowTop = document.getElementById('arrowTop');
function openModalByScroll(selector) {
  window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight;
    if (scroll) {
      selector.style.display = 'block';
    } else {
      selector.style.display = 'none';
    }
  });
}

openModalByScroll(arrowTop);


// arrowTop.onclick = function() {
//     window.scrollTo(pageXOffset, 0);
//     // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
//   };
//   window.addEventListener('scroll', function() {
//     arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
//   });


const timer = (id, deadline) => {
    const addZero = (number) => {
    if (number <= 9) {
        return '0' + number;
    } else {
        return number;
    }
  };

    const getTimeRemaining = (endtime) => {
    const time = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor((time / (1000 * 60 * 60 * 24)));

    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
    };

    const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);
    
    updateClock();

    function updateClock() {
        const timer = getTimeRemaining(endtime);

        days.textContent = addZero(timer.days);
        hours.textContent = addZero(timer.hours);
        minutes.textContent = addZero(timer.minutes);
        seconds.textContent = addZero(timer.seconds);

        if (timer.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        clearInterval(timeInterval);
        } 

    };
    }

    setClock(id, deadline);

};

let deadline = '2022-12-31';
timer('.container1', deadline);

});