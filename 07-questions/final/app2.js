 var first_toggle_btn = document.getElementsByClassName("question-btn")[0];
 var second_toggle_btn = document.getElementsByClassName("question-btn")[1];
 var third_toggle_btn = document.getElementsByClassName("question-btn")[2];
 var text = document.getElementsByClassName("question-text")[0]
 var text1 = document.getElementsByClassName("question-text")[1]
 var text2 = document.getElementsByClassName("question-text")[2]

 first_toggle_btn.addEventListener("click",function(){
   text.classList.toggle("question-text");
   if(!text1.classList.contains("question-text")){
   text1.classList.add("question-text");
   }
   if(!text2.classList.contains("question-text")){
   text2.classList.add("question-text");
   }
 })
 second_toggle_btn.addEventListener("click",function(){
    text1.classList.toggle("question-text");
   if(!text.classList.contains("question-text")){
      text.classList.add("question-text");
      }
   if(!text2.classList.contains("question-text")){
      text2.classList.add("question-text");
      }
 })
 third_toggle_btn.addEventListener("click",function(){
    text2.classList.toggle("question-text");
    if(!text.classList.contains("question-text")){
      text.classList.add("question-text");
      }
   if(!text1.classList.contains("question-text")){
      text1.classList.add("question-text");
      }
 })


