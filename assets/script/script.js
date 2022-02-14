// Search Box Animation
const input = document.querySelector(".navbar__search-input");
let button = document.querySelector(".navbar__search-icon");

button.addEventListener("click", function() {
    if (input.style.border == "none") {
        input.style.width = "234px";  
        input.style.border = "1px solid var(--light-brown)";
        button.style.color = "var(--active)";
    } else {
        input.style.width = "0px";
        input.style.border = "none";
        button.style.color = "var(--black)";
    }
});

// Sticky Navigarion Bar
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".header__navbar");
    navbar.classList.toggle("header__navbar--fixed", window.scrollY > 0);
});

// Active Menu
const menuItem = document.querySelectorAll(".navbar__menu-item");
const section = document.querySelectorAll(".section");

window.addEventListener("scroll", function() {
    let len = section.length;
    while (--len && window.scrollY + 88 < section[len].offsetTop) {}
    menuItem.forEach(ltx => ltx.classList.remove("navbar__menu-item--active"));
    menuItem[len].classList.add("navbar__menu-item--active");
});

// Pop-up Video
function toggleVideo() {
    let video = document.querySelector(".header__video");
    let mp4 = document.querySelector(".header__video-mp4");
    video.classList.toggle("header__video--play");
    mp4.pause(); 
    mp4.currentTime = 0;
}

// Basic Filter Place
const allFilter = document.querySelector(".destination__filter-item--all");
const northFilter = document.querySelector(".destination__filter-item--north");
const centralFilter = document.querySelector(".destination__filter-item--central");
const southFilter = document.querySelector(".destination__filter-item--south");

const destination = document.querySelectorAll(".destination__gallery-item");
const northDestination = document.querySelectorAll(".destination__gallery-item--north");
const centralDestination = document.querySelectorAll(".destination__gallery-item--central");
const southDestination = document.querySelectorAll(".destination__gallery-item--south");

const midside = document.getElementById("midside");

allFilter.addEventListener("click", function() {
    allFilter.classList.add("destination__filter-item--selected");

    northFilter.classList.remove("destination__filter-item--selected");
    centralFilter.classList.remove("destination__filter-item--selected");
    southFilter.classList.remove("destination__filter-item--selected");

    for (i = 0; i < destination.length; i++) if (destination[i].classList.contains("hide")) destination[i].classList.remove("hide");
    
    midside.classList.remove("l-offset-1");
});

northFilter.addEventListener("click", function() {
    northFilter.classList.add("destination__filter-item--selected");

    allFilter.classList.remove("destination__filter-item--selected");
    centralFilter.classList.remove("destination__filter-item--selected");
    southFilter.classList.remove("destination__filter-item--selected");

    for (i = 0; i < destination.length; i++) if (destination[i].classList.contains("hide")) destination[i].classList.remove("hide");
    for (m = 0; m < centralDestination.length; m++) centralDestination[m].classList.add("hide");
    for (n = 0; n < southDestination.length; n++) southDestination[n].classList.add("hide");
    
    midside.classList.remove("l-offset-1");
});

centralFilter.addEventListener("click", function() {
    centralFilter.classList.add("destination__filter-item--selected");

    allFilter.classList.remove("destination__filter-item--selected");
    northFilter.classList.remove("destination__filter-item--selected");
    southFilter.classList.remove("destination__filter-item--selected");

    for (i = 0; i < destination.length; i++) if (destination[i].classList.contains("hide")) destination[i].classList.remove("hide");
    for (m = 0; m < northDestination.length; m++) northDestination[m].classList.add("hide");
    for (n = 0; n < southDestination.length; n++) southDestination[n].classList.add("hide");

    midside.classList.add("l-offset-1");
});

southFilter.addEventListener("click", function() {
    southFilter.classList.add("destination__filter-item--selected");

    allFilter.classList.remove("destination__filter-item--selected");
    northFilter.classList.remove("destination__filter-item--selected");
    centralFilter.classList.remove("destination__filter-item--selected");

    for (i = 0; i < destination.length; i++) if (destination[i].classList.contains("hide")) destination[i].classList.remove("hide");
    for (m = 0; m < northDestination.length; m++) northDestination[m].classList.add("hide");
    for (n = 0; n < centralDestination.length; n++) centralDestination[n].classList.add("hide");

    midside.classList.remove("l-offset-1");
});

// Pages-in-page
function toggleHaNoi() {
    let hanoi = document.querySelector(".sub-main__hanoi");
    let hanoiPage = document.querySelector(".sub-main__hanoi .sub-main__box");
    hanoi.classList.toggle("sub-main--appeared");
}

