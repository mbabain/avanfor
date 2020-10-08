$(document).ready(function(){
    $('#categories-slider').slick({
        slidesToShow: 6,
        speed: 200,
        infinite: true,
        variableWidth: true
    });
    $('#blog-slider').slick({
        slidesToShow: 3,
        speed: 200,
        infinite: true,
        variableWidth: true
    });
    $('#our-works-slider').slick({
        slidesToShow: 4,
        speed: 200,
        infinite: true,
        variableWidth: true
    });
});