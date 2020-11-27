$(document).ready(function () {
  const firstSlideshow = $(".first-slider ul");
  const secondSlideshow = $(".second-slider ul");

  function nextSlide(slideshow, sliderClass) {
    const firstChild = $(`${sliderClass} ul li:first-child`);
    firstChild.appendTo(slideshow).fadeOut(500).fadeIn(500);
    
    $(".prev").attr("src", "images/arrow-gray-left.png");
    $(".next").attr("src", "images/arrow-blue-right.png");
  }

  function prevSlide(slideshow, sliderClass) {
	  const lastChild = $(`${sliderClass} li:last-child`);
    const prevChild = lastChild.prev("li");

    $(`${sliderClass} ul li:last-child`).prependTo(slideshow);
    
    prevChild.fadeOut(500).fadeIn(500);
      
    $(".next").attr("src", "images/arrow-gray-right.png");
    $(".prev").attr("src", "images/arrow-blue-left.png");
  }

  $(".next").click(function () {
    nextSlide(firstSlideshow, ".first-slider");
    nextSlide(secondSlideshow, ".second-slider");
  });

  $(".prev").click(function () {
    prevSlide(firstSlideshow, ".first-slider");
    prevSlide(secondSlideshow, ".second-slider");
  });
});
