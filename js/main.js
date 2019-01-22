$(document).ready(function(){

// 스크롤 영역
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


  //슬라이드 영역
  setInterval(function(){
    if($("#content .sliderimg").css("marginLeft")=="-3840px"){
      $("#content .sliderimg").animate({marginLeft:"0px"},2000)
    }
    else{
      $("#content .sliderimg").animate({marginLeft:"-=1920px"},2000);
    }
  },3000);


})
