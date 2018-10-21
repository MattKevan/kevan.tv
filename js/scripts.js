$(document).ready(function() {

  // Main menu
  $(".overlay-close").click(function(){
      $(".overlay").fadeOut( "fast");
  });
  $("#show").click(function(){
      $(".overlay").fadeIn("fast");
  });

 var containerEl = document.querySelector('.grid');

  $('.item').matchHeight();

  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin:10,
    autoHeight:true
  });

});
