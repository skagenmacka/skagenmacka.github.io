/* Sätter tilbaka top-bar till toppen eftersom JavaScipt fungerar */
const topBra = document.getElementById("top-bar");
topBra.style.marginTop = 0;

const langSelector = document.getElementById("lang-selector");
const langDisplay = document.getElementById("lang-display");
const langContent = document.getElementById("lang-content");

const langs = 
[
    "en",
    "sv",
    "es",
    "de",
    "pr"
]

/* Skapar en lista utav alla språken */
for(let i = 0; i < langs.length; i++)
{
    let node = document.createElement("img");
    node.src = "res/flags/" + langs[i] + ".png";
    
    node.addEventListener("click", (e) => 
    {
        langDisplay.src = "res/flags/" + langs[i] + ".png";
    });
    
    langContent.appendChild(node);
}

let langVisibility = false;

langSelector.addEventListener("click", (e) =>
{
    langVisibility = !langVisibility;
    langContent.style.opacity = langVisibility == true ? 1 : 0;
    langContent.style.pointerEvents = langVisibility == true ? "all" : "none";
});