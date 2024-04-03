var textBody = document.getElementById("info");
var forwardButton = document.querySelector("button.next-btn");
var backwardButton = document.querySelector("button.prev-btn");
var randomButton = document.querySelector("button.random-btn");
var idNum = 0;
forwardButton.onclick = function(){
    const userPic = document.getElementById("person-img");
    const userName = document.getElementById("author");
    const jobDiscription = document.getElementById("job");
    if(idNum === 0){
        userPic.setAttribute("src","WEBDEV.jpg");
        userName.textContent = " Susan Smith"
        jobDiscription.textContent = "WEB DEVELOPER"
        textBody.innerHTML = "<p>I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse <br> before they sold out chambray pop-up. Shaman humblebrag pickled <br> coloring book salvia hoodie, cold-pressed four dollar toast everyday carry</p>"
        idNum +=1;
    }
    else if(idNum === 1){
        userPic.setAttribute("src","INTERN.jpg");
        userName.textContent = "Peter Jones"
        jobDiscription.textContent = " INTERN"
        textBody.innerHTML = "<p>Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8- <br> bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst <br> raclette post-ironic jianbing swag.</p>"
        idNum +=1;
    }
    else if(idNum === 2){
        userPic.setAttribute("src","BOSS.jpg");
        userName.textContent = "Bill Anderson"
        jobDiscription.textContent = " THE BOSS"
        textBody.innerHTML = "<p>Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion <br> axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, <br> edison bulb pop-up 3 wolf moon tote bag street art shabby chic.</p>"
        idNum += 1;
    }
    else if(idNum === 3){
        userPic.setAttribute("src","person-1.jpeg");
        userName.textContent = "Anna Johnson"
        jobDiscription.textContent = " UX DESIGNER"
        textBody.innerHTML = "<p>Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt <br> glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin <br> fashion axe.photo booth jean shorts artisan narwhal.</p>"
        idNum = 0;
    }
}
backwardButton.onclick = function(){
    const userPic = document.getElementById("person-img");
    const userName = document.getElementById("author");
    const jobDiscription = document.getElementById("job");
    if(idNum === 3){
        userPic.setAttribute("src","WEBDEV.jpg");
        userName.textContent = " Susan Smith"
        jobDiscription.textContent = "WEB DEVELOPER"
        textBody.innerHTML = "<p>I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse <br> before they sold out chambray pop-up. Shaman humblebrag pickled <br> coloring book salvia hoodie, cold-pressed four dollar toast everyday carry</p>"
        idNum -= 1;
    }
    else if(idNum === 2){
        userPic.setAttribute("src","INTERN.jpg");
        userName.textContent = "Peter Jones"
        jobDiscription.textContent = " INTERN"
        textBody.innerHTML = "<p>Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8- <br> bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst <br> raclette post-ironic jianbing swag.</p>"
        idNum -= 1;
    }
    else if(idNum === 1){
        userPic.setAttribute("src","BOSS.jpg");
        userName.textContent = "Bill Anderson"
        jobDiscription.textContent = " THE BOSS"
        textBody.innerHTML = "<p>Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion <br> axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, <br> edison bulb pop-up 3 wolf moon tote bag street art shabby chic.</p>"
        idNum -= 1;
    }
    else if(idNum === 0){
        userPic.setAttribute("src","person-1.jpeg");
        userName.textContent = "Anna Johnson"
        jobDiscription.textContent = " UX DESIGNER"
        textBody.innerHTML = "<p>Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt <br> glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin <br> fashion axe.photo booth jean shorts artisan narwhal.</p>"
        idNum = 3;
    }
}
randomButton.onclick = function(){
    const userPic = document.getElementById("person-img");
    const userName = document.getElementById("author");
    const jobDiscription = document.getElementById("job");
    if(idNum === 0){
        userPic.setAttribute("src","WEBDEV.jpg");
        userName.textContent = " Susan Smith"
        jobDiscription.textContent = "WEB DEVELOPER"
        textBody.innerHTML = "<p>I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse <br> before they sold out chambray pop-up. Shaman humblebrag pickled <br> coloring book salvia hoodie, cold-pressed four dollar toast everyday carry</p>"
        idNum = Math.floor(Math.random()*4);
    }
    else if(idNum === 1){
        userPic.setAttribute("src","INTERN.jpg");
        userName.textContent = "Peter Jones"
        jobDiscription.textContent = " INTERN"
        textBody.innerHTML = "<p>Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8- <br> bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst <br> raclette post-ironic jianbing swag.</p>"
        idNum = Math.floor(Math.random()*4);
    }
    else if(idNum === 2){
        userPic.setAttribute("src","BOSS.jpg");
        userName.textContent = "Bill Anderson"
        jobDiscription.textContent = " THE BOSS"
        textBody.innerHTML = "<p>Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion <br> axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, <br> edison bulb pop-up 3 wolf moon tote bag street art shabby chic.</p>"
        idNum = Math.floor(Math.random()*4);
    }
    else if(idNum === 3){
        userPic.setAttribute("src","person-1.jpeg");
        userName.textContent = "Anna Johnson"
        jobDiscription.textContent = " UX DESIGNER"
        textBody.innerHTML = "<p>Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt <br> glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin <br> fashion axe.photo booth jean shorts artisan narwhal.</p>"
        idNum = Math.floor(Math.random()*4)
    }

}