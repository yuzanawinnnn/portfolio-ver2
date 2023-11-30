/* ==================== typing animation ============================*/
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","Youtuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// Add active class to the current link (highlight it)
var lnks = document.getElementsByClassName("lnks");
for (var i = 0; i < lnks.length; i++) {
  lnks[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });