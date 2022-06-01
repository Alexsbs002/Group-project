var header = document.querySelector(".header");
var testBtn1 = document.querySelector("#link1");
var testBtn2 = document.querySelector("#link2");
var testBtn3 = document.querySelector("#link3");
var testBtn4 = document.querySelector("#link4");
var testBtn5 = document.querySelector("#link5");
var testBtn6 = document.querySelector("#link6");
var testBtn7 = document.querySelector("#butt1");
var testBtn8 = document.querySelector("#butt2");
var navLinks = document.querySelectorAll(".nav_link");



window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    
   
    
    if (scrollPos >0){
        header.classList.add('red');
        } else {
        header.classList.remove('red');
        }
    
});
testBtn1.addEventListener("click", function(e) {
    e.preventDefault();
    scroll({ top: 1000, behavior: 'smooth' });

});
testBtn2.addEventListener("click", function(e) {
    e.preventDefault();
    scroll({ top: 1500, behavior: 'smooth' });

});
testBtn3.addEventListener("click", function(e) {
    e.preventDefault();
    scroll({ top: 2400, behavior: 'smooth' });

});
testBtn4.addEventListener("click", function(e) {
    e.preventDefault();
    scroll({ top: 3400, behavior: 'smooth' });

});
testBtn5.addEventListener("click", function(e) {
    e.preventDefault();
    scroll({ top: 4700, behavior: 'smooth' });

});
testBtn6.addEventListener("click", function(e) {
    e.preventDefault();
    scroll({ top: 5400, behavior: 'smooth' });
});
testBtn7.addEventListener("click", function(e) {
    e.preventDefault();
    scroll({ top: 1000, behavior: 'smooth' });

});
testBtn8.addEventListener("click", function(e) {
    e.preventDefault();
    scroll({ top: 2400, behavior: 'smooth' });

});



