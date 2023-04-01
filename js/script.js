// Initializing Variables
let sideBarDate = document.getElementById("date");
const hamBurgerBtn = document.getElementById("hamburger");
const hamburgerList = document.getElementById("hamburger__list");
const hero = document.getElementsByClassName("hero")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];
const aboutPage = document.getElementById("about");
const skillsPage = document.getElementById("skills");
const contactPage = document.getElementById("contact");

const home = document.getElementsByClassName("link__home");
const about = document.getElementsByClassName("link__about");
const skills = document.getElementsByClassName("link__skills");
const contact = document.getElementsByClassName("link__contact");


// Objects
let today = new Date();

// SideBar
sideBarDate.innerHTML = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

// === Function ===
// Hamburger 
const hamburgerAnimation = () => {

    // Hamburger Animation
    if (hamBurgerBtn.classList.contains("hamburger__active")) {
        hamBurgerBtn.classList.replace("hamburger__active", "hamburger__reverse");

    } else if (hamBurgerBtn.classList.contains("hamburger__reverse")) {
        hamBurgerBtn.classList.replace("hamburger__reverse", "hamburger__active");

    } else {
        hamBurgerBtn.classList.add("hamburger__active");
    }


    // Hamburger Slide
    if (hamburgerList.classList.contains("rightIn")) {
        hamburgerList.classList.replace("rightIn", "rightOut");

    } else if (hamburgerList.classList.contains("rightOut")) {
        hamburgerList.classList.replace("rightOut", "rightIn");

    } else {
        hamburgerList.classList.add("rightIn");
    }
}

const homeColor = () => {
    home[0].classList.add("active");
    about[0].classList.remove("active");
    skills[0].classList.remove("active");
    contact[0].classList.remove("active");
}
const aboutColor = () => {
    if (aboutPage.classList.contains("rightIn")) {
        home[0].classList.remove("active");
        skills[0].classList.remove("active");
        contact[0].classList.remove("active");
        about[0].classList.add("active");
    } else if (aboutPage.classList.contains("rightOut")) {
        home[0].classList.add("active");
        about[0].classList.remove("active");
        skills[0].classList.remove("active");
        contact[0].classList.remove("active");
    }
}
const skillsColor = () => {

    if (skillsPage.classList.contains("rightIn")) {
        home[0].classList.remove("active");
        about[0].classList.remove("active");
        contact[0].classList.remove("active");
        skills[0].classList.add("active");
    } else if (skillsPage.classList.contains("rightOut")) {
        home[0].classList.add("active");
        skills[0].classList.remove("active");
        about[0].classList.remove("active");
        contact[0].classList.remove("active");
        
    }
}
const contactColor = () => {
    if (contactPage.classList.contains("rightIn")) {
        home[0].classList.remove("active");
        about[0].classList.remove("active");
        skills[0].classList.remove("active");
        contact[0].classList.add("active");
    } else if (contactPage.classList.contains("rightOut")) {
        home[0].classList.add("active");
        skills[0].classList.remove("active");
        about[0].classList.remove("active");
        contact[0].classList.remove("active");
        
    }
}

// Add Blur
const enableBlur = () => {
    if (hero.classList.contains("blur")) {
        hero.classList.replace("blur", "reverseBlur");
        sidebar.classList.replace("blur", "reverseBlur");

    } else if (hero.classList.contains("reverseBlur")) {
        hero.classList.replace("reverseBlur", "blur");
        sidebar.classList.replace("reverseBlur", "blur");

    } else {
        hero.classList.add("blur");
        sidebar.classList.add("blur");
    }
}

// About Page
const openAboutPage = () => {

    // Check for About Section
    if (aboutPage.classList.contains("rightIn")) {
        aboutPage.classList.replace("rightIn", "rightOut");
        hamburgerList.classList.replace("rightOut", "rightIn");
        aboutColor();

    } else if (aboutPage.classList.contains("rightOut")) {
        aboutPage.classList.replace("rightOut", "rightIn");

        hamburgerList.classList.replace("rightIn", "rightOut");
        skillsPage.classList.replace("rightIn", "rightOut");
        contactPage.classList.replace("rightIn", "rightOut");

        hamBurgerBtn.classList.replace("hamburger__active", "hamburger__reverse");
        hero.classList.replace("blur", "reverseBlur");
        aboutColor();

    } else {
        aboutPage.classList.add("rightIn");

        hamburgerList.classList.replace("rightIn", "rightOut");
        skillsPage.classList.replace("rightIn", "rightOut");
        contactPage.classList.replace("rightIn", "rightOut");

        hamBurgerBtn.classList.replace("hamburger__active", "hamburger__reverse");
        hero.classList.replace("blur", "reverseBlur");
        aboutColor();
    }
}

const openSkillsPage = () => {

    // Check for Skills Section
    if (skillsPage.classList.contains("rightIn")) {
        skillsPage.classList.replace("rightIn", "rightOut");
        hamburgerList.classList.replace("rightOut", "rightIn");
        skillsColor();


    } else if (skillsPage.classList.contains("rightOut")) {
        skillsPage.classList.replace("rightOut", "rightIn");

        hamburgerList.classList.replace("rightIn", "rightOut");
        aboutPage.classList.replace("rightIn", "rightOut");
        contactPage.classList.replace("rightIn", "rightOut");

        hamBurgerBtn.classList.replace("hamburger__active", "hamburger__reverse");
        hero.classList.replace("blur", "reverseBlur");
        skillsColor();

    } else {
        skillsPage.classList.add("rightIn");

        hamburgerList.classList.replace("rightIn", "rightOut");
        aboutPage.classList.replace("rightIn", "rightOut");
        contactPage.classList.replace("rightIn", "rightOut");

        hamBurgerBtn.classList.replace("hamburger__active", "hamburger__reverse");
        hero.classList.replace("blur", "reverseBlur");
        skillsColor();
    }

}


