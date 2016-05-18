$(document).ready(function() {

// Owl Carousel
  $("#work-carousel").owlCarousel({
  	 items : 1,
  	 singleItem:true,
  	 autoPlay: false,
  	 pagination: true,
  	 navigation: true,
  });

// Main menu
  $(".overlay-close").click(function(){
      $(".overlay").fadeOut( "fast");
  });
  $("#show").click(function(){
      $(".overlay").fadeIn("fast");
  });


});
