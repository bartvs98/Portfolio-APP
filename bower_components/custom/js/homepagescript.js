$(document).ready(function() {
  $(".fade-in").hide();

  // Typed caption

  var options = {
    strings: ["Hi!^200", "^300MY NAME IS BART^700, I'M A WEBDEVELOPER APPRENTICE^1000 AND THIS IS MY PORTFOLIO."],
    startDelay: 700,
    typeSpeed: 50,
    backSpeed: 50,
    onComplete: function() {
      $(".fade-in").fadeIn("slow");
    }
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
})

// Animated header dependant on viewport

$(function() {
  const mq = window.matchMedia("(max-width: 580px)");

  $(window).on("scroll", function() {
    if (mq.matches) {
      if ($(window).scrollTop() > 730) {
        $(".header").addClass("header-active");
        $(".link-icon").addClass("icon-active-mobile");
        $(".fade-in").fadeIn("slow");
      } else {
        $(".header").removeClass("header-active");
        $(".link-icon").removeClass("icon-active-mobile");
      }
    }
  });
});
