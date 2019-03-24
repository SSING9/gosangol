$(document).ready(function() {

  // 스크롤 영역
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


  //슬라이드 영역
  setInterval(function() {
    if ($("#content .sliderimg").css("marginLeft") == "-3800px") {
      $("#content .sliderimg").animate({
        marginLeft: "0px"
      }, 2000);
    } else {
      $("#content .sliderimg").animate({
        marginLeft: "-=1900px"
      }, 2000);
    }
  }, 3000);


});