function toggleHaLong() {
    let halong = document.querySelector(".sub-main__halong");
    let halongPage = document.querySelector(".sub-main__halong .sub-main__box");
    halong.classList.toggle("sub-main--appeared");
}

function toggleSaiGon() {
    let saigon = document.querySelector(".sub-main__saigon");
    let saigonPage = document.querySelector(".sub-main__saigon .sub-main__box");
    saigon.classList.toggle("sub-main--appeared");
}

function toggleHoiAn() {
    let hoian = document.querySelector(".sub-main__hoian");
    let hoianPage = document.querySelector(".sub-main__hoian .sub-main__box");
    hoian.classList.toggle("sub-main--appeared");
}

function toggleDaNang() {
    let danang = document.querySelector(".sub-main__danang");
    let danangPage = document.querySelector(".sub-main__danang .sub-main__box");
    danang.classList.toggle("sub-main--appeared");
}

function toggleHue() {
    let hue = document.querySelector(".sub-main__hue");
    let huePage = document.querySelector(".sub-main__hue .sub-main__box");
    hue.classList.toggle("sub-main--appeared");
}

// Reviews Slider
function initParadoxWay() {
    "use strict";
    if ($(".blog__testimonials-carousel").length > 0) {
        let j2 = new Swiper(".blog__testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.blog__testimonials-button--next',
                prevEl: '.blog__testimonials-button--prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    // setInterval(function () {
    //     let size = randomValue(sArray);
    //     $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
    //     $('.individual-bubble').animate({
    //         'bottom': '100%',
    //         'opacity': '-=0.8'
    //     }, 4000, function () {
    //         $(this).remove()
    //     });
    // }, 350);
}

$(document).ready(function () {
    initParadoxWay();
});

// Notifications
function toast({title = '', message = '', type = '', duration = 5000}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = function(event) {
            if (event.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: 'fas fa-check-circle',
            warning: 'fas fa-exclamation-circle'
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.6s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessShareToast() {
    toast({
        title: 'Success',
        message: 'You have successfully submitted a review.',
        type: 'success',
        duration: 5000
    });
}

function showSuccessContactToast() {
    toast({
        title: 'Success',
        message: 'You have successfully registered, please wait for our email.',
        type: 'success',
        duration: 5000
    });
}

function showWarningToast() {
    toast({
        title: 'Warning',
        message: 'You have not entered enough information, please enter the missing part.',
        type: 'warning',
        duration: 5000
    });
}

// Reviews
const shareForm = document.querySelector(".contact__share");

function showShareToast(username, place, reviews) {
    if (username && place && reviews) {
        showSuccessShareToast();
        // localStorage.removeItem("Username");
        // localStorage.removeItem("Place");
        // localStorage.removeItem("Reviews");

        // let swiper = document.querySelector(".swiper-wrapper");
        // if (swiper) {
        //     const tag = document.createElement('div');
        //     tag.classList.add('swiper-slide');
        //     tag.innerHTML = `
        //         <div class="testi-item">
        //             <div class="testi-avatar"><img src="./assets/images/dog.png"></div>
        //             <div class="testimonials-text-before"><i class="fa fa-quote-right"></i></div>
        //             <div class="testimonials-text">
        //                 <p>${reviews}.</p>
        //                 <a href="#" class="text-link"></a>
        //                 <div class="testimonials-avatar">
        //                     <h3>${username}</h3>
        //                     <h4>${place}</h4>
        //                 </div>
        //             </div>
        //             <div class="testimonials-text-after"><i class="fa fa-quote-left"></i></div> 
        //         </div>
        //     `;
        //     swiper.appendChild(tag);
        // }
    }
    else showWarningToast();
}

shareForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const shareUsername = document.querySelector(".contact__share-username").value;
    const sharePlace = document.querySelector(".contact__share-place").value;
    const shareReviews = document.querySelector(".contact__share-reviews").value;

    localStorage.setItem("Username", shareUsername);
    localStorage.setItem("Place", sharePlace);
    localStorage.setItem("Reviews", shareReviews);

    showShareToast(shareUsername, sharePlace, shareReviews);
});

// Contacts
const contactForm = document.querySelector(".contact__subscribe");

function showContactToast(email) {
    if (email) {
        showSuccessContactToast();
        // localStorage.removeItem("E-mail");
    }
    else showWarningToast();
}

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const contactEmail = document.querySelector(".contact__subscribe-input").value;

    localStorage.setItem("E-mail", contactEmail);
    
    showContactToast(contactEmail);
});