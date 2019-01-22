$(document).ready(function(){

  $("#topButton").hide();
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 100){
      $("#topButton").fadeIn(500);
      // $("#header").removeClass("shadow");
    }
    else{
      $("#topButton").fadeOut(500);
      $("#header").addClass("shadow");
    }
  });




})
