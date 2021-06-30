/* Sätter tilbaka top-bar till toppen eftersom JavaScipt fungerar */
const topBra = document.getElementById("top-bar");
topBra.style.marginTop = 0;

/* Naviagations panelen för mobilen och mindre skärmar */
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const mobileNavBar = document.getElementById("mobile-nav-bar");
let navBarVisisble = false;

const mobileBurger = document.getElementById("mobile-burger");
const mobileX = document.getElementById("mobile-x");

mobileNavToggle.addEventListener("click", (e) =>
{
    navBarVisisble = !navBarVisisble;
    mobileNavBar.style.transform = navBarVisisble === true ? "translateX(100%)" : "translateX(0%)";
    
    mobileBurger.style.opacity = navBarVisisble === true ? 0 : 1;
    mobileX.style.opacity = navBarVisisble === true ? 1 : 0;
});



/* Inget att se här */

const i = document.getElementById("easter-egg");
const l = document.getElementById("logo");
i.addEventListener("click", () => 
{
    l.style.transition = "all .1s ease-in-out";
    l.style.transform = "scale(200%) translateX(-64px)";
});