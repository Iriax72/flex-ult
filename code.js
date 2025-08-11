// variables
const orange = "#fb6710"
const darkColor = "#202050"
const violet = "#502050"
const pink = "#dc30ef"

const btnRand = document.getElementById("btnRandomTheme");
const btnDark = document.getElementById("btnDarkTheme");
const btnLight = document.getElementById("btnLightTheme");
const btnPink = document.getElementById("btnPinkTheme");
const btnOrange = document.getElementById("btnOrangeTheme");

const body = document.getElementById("body");
const header = document.getElementById("header")
const main = document.getElementById("main")
const footer = document.getElementById("footer");
const siteParts = [header, main, footer]
const sections = document.getElementsByTagName("section")
const texts = document.getElementsByClassName("text");
const buttons = document.getElementsByClassName("btn");

const bgColor = {
    "dark": darkColor,
    "light": "#d0d0a0",
    "pink": pink,
    "orange": violet
}
const siteColor = {
    "dark": "darkblue",
    "light": darkColor,
    "pink": darkColor,
    "orange": orange
}
const sectionColor = {
    "dark": darkColor,
    "light": "#e0e0e0",
    "pink": pink,
    "orange": violet
}
const textColor = {
    "dark": "#e0e0eb",
    "light": "#000000",
    "pink": pink,
    "orange": orange
}
const buttonsColor = {
    "dark": "#cacadd",
    "light": "#4d4d4d",
    "pink": pink,
    "orange": orange
}

let currentTheme = "dark";
const themes = ["dark", "light", "pink", "orange"];

// fonctions
function randInt(min, max){
    return Math.round(Math.random * (max - min) + min);
}

function randTheme(){
    const possibleThemes = themes.filter(themes => themes !== currentTheme);
    return possibleThemes[randInt(0, possibleThemes.length - 1)];
}

function setTheme(theme){
    currentTheme = theme;
    themeApply(currentTheme);
}

function themeApply(theme){
    body.style.backgroundColor = bgColor[theme];
    
    texts.forEach(element => {
        element.style.color = textColor[theme]
    })

    buttons.forEach(element => {
        element.style.backgroundColor = buttonsColor[theme];
        element.style.color = textColor[theme]
    })

    siteParts.forEach(element => {
        element.style.backgroundColor = siteColor[theme];
    })

    sectionColor.forEach(element => {
        element.style.backgroundColor = sectionColor[theme];
    })
}

// setup
setTheme("dark");

// code
btnRand.addEventListener("click", setTheme(randTheme()));
btnDark.addEventListener("click", setTheme("dark"));
btnLight.addEventListener("click", setTheme("light"));
btnPink.addEventListener("click", setTheme("pink"));
btnOrange.addEventListener("click", setTheme("orange"));