$(document).ready(function() {

  // Page backgrounds
  var $gradients = ['cy','cm','mc','my','yc','ym'];
  var $gradient = $gradients[Math.floor(Math.random() * $gradients.length)];
  $(".wrapper-1 ").addClass($gradient);

  var $patterns = ['p1','p2','p3','p5','p7','p8'];
  var $pattern = $patterns[Math.floor(Math.random() * $patterns.length)];
  $(".wrapper-2 ").addClass($pattern);

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
