// accordian scripts
   var acc = document.getElementsByClassName("accordion");
   var i;

   for (i = 0; i < acc.length; i++) {
     acc[i].addEventListener("click", function () {
       this.classList.toggle("active");
       var panel = this.nextElementSibling;
       if (panel.style.display === "block") {
         panel.style.display = "none";
       } else {
         panel.style.display = "block";
       }
     });
   }

   //scroll top script

   var mybutton = document.getElementById("myBtn");

   // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = function () {
     scrollFunction()
   };

   function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       mybutton.style.display = "block";
     } else {
       mybutton.style.display = "none";
     }
   }

   // When the user clicks on the button, scroll to the top of the document
   function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   }

   //pre loader
   window.onload = function () {
     setTimeout(function () {
      document.querySelector(".preloader").style.display = "none";
     }, 1000);
   }
   

/* -------------------------------------------------------------------------- */
/*                                   slider                                   */
/* -------------------------------------------------------------------------- */

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
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

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 10000); // Change image every 2 seconds
}

/* -------------------------------------------------------------------------- */
/*                                 contenttab                                 */
/* -------------------------------------------------------------------------- */

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/* -------------------------------------------------------------------------- */
/*                               form validation                              */
/* -------------------------------------------------------------------------- */

function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  var y = document.forms["myForm"]["email"].value;
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }

}




/* -------------------------------------------------------------------------- */
/*                                    hover                                   */
/* -------------------------------------------------------------------------- */
//className, way to add a specific class name to an element

function setNewImage()
{
  document.getElementById("img1").src ="images/shop2.jpg";

}

function setOldImage()
{
  document.getElementById("img1").src ="images/shopping.jpg";
}

//modelpopup

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}