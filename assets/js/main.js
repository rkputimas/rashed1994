$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
		autoplay: true,
        dotsSpeed: 3000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4,
                loop: false
            }
        }
    });
    jQuery('.menu').meanmenu({
        meanScreenWidth: 768
    });
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $('.menu').addClass("sticky", 2000);
            $('.scrollup').show();
        } else {
            $('.menu').removeClass("sticky", 2000);
            $('.scrollup').hide();
        }
    });

       // Scroll to Top
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 100){  
                $('.header').addClass("sticky" ,2000);
                $('.scrollup').show();
            }
            else{
                $('.header').removeClass("sticky" ,2000);
                $('.scrollup').hide();
            }
        });

         // Click event to scroll to top
        $('.scrollup').on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });


         $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({
            'overflow': 'visible'
        });
});