$(document).ready(function() {

  // Typed caption

  var options = {
    strings: ["MY NAME IS BART^700, I'M A WEBDEVELOPER APPRENTICE^1000 AND THIS IS MY PORTFOLIO."],
    startDelay: 1100,
    typeSpeed: 50,
    backSpeed: 20,
    showCursor: true,
    cursorChar: "|"
  }

  var typed = new Typed(".border", options);

  // Header scrolling

  $("#toHome").click(function() {
    $('html, body').animate({
      scrollTop: $('#home').offset().top
    }, 'slow');
  });

  $("#toAbout").click(function() {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 'slow');
  });

  $("#toMyWork").click(function() {
    $('html, body').animate({
      scrollTop: $('#myWork').offset().top
    }, 'slow');
  });

  $("#toContact").click(function() {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 'slow');
  });

  // Arrow scrolling

  $("#toAboutFromPage").click(function() {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 'slow');
  });

  $("#toHomeFromPage").click(function() {
    $('html, body').animate({
      scrollTop: $('#home').offset().top
    }, 'slow');
  });

  // "Slideshow" script

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

// Animated header dependant on viewport

$(function() {
  const mq = window.matchMedia("(max-width: 580px)");

  $(window).on("scroll", function() {
    if (mq.matches) {
      if ($(window).scrollTop() > 730) {
        $(".header").addClass("headerActive");
        $(".linkIcon").addClass("iconActiveMobile");
      } else {
        $(".header").removeClass("headerActive");
        $(".linkIcon").removeClass("iconActiveMobile");
      }
    } else {
      // if ($(window).scrollTop() > 980) {
      //   $(".header").addClass("headerActive");
      //   $(".link a").addClass("linkActive");
      //   $(".linkIcon").addClass("iconActive");
      // } else {
      //   $(".header").removeClass("headerActive");
      //   $(".link a").removeClass("linkActive");
      //   $(".linkIcon").removeClass("iconActive");
      // }
    }
  });
});
