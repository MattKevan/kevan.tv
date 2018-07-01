$(document).ready(function() {

  // Page backgrounds
  var $gradients = ['cy','cm','mc','my','yc','ym'];
  var $gradient = $gradients[Math.floor(Math.random() * $gradients.length)];
  $(".wrapper-1 ").addClass($gradient);

  var $patterns = ['p1','p2','p3','p4','p5','p6','p7','p8'];
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

var mixer = mixitup(containerEl);
  $('.item').matchHeight();


});
