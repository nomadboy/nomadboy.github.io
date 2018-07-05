(function($) {
    'use strict';
    $(document).ready(function() {
    	//animation with wow js
    	new WOW().init();

        // responsive-menu-slide
        $('.responsive-menu i').click(function() {
            $('#main-menu').slideToggle();
        });

        $('.responsive-menu li a').click(function(){
        	$('#main-menu').slideToggle();
        })

        /* main-menu-click-event with scroll to div section*/
        $('#main-menu li a').on('click', function(e) {

            var scrollAnchor = $(this).attr('data-scroll'),
                scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

            $('body,html').animate({
                scrollTop: scrollPoint
            }, 500);
            return false;

        })

        $(window).scroll(function() {
            var windscroll = $(window).scrollTop();
            if (windscroll >= 100) {
                $('.header-top-menu').addClass('sticky');
                $('section').each(function(i) {
                    if ($(this).position().top <= windscroll) {
                        $('#main-menu li a.active').removeClass('active');
                        $('#main-menu li a').eq(i).addClass('active');
                    }
                });

            } else {

                $('.header-top-menu').removeClass('sticky');
                $('#main-menu li a.active').removeClass('active');
                $('#main-menu li a:first').addClass('active');
            }

        }).scroll();
        /* main-menu-click-event with scroll to div section end*/

        // home-slider
        $('.slider-activation').owlCarousel({
            nav: true,
            items: 1,
            loop: true,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });


        //portfolio section
        //isotope filter
        $('.isotope-items').isotope({
            itemSelector: '.single-item',
            filter: '*'
        });

        $('.isotope-nav-menu li').click(function() {
            var selector = $(this).attr('data-filter');

            $('.isotope-items').isotope({
                filter: selector
            });

            $('.isotope-nav-menu li.active').removeClass('active');
            $(this).addClass('active');

        });
        //end isotope

        //lightbox image gallery 
        lightbox.option({
            maxWidth: 700,
        })

        // testimonial-slider
        $('.testimonial-slider-activation').owlCarousel({
            nav: true,
            items: 2,
            loop: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
            }
        });


        //scrollTop button
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollTop').fadeIn();
            } else {
                $('.scrollTop').fadeOut();
            }
        });

        //activation scrollTop with animation

        $('.scrollTop').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });


        //end document-ready
    });

    $(window).load(function(){
    	$('.preloader-wrapper').fadeOut();
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
    })
})(jQuery);
