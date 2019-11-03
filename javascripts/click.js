function games_on(){
    var x = document.getElementById("games");
    x.style.display = "block";
}
function games_off(){
    var x = document.getElementById("games");
    x.style.display = "none";
}

function hack_on(){
    var y = document.getElementById("hacking");
    y.style.display = "block";
}
function hack_off(){
    var y = document.getElementById("hacking");
    y.style.display = "none";
}

/*
function gen_on(){
    var z = document.getElementById("general");
    z.style.display = "block";
}
function gen_off(){
    var z = document.getElementById("general");
    z.style.display = "none";
}
*/


function albumshow(){
    var i;
    var slides = document.getElementsByClassName("albums");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(albumshow, 15000);
    }

function bookshow(){
    var i;
    var slides = document.getElementsByClassName("books");
    var dot1 = document.getElementsByClassName("dot1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideindex++;
      if (slideindex > slides.length) {slideindex = 1}    
      for (i = 0; i < dot1.length; i++) {
        dot1[i].className = dot1[i].className.replace(" active2", "");
      }
      slides[slideindex-1].style.display = "block";  
      dot1[slideindex-1].className += " active2";
      setTimeout(bookshow, 15000);
    }

function movieshow(){
        var i;
        var slides = document.getElementsByClassName("movies");
        var dot2 = document.getElementsByClassName("dot2");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slide_index++;
          if (slide_index > slides.length) {slide_index = 1}    
          for (i = 0; i < dot2.length; i++) {
            dot2[i].className = dot2[i].className.replace(" active3", "");
          }
          slides[slide_index-1].style.display = "block";  
          dot2[slide_index-1].className += " active3";
          setTimeout(movieshow, 15000);
        }

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function albumshow2(n) {
  var i;
  var slides = document.getElementsByClassName("albums");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}