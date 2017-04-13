/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var myIndex = 0;
carousel();
smallSlide();

function carousel() {
    var i;
    var x = document.getElementsByClassName("p2I");
    var y = document.getElementsByClassName("testp");
    var z = document.getElementsByClassName("dt3");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    for (i = 0; i < y.length; i++) {
       y[i].style.display = "none";  
    }
    for (i = 0; i < z.length; i++) {
      z[i].className = z[i].className.replace(" test-active", "");
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1} 
    if (myIndex > y.length) {myIndex = 1} 
    x[myIndex-1].style.display = "block";  
    y[myIndex-1].style.display = "block"; 
    z[myIndex-1].className += " test-active"; 
    setTimeout(carousel, 5000);
}
function smallSlide() {
    if(window.innerWidth <= 480){
        var p = document.getElementsByClassName("mob-tp");
       for (i = 0; i < p.length; i++) {
           p[i].style.display = "none";  
       }
        myIndex++;
        p[myIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000);
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testp");
  var textIndex = document.getElementsByClassName("p2I");
  var dots = document.getElementsByClassName("dt3");
  if (n > slides.length) {slideIndex = 1} 
  if (n > textIndex.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  if (n < 1) {slideIndex = textIndex.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < textIndex.length; i++) {
      textIndex[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" test-active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  textIndex[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " test-active";
   
}