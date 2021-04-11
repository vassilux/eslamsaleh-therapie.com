/*-----------------------------------------------------------------------------------

  Template Name: Psychocare || Multi Concept Psychological HTML Template.
  Template URI: #
  Description: Psychocare is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
  Author: HasTech
  Author URI: https://themeforest.net/user/hastech/portfolio
  Version: 1.0

-----------------------------------------------------------------------------------*/

/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. jQuery MeanMenu
  02. wow js active
  03. Sticky Header
  04. ScrollUp
  05. Magnific Popup
  06. Animate Text Style
  07. Gallery Activation
  08. Success Area
  09. Testimonial Animation
  10. Home Slider
  11. Datepicker
  12. ScrollReveal Js Init




/*--------------------------------
[ End table content ]
-----------------------------------*/


(function($) {
    'use strict';


/*-------------------------------------------
  01. jQuery MeanMenu
--------------------------------------------- */
    
  $('.mobile-menu nav').meanmenu({
      meanMenuContainer: '.mobile-menu-area',
      meanScreenWidth: "991",
      meanRevealPosition: "right",
  });

/*-------------------------------------------
  02. wow js active
--------------------------------------------- */
    new WOW().init();



/*-------------------------------------------
  03. Sticky Header
--------------------------------------------- */ 
  $(window).on('scroll',function() {    
     var scroll = $(window).scrollTop();
     if (scroll < 245) {
      $('#sticky-header-with-topbar').removeClass("scroll-header");
     }else{
      $('#sticky-header-with-topbar').addClass("scroll-header");
     }
    });



/*--------------------------
  04. ScrollUp
---------------------------- */
$.scrollUp({
    scrollText: '<span class="ti-angle-up"></span>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});


/*--------------------------------
  05. Magnific Popup
----------------------------------*/

     $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
     
  $('.image-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 100,
        gallery:{
            enabled:true, 
        }
    });


/*--------------------------------
  06. Animate Text Style
----------------------------------*/


  $('.animate_text_style').textillate({
    loop: true,
  });



/*-----------------------------------------------
  07. Gallery Activation
-------------------------------------------------*/


  $(".activation__time--1").owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      autoplay: false,
      navText: [ '<i class="ti-angle-left"></i>', '<span class="ti-angle-right"></span>' ],
      autoplayTimeout: 10000,
      items:3,
      dots: false,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        800:{
          items:3
        },
        1920:{
          items:3
        }
      }
    });


/*-----------------------------------------------
  08. Success Area
-------------------------------------------------*/


  $(".htc__success__activation").owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      autoplay: false,
      autoplayTimeout: 10000,
      items:3,
      dots: true,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        },
        1920:{
          items:1
        }
      }
    });


/*-----------------------------------------------
  09. Testimonial Animation
-------------------------------------------------*/

  if ($('.testimonial__activation--1').length) {
    $('.testimonial__activation--1').owlCarousel({
      loop: true,
      margin:0,
      nav:false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 1000,
      autoplay: false,
      autoplayTimeout: 10000,
      items:1,
      dots: true,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
      }
    });
  }


  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });



/*-----------------------------------------------
  10. Home Slider
-------------------------------------------------*/

  if ($('.slider__activation__wrap').length) {
    $('.slider__activation__wrap').owlCarousel({
      loop: true,
      margin:0,
      nav:false,
      autoplay: false,
      autoplayTimeout: 10000,
      items:1,
      dots: false,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        },
        1920:{
          items:1
        }
      }
    });
  }



/*-----------------------------------------------
  11. Datepicker
-------------------------------------------------*/


  $( '#datepicker' ).datepicker();



/*-----------------------------------
  12. ScrollReveal Js Init
-------------------------------------- */

  window.sr = ScrollReveal({ duration: 800 , reset: false });
    sr.reveal('.foo');
    sr.reveal('.bar');




})(jQuery);


