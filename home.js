var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  console.log(setTimeout(n, 2000));

  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
showSlides();

function updateSliderArrowsStatus(
  cardsContainer,
  containerWidth,
  cardCount,
  cardWidth
) {
  if (
    $(cardsContainer).scrollLeft() + containerWidth <
    cardCount * cardWidth + 15
  ) {
    $("#slide-right-container").addClass("active");
  } else {
    $("#slide-right-container").removeClass("active");
  }
  if ($(cardsContainer).scrollLeft() > 0) {
    $("#slide-left-container").addClass("active");
  } else {
    $("#slide-left-container").removeClass("active");
  }
}
$(function () {
  // Scroll products' slider left/right
  let div = $("#cards-container");
  let cardCount = $(div).find(".cardsSlider").children(".card2").length;
  let speed = 1000;
  let containerWidth = $(".container").width();
  let cardWidth = 250;

  updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);

  //Remove scrollbars
  $("#slide-right-container").click(function (e) {
    if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
      $(div).animate(
        {
          scrollLeft: $(div).scrollLeft() + cardWidth,
        },
        {
          duration: speed,
          complete: function () {
            setTimeout(
              updateSliderArrowsStatus(
                div,
                containerWidth,
                cardCount,
                cardWidth
              ),
              1005
            );
          },
        }
      );
    }
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  });
  $("#slide-left-container").click(function (e) {
    if ($(div).scrollLeft() + containerWidth > containerWidth) {
      $(div).animate(
        {
          scrollLeft: "-=" + cardWidth,
        },
        {
          duration: speed,
          complete: function () {
            setTimeout(
              updateSliderArrowsStatus(
                div,
                containerWidth,
                cardCount,
                cardWidth
              ),
              1005
            );
          },
        }
      );
    }
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  });

  // If resize action ocurred then update the container width value
  $(window).resize(function () {
    try {
      containerWidth = $("#cards-container").width();
      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    } catch (error) {}
  });
});

var pathArray = "?keys=comite".split("=");
//console.log(pathArray);
var protocol = pathArray[1];
//console.log(protocol);

document.addEventListener("DOMContentLoaded", function (event) {
  if ($("#txtSearch").length) {
    if ($(".ReporteAnual2019").length) {
      $(".ReporteAnual2019").attr(
        "href",
        "https://www.amcham.org.mx/en/ReporteAnual2019"
      );
      console.log("si perro");
    } else {
    }
    if ($(".ReporteAnual2018").length) {
      $(".ReporteAnual2018").attr(
        "href",
        "https://www.amcham.org.mx/en/node/3895"
      );
      console.log("si perro");
    } else {
      console.log("no exxiste");
    }
    if ($(".ReporteAnual2017").length) {
      $(".ReporteAnual2017").attr(
        "href",
        "https://www.amcham.org.mx/en/node/3401"
      );
      console.log("si perro");
    } else {
    }
    if ($(".ReporteAnual2016").length) {
      $(".ReporteAnual2016").attr(
        "href",
        "https://www.amcham.org.mx/en/node/3319"
      );
      console.log("si perro");
    } else {
      console.log("no peprr");
    }
  } else {
  }
});



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}