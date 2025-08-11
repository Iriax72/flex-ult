// variables
const btnRand = document.getElementById("btnRandomTheme");
const btnDark = document.getElementById("btnDarkTheme");
const btnLight = document.getElementById("btnLightTheme");
const btnPink = document.getElementById("btnPinkTheme");
const btnOrange = document.getElementById("btnOrangeTheme");

const body = document.getElementById("body");
const texts = document.getElementsByClassName("text");
const buttons = document.getElementsByClassName("btn");

const bgColor = {
    "dark": "#050020",
    "light": "#ffffff",
    "pink": "#fd01ed",
    "orange": "#8918de"
}
const textColor = {
    "dark": "#e0e0eb",
    "light": "#000000",
    "pink": "#cc00ff",
    "orange": "#fb6710"
}
const buttonsColor = {
    "dark": "#cacadd",
    "light": "#8d8d8d",
    "pink": "#e236df",
    "orange": "#fb6710"
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
}

// setup
setTheme("dark");

// code
btnRand.addEventListener("click", currentTheme = setTheme(randTheme()));
btnDark.addEventListener("click", currentTheme = setTheme("dark"));
btnLight.addEventListener("click", currentTheme = setTheme("light"));
btnPink.addEventListener("click", currentTheme = setTheme("pink"));
btnOrange.addEventListener("click", currentTheme = setTheme("orange"));p