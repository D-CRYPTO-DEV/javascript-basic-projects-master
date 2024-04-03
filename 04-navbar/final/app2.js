var menu = document.querySelector(".nav-toggle");
var link = document.querySelector(".links");

menu.addEventListener("click",function(){
    link.classList.toggle("show-links");
})

