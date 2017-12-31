// Scrolling
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict


// Bounce Animation
 $(".animBounce").click(function() {
 	$(this).toggleClass("hexa bounce");
 });
 $(".animBounceOut").click(function() {
 	$(this).toggleClass("hexa bounceOut");
 });
 $(".animBounceRight").click(function() {
 	$(this).toggleClass("hexa bounceRight");
 });
 $(".animBounceLeft").click(function() {
 	$(this).toggleClass("hexa bounceLeft");
 });

 $(".animBounceRightOut").click(function() {
 	$(this).toggleClass("hexa bounceRightOut");
 });
 $(".animBounceLeftOut").click(function() {
 	$(this).toggleClass("hexa bounceLeftOut ");
 });

  // Fade Animation
  $(".animFade").click(function() {
  	$(this).toggleClass("hexa fade ");
  });
  $(".animFadeOut").click(function() {
  	$(this).toggleClass("hexa fadeOut ");
  });
  $(".animFadeRightOut").click(function() {
  	$(this).toggleClass("hexa fadeRightOut ");
  });
  $(".animFadeLeftOut").click(function() {
  	$(this).toggleClass("hexa fadeLeftOut ");
  });
  $(".animFadeDown").click(function() {
  	$(this).toggleClass("hexa fadeDown ");
  });
  $(".animFadeDownOut").click(function() {
  	$(this).toggleClass("hexa fadeDownOut ");
  });
  $(".animFadeUp").click(function() {
  	$(this).toggleClass("hexa fadeUp ");
  });
  $(".animFadeUpOut").click(function() {
  	$(this).toggleClass("hexa fadeUpOut ");
  });

  // Flash Animation 

$(".animFlash").click(function() {
    $(this).toggleClass("hexa flash ");
  });

// Groove Animation 

$(".animGroove").click(function() {
    $(this).toggleClass("hexa groove ");
  });

// Jump Animation 

$(".animJumpRight").click(function() {
    $(this).toggleClass("hexa jumpRight ");
  });
$(".animJump").click(function() {
    $(this).toggleClass("hexa jump ");
  });
$(".animJumpLeft").click(function() {
    $(this).toggleClass("hexa jumpLeft ");
  });

// Jump Animation 

$(".animRotate").click(function() {
    $(this).toggleClass("hexa rotate x3 ");
  });
$(".animRotateOut").click(function() {
    $(this).toggleClass("hexa rotateOut ");
  });

// Shapes Animation 

$(".animShapeCarre").click(function() {
    $(this).toggleClass("hexa shapeCarre ");
  });
$(".animShapeStar").click(function() {
    $(this).toggleClass("hexa shapeStar ");
  });

// Spin Animation 
$(".animSpin").click(function() {
    $(this).toggleClass("hexa spin ");
  });

// Tada Animation
$(".animTada").click(function() {
    $(this).toggleClass("hexa tada ");
  });

// Turbine Animation
  $(".animTurbine").click(function() {
    $(this).toggleClass("hexa turbine ");
  });
  $(".animTurbineOutUp").click(function() {
    $(this).toggleClass("hexa turbineOutUp ");
  });
  $(".animTrubineOutLeft").click(function() {
    $(this).toggleClass("hexa turbineOutLeft ");
  });
  $(".animTrubineOutRight").click(function() {
    $(this).toggleClass("hexa turbineOutRight ");
  });
  $(".animTurbineOutDown").click(function() {
    $(this).toggleClass("hexa turbineOutDown ");
  });
  $(".animTurbineUp").click(function() {
    $(this).toggleClass("hexa turbineUp ");
  });
  $(".animTurbineTrouble").click(function() {
    $(this).toggleClass("hexa turbineTrouble ");
  });