const openContactsPage = () => {

    // Check for Skills Section
    if (contactPage.classList.contains("rightIn")) {
        contactPage.classList.replace("rightIn", "rightOut");
        hamburgerList.classList.replace("rightOut", "rightIn");
        contactColor();


    } else if (contactPage.classList.contains("rightOut")) {
        contactPage.classList.replace("rightOut", "rightIn");

        hamburgerList.classList.replace("rightIn", "rightOut");
        aboutPage.classList.replace("rightIn", "rightOut");
        skillsPage.classList.replace("rightIn", "rightOut");

        hamBurgerBtn.classList.replace("hamburger__active", "hamburger__reverse");
        hero.classList.replace("blur", "reverseBlur");
        contactColor();

    } else {
        contactPage.classList.add("rightIn");

        hamburgerList.classList.replace("rightIn", "rightOut");
        aboutPage.classList.replace("rightIn", "rightOut");
        skillsPage.classList.replace("rightIn", "rightOut");

        hamBurgerBtn.classList.replace("hamburger__active", "hamburger__reverse");
        hero.classList.replace("blur", "reverseBlur");
        contactColor();
    }

}

// Check Wheater page is opened or not
const PageCheck = () => {
    if (aboutPage.classList.contains("rightIn") && hamburgerList.classList.contains("rightIn")) {
        aboutPage.classList.replace("rightIn", "rightOut");
    } else if (skillsPage.classList.contains("rightIn") && hamburgerList.classList.contains("rightIn")) {
        skillsPage.classList.replace("rightIn", "rightOut");
    } else if (contactPage.classList.contains("rightIn") && hamburgerList.classList.contains("rightIn")) {
        contactPage.classList.replace("rightIn", "rightOut");}
}

//Close All Pages
const closeAll = () => {
    if(aboutPage.classList.contains("rightIn")){
        aboutPage.classList.replace("rightIn", "rightOut");

        if(hamBurgerBtn.classList.contains("hamburger__active")){
            hamBurgerBtn.classList.replace("hamburger__active", "hamburger__reverse");
        }

        if(hamburgerList.classList.contains("rightIn")){
            hamburgerList.classList.replace("rightIn", "rightOut");
        }

        if(hero.classList.contains("blur")){
            hero.classList.replace("blur", "reverseBlur");
            sidebar.classList.replace("blur", "reverseBlur");
        }

    } else if (skillsPage.classList.contains("rightIn")){
        skillsPage.classList.replace("rightIn", "rightOut");

        if(hamBurgerBtn.classList.contains("hamburger__active")){
            hamBurgerBtn.classList.replace("hamburger__active", "hamburger__reverse");
        }

        if(hamburgerList.classList.contains("rightIn")){
            hamburgerList.classList.replace("rightIn", "rightOut");
        }

        if(hero.classList.contains("blur")){
            hero.classList.replace("blur", "reverseBlur");
            sidebar.classList.replace("blur", "reverseBlur");
        }

    } else if (contactPage.classList.contains("rightIn")){
        contactPage.classList.replace("rightIn", "rightOut");

        if(hamBurgerBtn.classList.contains("hamburger__active")){
            hamBurgerBtn.classList.replace("hamburger__active", "hamburger__reverse");
        }

        if(hamburgerList.classList.contains("rightIn")){
            hamburgerList.classList.replace("rightIn", "rightOut");
        }

        if(hero.classList.contains("blur")){
            hero.classList.replace("blur", "reverseBlur");
            sidebar.classList.replace("blur", "reverseBlur");
        }

    }else if (hamburgerList.classList.contains("rightIn")){
        hamburgerList.classList.replace("rightIn", "rightOut");

        if(hamBurgerBtn.classList.contains("hamburger__active")){
            hamBurgerBtn.classList.replace("hamburger__active", "hamburger__reverse");
        }

        if(hero.classList.contains("blur")){
            hero.classList.replace("blur", "reverseBlur");
            sidebar.classList.replace("blur", "reverseBlur");
        }
    }
}

// Handling Events 
hamBurgerBtn.addEventListener("click", () => {
    hamburgerAnimation();
    enableBlur();
    PageCheck();
})

for (let i = 0; i < home.length; i++) {
    home[i].addEventListener("click", ()=>{
        homeColor();
        closeAll();

    })
}

for (let i = 0; i < about.length; i++) {
    about[i].addEventListener("click", openAboutPage)
}
for (let i = 0; i < contact.length; i++) {
    contact[i].addEventListener("click", openContactsPage)
}
for (let i = 0; i < skills.length; i++) {
    skills[i].addEventListener("click", openSkillsPage)
}

// Typed JavaScript
const typed = new Typed("#typed", {
    strings: ["Freelancer", "Frontend Web Developer", "Custom ROM Maintainer", "Music Lover"],

    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 200,
    loop: true
})