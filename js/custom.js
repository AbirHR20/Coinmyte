$(document).ready(function(){
    //testimonial slider
    $('.test-slider').slick({
        vertical : true,
        slidesToShow : 3,
        slidesToScroll : 1,
        autoplay : true,
        touchMove : true,
        prevArrow : '<i class="fa-solid fa-circle-chevron-up text-white fs-37"></i>',
        nextArrow : '<i class="fa-solid fa-circle-chevron-down text-white fs-37"></i>',
      });
});