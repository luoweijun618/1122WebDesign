window.onload = function() {
  window.onscroll = function() {scrollFunction()};
  showSlides();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var slideshow = document.getElementById("slideshow");
  var slideshowHeight = slideshow.offsetHeight;
  var navfix = document.getElementById("navfix")

  if (window.pageYOffset > slideshowHeight) {
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.width = "100zh";
    navfix.style.height = "120px"
  } else {
    navbar.style.position = "relative";
    navfix.style.height = "0px"
  }
}

let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.addEventListener("DOMContentLoaded", function() {
  const npBoxes = document.querySelectorAll('.npBox');
  npBoxes.forEach(box => {
    const img = box.querySelector('img');
    img.onload = function() {
      if (img.naturalWidth > img.naturalHeight) {
        box.classList.add('horizontal');
      } else {
        box.classList.add('vertical');
      }
    };
  });
});
window.addEventListener('resize', function() {
  document.querySelectorAll('.npBox.horizontal').forEach(box => {
    if (box.clientWidth < 400) {
      box.style.gridColumnEnd = `span 1`;
    } else {
      box.style.gridColumnEnd = `span 2`;
    }
  });
});