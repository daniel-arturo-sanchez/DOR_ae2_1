
const themeSwitch = document.getElementById("theme");
const btnHighContrast = document.getElementById("high-contrast");

let isDarkTheme = document.body.classList.contains("dark-theme");
let isHighContrast = document.body.classList.contains("high-contrast");

function switchTheme() {
    if (isDarkTheme){
        document.body.setAttribute("class", "light-theme");
        isDarkTheme = document.body.classList.contains("dark-theme");
    } else {
        document.body.setAttribute("class", "dark-theme");
        isDarkTheme = document.body.classList.contains("dark-theme");
    }
}

function switchHighContrast() {
    if (isHighContrast){
        if(isDarkTheme){
            document.body.setAttribute("class", "dark-theme");
        } else {
            document.body.setAttribute("class", "light-theme");
        }
        isHighContrast = document.body.classList.contains("high-contrast");
    } else {
        if(isDarkTheme){
            document.body.setAttribute("class", "dark-theme high-contrast");
        } else {
            document.body.setAttribute("class", "light-theme high-contrast");
        }
        isHighContrast = document.body.classList.contains("high-contrast");
    }
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeSwitch.checked = true;
    document.body.setAttribute("class", "dark-theme");
    isDarkTheme = document.body.classList.contains("dark-theme");
} else {
    document.body.setAttribute("class", "light-theme");
    isDarkTheme = document.body.classList.contains("dark-theme");
    themeSwitch.checked = false;
}

