// $('.new_slider_mob_for').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: true,
//     centerMode: true,
//     variableWidth: true,
//     speed: 500,
//     arrows: false,
//     dots: true,
//     fade: false,
//     asNavFor: '.new_slider_mob_nav'
// });

// $('.new_slider_mob_nav').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     asNavFor: '.new_slider_mob_for',
//     fade: true,
//     infinite: true,
//     arrows: false,
//     dots: false,
//     focusOnSelect: true
// });

$('.new_slider_tablet_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.new_slider_tablet_nav'
});

$('.new_slider_tablet_nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.new_slider_tablet_for',
    fade: true,
    infinite: true,
    arrows: false,
    dots: true,
    focusOnSelect: true
});

$('.new_slider_desk_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    speed: 750,
    autoplay: true,
    swipe: false,
    autoplaySpeed: 1500,
    fade: true,
    dots: false,
    asNavFor: '.new_slider_desk_nav_slider'
});

$('.new_slider_desk_nav_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.new_slider_desk_for',
    fade: true,
    speed: 750,
    autoplay: true,
    swipe: false,
    autoplaySpeed: 1500,
    infinite: true,
    arrows: false,
    dots: true,
    focusOnSelect: true
});

var check = 0;


$('.new_slider_desk_for').slick('slickPause');

$('.new_slider_desk_nav_slider').slick('slickPause');

const inViewport = (elem) => {
    let allElements = document.getElementsByClassName(elem);
    let windowHeight = window.innerHeight;
    const elems = () => {
        for (let i = 0; i < allElements.length; i++) {  //  loop through the sections
            let viewportOffset = allElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
            let top = viewportOffset.top + 100;  //  get the offset top
            if(top < windowHeight){  //  if the top offset is less than the window height
                allElements[i].classList.add('animation');  //  add the class
                $('.new_slider_desk_for').slick('slickPlay');
                $('.new_slider_desk_nav_slider').slick('slickPlay');
                if(check == 0) {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(".new_slider_desk_title").offset().top - 300
                    }, 1000);
                }
                check = 1;
            } else{
                allElements[i].classList.remove('in-viewport');  //  remove the class
            }
        }
    }
    elems();
    window.addEventListener('scroll', elems);
}

if ($(window).width() > 1199) {
    inViewport("anime");
}

