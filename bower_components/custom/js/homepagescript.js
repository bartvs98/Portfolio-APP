$(document).ready(function() {
  $(".fade-in").hide();
  $("#aboutFade").hide();

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

  $("#toWorkFromAbout").click(function() {
    $('html, body').animate({
      scrollTop: $('#myWork').offset().top
    }, 'slow');
  });

  $("#toContactFormWork").click(function() {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
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
        $(".header").addClass("header-active");
        $(".link-icon").addClass("icon-active-mobile");
      } else {
        $(".header").removeClass("header-active");
        $(".link-icon").removeClass("icon-active-mobile");
      }
    }

    if ($(window).scrollTop() > 280) {
      $("#aboutFade").fadeIn("slow");
    }
  });
});

$(window).on("load", function() {
  // Typed caption

  $(function() {
    var options = {
      strings: ["MY NAME IS BART^700, I'M A WEBDEVELOPER APPRENTICE^1000 AND THIS IS MY PORTFOLIO."],
      startDelay: 500,
      typeSpeed: 40,
      backSpeed: 20,
      onComplete: function() {
        $(".fade-in").fadeIn("slow");
      }
    }

    var typed = new Typed(".border", options);
  })


})
