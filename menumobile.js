$("#showmenumobile").click(function() {
    $( ".menumobile" ).fadeIn();
    $('html, body').css('overflowY', 'hidden'); 
  });


  $("#closeburger").click(function() {
    $( ".menumobile" ).fadeOut();
    $('html, body').css('overflowY', 'auto'); 

  });

$(window).scroll(function() {
  if ($(this).scrollTop()) {
      $('.backtoptop').fadeIn();
  } else {
      $('.backtoptop').fadeOut();
  }
});

$(".backtoptop").click(function() {
  $("html, body").animate({scrollTop: 0}, 10);
});

$(function(){
  var stickyHeaderTop = $('#stickytypeheader').offset().top;

  $(window).scroll(function(){
          if( $(window).scrollTop() > stickyHeaderTop ) {
                  $('#stickytypeheader').css({position: 'sticky', top: '0px',backgroundColor:'rgba(12,22,45,0.9)'});
                  $('.navigasikonten').addClass("noborderbottom");
                  
          } else {
                  $('#stickytypeheader').css({position: 'static', top: '0px',backgroundColor:'rgba(12,22,45,0.0)'});
                  $('.navigasikonten').removeClass("noborderbottom");
          }
  });
});


$("#anchor1").click(function() {
  $('html, body').animate({scrollTop: $("#artikel").offset().top}, 10);
  $('#anchor1').addClass("counterboxhover");
  $('#anchor2').removeClass("counterboxhover");
  $('#anchor3').removeClass("counterboxhover");
  $('#anchor4').removeClass("counterboxhover");
  $('#anchor5').removeClass("counterboxhover");
});

$("#anchor2").click(function() {
  $('html, body').animate({scrollTop: $("#designer").offset().top}, 10);
  $('#anchor1').removeClass("counterboxhover");
  $('#anchor2').addClass("counterboxhover");
  $('#anchor3').removeClass("counterboxhover");
  $('#anchor4').removeClass("counterboxhover");
  $('#anchor5').removeClass("counterboxhover");
});

$("#anchor3").click(function() {
  $('html, body').animate({scrollTop: $("#quote").offset().top}, 10);
  $('#anchor1').removeClass("counterboxhover");
  $('#anchor2').removeClass("counterboxhover");
  $('#anchor3').addClass("counterboxhover");
  $('#anchor4').removeClass("counterboxhover");
  $('#anchor5').removeClass("counterboxhover");
});

$("#anchor4").click(function() {
  $('html, body').animate({scrollTop: $("#website").offset().top}, 10);
  $('#anchor1').removeClass("counterboxhover");
  $('#anchor2').removeClass("counterboxhover");
  $('#anchor3').removeClass("counterboxhover");
  $('#anchor4').addClass("counterboxhover");
  $('#anchor5').removeClass("counterboxhover");
});

$("#anchor5").click(function() {
  $('html, body').animate({scrollTop: $("#video").offset().top}, 10);
  $('#anchor1').removeClass("counterboxhover");
  $('#anchor2').removeClass("counterboxhover");
  $('#anchor3').removeClass("counterboxhover");
  $('#anchor4').removeClass("counterboxhover");
  $('#anchor5').addClass("counterboxhover");
});
