$(document).ready(function() {

  $("#topButton").hide();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("#topButton").fadeIn(500);
      $("#header").css("box-shadow", "0 0 20px rgba(0,0,0,0.4)");
    } else {
      $("#topButton").fadeOut(500);
      $("#header").css("box-shadow", "");
    }
  });

});
