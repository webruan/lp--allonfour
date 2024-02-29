document.addEventListener("DOMContentLoaded", function() {
    $(function() {
        // Owl Carousel
        var owl = $(".owl-carousel");
        owl.owlCarousel({
        items: 5,
        margin: 30,
        loop: true,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
        });
    });
});