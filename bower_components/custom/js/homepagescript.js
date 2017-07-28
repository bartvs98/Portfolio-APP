$(document).ready(function() {
  $("#toAboutFromPage").click(function () {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 'slow');
  });

  $("#toMyWorkFromPage").click(function () {
    $('html, body').animate({
      scrollTop: $('#myWork').offset().top
    }, 'slow');
  });

  $("#toContactFromPage").click(function () {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 'slow');
  });

  $("#toHomeFromPage").click(function () {
    $('html, body').animate({
      scrollTop: $('#home').offset().top
    }, 'slow');
  });

  $("#work2").hide();
  $("#dot1").addClass("active");

  $("#dot1").click(function() {
    $("#work1").fadeIn();
    $("#work2").hide();
    $("#dot1").addClass("active");
    $("#dot2").removeClass("active");
  });

  $("#dot2").click(function() {
    $("#work2").fadeIn();
    $("#work1").hide();
    $("#dot2").addClass("active");
    $("#dot1").removeClass("active");
  });
})
