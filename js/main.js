

let burger= document.querySelector(".burger");
let menu= document.querySelector(".bloc");

burger.addEventListener("click", function(){
    burger.classList.toggle("active")
    menu.classList.toggle("active")
});




/*

les hovers du style.css

.burger-menu:hover {
    border:2px solid rgb(14, 179, 255);
    transform: rotate(180deg);    
}

.burger-menu:hover :first-child {
    width: 40%;  
}

.burger-menu:hover :last-child {
width: 20%;            
}

*/
