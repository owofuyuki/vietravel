// Search Box Animation
const input = document.querySelector(".navbar__search-input");
let button = document.querySelector(".navbar__search-icon");

button.addEventListener("click", function(){
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