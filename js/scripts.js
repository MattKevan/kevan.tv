$(document).ready(function() {

  $('.item').matchHeight();

  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin:10,
    autoHeight:true
  });


});