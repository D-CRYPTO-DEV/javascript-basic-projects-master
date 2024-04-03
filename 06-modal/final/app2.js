var modal_btn = document.querySelector("button.modal-btn");
var over_lay = document.querySelector(".modal-overlay");
var close_btn = document.querySelector(".close-btn");

modal_btn.addEventListener("click",function(){
over_lay.classList.add("open-modal");
})

close_btn.addEventListener("click",function(){
    over_lay.classList.remove("open-modal");
})