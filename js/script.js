// Initializing Variables
let sideBarDate = document.getElementById("date");
const hamBurgerBtn = document.getElementById("hamburger");
const hamburgerList = document.getElementById("hamburger__list");
const hero = document.getElementsByClassName("hero")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];

// Objects
let today = new Date();

// SideBar
sideBarDate.innerHTML = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;

// === Function ===
// Hamburger 
const hamburgerAnimation = () => {

    // Hamburger Animation
    if (hamBurgerBtn.classList.contains("hamburger__active")) {
        hamBurgerBtn.classList.replace("hamburger__active", "hamburger__reverse");
    
    } else if (hamBurgerBtn.classList.contains("hamburger__reverse")){
        hamBurgerBtn.classList.replace("hamburger__reverse", "hamburger__active");
    
    } else {
        hamBurgerBtn.classList.add("hamburger__active");
    }


    // Hamburger Slide
    if (hamburgerList.classList.contains("rightIn")) {
        hamburgerList.classList.replace("rightIn", "rightOut");
    
    } else if (hamburgerList.classList.contains("rightOut")){
        hamburgerList.classList.replace("rightOut", "rightIn");
    
    } else {
        hamburgerList.classList.add("rightIn");
    }
}

// Add Blur
const enableBlur = () => {
    if (hero.classList.contains("blur")) {
        hero.classList.replace("blur", "reverseBlur");
        sidebar.classList.replace("blur", "reverseBlur");
    
    } else if (hero.classList.contains("reverseBlur")){
        hero.classList.replace("reverseBlur", "blur");
        sidebar.classList.replace("reverseBlur", "blur");
    
    } else {
        hero.classList.add("blur");
        sidebar.classList.add("blur");
    }
}

// Handling Events 
hamBurgerBtn.addEventListener("click", () => {
    hamburgerAnimation();
    enableBlur();
})

// Typed JavaScript
const typed = new Typed("#typed", {
    strings: ["Frontend Web Developer", "Custom ROM Maintainer", "Music Lover"],

    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 200,
    loop: true
})