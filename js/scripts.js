$(document).ready(function() {

// Owl Carousel
  $("#work-carousel").owlCarousel({
  	 items : 1,
  	 singleItem:true,
  	 autoPlay: false,
  	 pagination: true,
  	 navigation: true,
  });


var $grid = $('.grid').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: '.grid-width' 
  });
});

// Main menu
  $(".overlay-close").click(function(){
      $(".overlay").fadeOut( "fast");
  });
  $("#show").click(function(){
      $(".overlay").fadeIn("fast");
  });


});
