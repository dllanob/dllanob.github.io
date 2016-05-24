/* jshint devel:true */

$(document).ready(function(){	
	$(function() {
	    // Get the form.
	    var form = $('#ajax-contact');

	    // Get the messages div.
	    var formMessages = $('#form-messages');

	    // TODO: The rest of the code will go here...
	});

	$("#arrowDown").click(function() {
          var offset = 20; //Offset of 20px

          $('html, body').animate({
              scrollTop: $("#info-container").offset().top + offset
          }, 700);
    });

    $('.button-collapse').sideNav({
            menuWidth: 280, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
          }
    );
 });

$(document).ready(function(){	
	var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
        }
      );
      wow.init();
 });

$(document).ready(function(){
  
    var waypoint = new Waypoint({
    element: document.getElementById('indicators-container'),
    handler: function(direction) {
      $('.counter').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 8000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
      waypoint.disable();
    },
    offset: '60%'
  })

	
 });

$(document).ready(function(){
	/* COVER VID INIT */
	$('.covervid-video').coverVid(1920, 1080);
 });	

$(document).ready(function(){ 
	/* WORDS ROTATOR INIT */
	$('#js-rotating').Morphext({
	    // The [in] animation type. Refer to Animate.css for a list of available animations.
	    animation: 'bounceIn',
	    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
	    separator: ',',
	    // The delay between the changing of each phrase in milliseconds.
	    speed: 2500,
	    complete: function () {
	        // Called after the entrance animation is executed.
	    }
    });

});

$(document).ready(function(){ 
	/* SLICK SLIDE INIT */
    $('.slide-container').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          arrows: false,
    });
});

$(document).ready(function(){ 
	/* VIDEO PRESENTATION MODAL INIT */
    $('.test-popup-link').magnificPopup({
          type: 'iframe'
    });
});