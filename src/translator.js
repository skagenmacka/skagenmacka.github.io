/* Språk väljar grejer */
const langs = 
[
    "en",
    "sv",
    "es",
    "de",
    "pr"
]

const translatables = document.getElementsByClassName("translatable");

const texts = 
{
    "en": 
    [
        "Example website",
        "Home",
        "About us",
        "FAQ",
        "Home",
        "About us",
        "FAQ",
        "Our socials",
        "Example title",
        "Example website, with translation and support for mobile devices/smaller screens. And knowns when JavaScript doesn't work as intended and shows a warning."
    ],
    
    "sv": 
    [
        "Exempel hemsida",
        "Hem",
        "Om oss",
        "FAQ",
        "Hem",
        "Om oss",
        "FAQ",
        "Våra sociala medier",
        "Exempel på titel",
        "Exempel hemsida, med översättning och stöd för mobilen/mindre skärmar. Och känner av när JavaScript inte fungerar som det ska och visar en varning."
    ],
    
    "es": 
    [
        "Sitio web de ejemplo",
        "Casa",
        "Om oss",
        "FAQ",
        "Casa",
        "Sobre nosotros",
        "FAQ",
        "Nuestras redes sociales",
        "Título de ejemplo",
        "Sitio web de ejemplo, con traducción y soporte para dispositivos móviles / pantallas más pequeñas. Y sabe cuando JavaScript no funciona como se esperaba y muestra una advertencia."
    ],
    
    "de": 
    [
        "Beispiel-Website",
        "Zuhause",
        "Über uns",
        "FAQ",
        "Zuhause",
        "Über uns",
        "FAQ",
        "Unsere sozialen Netzwerke",
        "Beispieltitel",
        "Beispielwebsite mit Übersetzung und Unterstützung für mobile Geräte/kleinere Bildschirme. Und erkennt, wenn JavaScript nicht wie vorgesehen funktioniert und eine Warnung anzeigt."
    ],
    
    "pr":
    [
        "Example o' ship",
        "The bay",
        "About us",
        "FAQ",
        "The bay",
        "About us",
        "FAQ",
        "Paper note in bottle alternatives",
        "Example o' title",
        "Example website, with translation and support for yer mobile devices/smaller screens. And knowns when yer Java o' Script doesn't work as yer intended and shows yer a warning."
    ],
    
}

function translateTo(lang)
{
    for(let i = 0; i < translatables.length; i++)
    {
        translatables[i].innerHTML = texts[lang][i];
    }
}

const langSelector = document.getElementById("lang-selector");
const langDisplay = document.getElementById("lang-display");
const langContent = document.getElementById("lang-content");

/* Skapar en lista utav alla språken */
for(let i = 0; i < langs.length; i++)
{
    let node = document.createElement("img");
    node.src = "res/flags/" + langs[i] + ".png";
    
    node.addEventListener("click", (e) => 
    {
        langDisplay.src = "res/flags/" + langs[i] + ".png";
        translateTo(langs[i]);
    });
    
    langContent.appendChild(node);
}

let langVisibility = false;

langSelector.addEventListener("click", (e) =>
{
    langVisibility = !langVisibility;
    langContent.style.opacity = langVisibility === true ? 1 : 0;
    langContent.style.pointerEvents = langVisibility === true ? "all" : "none";
});