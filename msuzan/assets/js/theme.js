(function($) {
    'use strict';

    /*--
    	Mobile Menu
    ------------------------*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    });
 	$(".scroll-next a").on('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1250);
		event.preventDefault();
	});
	
	
    //Slider
    $(".slick-main").slick({
        autoplay: false,
        speed: 300,
        autoplayspeed: 3000,
        dots: true,
        arrows: false,
        fade: true,
        easing: 'linear',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 991, settings: { dots: false } },
            { breakpoint: 767, settings: { dots: false } },
            { breakpoint: 479, settings: { dots: false } },
        ]
    });
	
    //Single Portfolio
    $(".single-portfolio-slider").slick({
        autoplay: true,
        speed: 300,
        autoplayspeed: 3000,
        dots: false,
        arrows: true,
        fade: true,
        easing: 'linear',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });	
		if ($('.headrooma').length != 0) {
        // grab an element
        var myElement = document.querySelector(".headrooma");
        // construct an instance of Headroom, passing the element
        var headroom = new Headroom(myElement);
        // initialise
        headroom.init();
    }

	    /* ---------------------------------------------
		Humbergar Menu Js.
		--------------------------------------------- */
			$('.hamburger').on('click', function() {
				$(this).toggleClass('is-active');
				$(this).next().toggleClass('nav-show')
			});
    /*-----------------------------------------------------
	
	
	
	
	
    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();
    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });



    /*--
    	One Page Nav
    ----------------------------------- */
    var top_offset = $('.one_page').height() - 100;
    $('.one_page .msuzan_menu .nav_scroll').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 1000,
        scrollOffset: top_offset,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });
	



    /*---------------------
    counterUp
    --------------------- */
    $('.countr_text h1').counterUp({
        delay: 10,
        time: 1000
    });
	
    /* Portfolio Isotope  */

    $('.em_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.em_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });


            $('.filter_menu li').on('click', function() {

                $('.filter_menu li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });



    /*--------------------------
    	blog messonary
    ---------------------------- */
    $('.bgimgload').imagesLoaded(function() {
        if ($.fn.isotope) {
            var $blogmassonary = $('.blog-messonary');
            $blogmassonary.isotope({
                itemSelector: '.grid-item',
                filter: '*',
                resizesContainer: true,
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });

        };
    });

    /*--------------------
    	testimonial 
    -----------------------------------*/

    $('.testimonial_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })
	    $('.pricing-curousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
	

    $('.blog_carousel').owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
	
	
    $('.brand_carousel').owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })




    $('.single_gallery').owlCarousel({
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    $('.portfolio_gallery_post').owlCarousel({
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
	
    $('.service_carousel').owlCarousel({
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })



    // Mouse Direction Hover Iffect
    $('.single_protfolio').directionalHover();

    $('.single_protfolio').directionalHover({

        // CSS class for the overlay
        overlay: "em_port_content",

        // Linear or swing
        easing: "swing",
        speed: 50
    });
	
	
	  /* Tooltip Js */
	 $('[data-toggle="tooltip"]').tooltip();
	 
	 
    /* Venobox custom Js */
    $('.venobox_custom').venobox({
        framewidth: '290px', // default: ''
        frameheight: '290px', // default: ''
        border: '2px', // default: '0'
        bgcolor: '#fff', // default: '#fff'
    });
	
	
    /*--------------------------
      Gallery Isotope
    ---------------------------- */
    $('.prot_image_load').imagesLoaded(function() {

        if ($.fn.isotope) {
            var $portfolio = $('.gallery_items');
            $portfolio.isotope({
                itemSelector: '.grid-item',
                filter: '*',
                resizesContainer: true,
                layoutMode: 'masonry',
            });
            $('.filter-menu li').on('click', function() {
                $('.filter-menu li').removeClass('current_menu_item');
                $(this).addClass('current_menu_item');
                var selector = $(this).attr('data-filter');
                $portfolio.isotope({
                    filter: selector,
                });
            });
        };

    });

	
	


})(jQuery);