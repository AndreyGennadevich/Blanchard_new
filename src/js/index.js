import "normalize.css";
import "src/scss/index.scss";
import "choices.js/public/assets/styles/choices.min.css";
// import 'simplebar';
import  Choices from "choices.js"

console.log(111)

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-one').addEventListener('click', function() {
        document.querySelector('#btn-one').classList.toggle('sub__btn-active')
        document.querySelector('#testscroll').classList.toggle('sub__menu-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-two').addEventListener('click', function() {
        document.querySelector('#btn-two').classList.toggle('sub__btn-active')
        document.querySelector('#testscroll1').classList.toggle('sub__menu-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-three').addEventListener('click', function() {
        document.querySelector('#btn-three').classList.toggle('sub__btn-active')
        document.querySelector('#testscroll2').classList.toggle('sub__menu-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-four').addEventListener('click', function() {
        document.querySelector('#btn-four').classList.toggle('sub__btn-active')
        document.querySelector('#testscroll3').classList.toggle('sub__menu-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-five').addEventListener('click', function() {
        document.querySelector('#btn-five').classList.toggle('sub__btn-active')
        document.querySelector('#testscroll4').classList.toggle('sub__menu-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__search').addEventListener('click', function() {
        document.querySelector('.search__container').classList.add('search__container-is-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.search__btn-close').addEventListener('click', function() {
        document.querySelector('.search__container').classList.remove('search__container-is-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__burger').addEventListener('click', function() {
        console.log('#header__burger')
        document.querySelector('#header__nav').classList.toggle('nav-is-active')
    })

    document.querySelector('.header__nav-close').addEventListener('click', function() {
        console.log('.header__nav-close')
        document.querySelector('#header__nav').classList.toggle('nav-is-active')
    })
});

const element = document.querySelector('#selectCustom')
        const choices = new Choices(element, {
            placeholder: true,
            searchEnabled : false ,
            shouldSort: false,
            itemSelectText: '',
            renderSelectedChoices: 'always',
        });

const swiperParent = document.querySelector('.swiper-container');


window.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(swiperParent, {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        spaceBetween: 50,
        breakpoints: { 767: { slidesPerColumn: 2, slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 34},
                        1023: { slidesPerColumn: 2, slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 34},
                        1919: { slidesPerColumn: 2, slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 50},
                        },
        slidesPerColumnFill: 'row',
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeParents: true
    });
});

$( function() {
    $( "#accordion" ).accordion({
        icons: false,
        heightStyle: 'content',
        collapsible: true
    });
});

