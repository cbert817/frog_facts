//Frog Fanatics java Script file for functions

//spin image for STF
function spinImage() {
    var image = document.getElementById("weirdFrog");
    image.style.transform = "rotate(360deg)";
    image.style.transition = "transform 2s ease-in-out";
    setTimeout(function() {
      image.style.transform = "rotate(0deg)";
    }, 2000);
  }
  setInterval(spinImage, 4000); // Spin the image every 4 seconds

  function spinImage2() {
    var image = document.getElementById("articleSubImage");
    image.style.transform = "rotate(360deg)";
    image.style.transition = "transform 2s ease-in-out";
  }
  setInterval(spinImage2, 300); // Spin the image every 3 seconds

//Added 
$(document).ready(function() {
	$('header').height($(window).height());
});

