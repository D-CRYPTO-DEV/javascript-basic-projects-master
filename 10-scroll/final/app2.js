const upLink = document.querySelector(".top-link")
const scroll = document.querySelector(".nav");
window.addEventListener("DOMContentLoaded",()=>{
    upLink.classList.add("show-link")
})
window.addEventListener("scroll",()=>{
    if(window.scroll>0){
        scroll.classList.add("nav_moves")
    }else{
        scroll.classList.remove("nav_moves")
    }
})

