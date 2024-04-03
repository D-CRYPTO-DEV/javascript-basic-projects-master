var toggleBtn = document.querySelector(".sidebar-toggle");
var sidebar = document.getElementsByClassName("sidebar")[0];
var cancelBtn = document.querySelector(".close-btn");
toggleBtn.addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar")
})
cancelBtn.addEventListener("click",function(){
    if(sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");
    }
})
