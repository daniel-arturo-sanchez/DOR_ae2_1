
const themeSwitch = document.getElementById("theme");
const btnHighContrast = document.getElementById("high-contrast");

const isDarkTheme = () => document.body.classList.contains("dark-theme") || document.body.classList.contains("dark-theme-high-contrast");
const isHighContrast = () => document.body.classList.contains("dark-theme-high-contrast") || document.body.classList.contains("light-theme-high-contrast");

isDarkTheme;
isHighContrast;

function switchTheme() {
    if (isDarkTheme()){
        if(isHighContrast()){
            document.body.setAttribute("class", "light-theme-high-contrast");
        } else {
            document.body.setAttribute("class", "light-theme");
        }
    } else {
        if(isHighContrast()){
            document.body.setAttribute("class", "dark-theme-high-contrast");
        } else {
            document.body.setAttribute("class", "dark-theme");
        }
    }
}

function switchHighContrast() {
    if (isHighContrast()){
        if(isDarkTheme()){
            document.body.setAttribute("class", "dark-theme");
        } else {
            document.body.setAttribute("class", "light-theme");
        }
    } else {
        if(isDarkTheme()){
            document.body.setAttribute("class", "dark-theme-high-contrast");
        } else {
            document.body.setAttribute("class", "light-theme-high-contrast");
        }
    }
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeSwitch.checked = true;
    document.body.setAttribute("class", "dark-theme");
    isDarkTheme;
} else {
    document.body.setAttribute("class", "light-theme");
    isDarkTheme;
    themeSwitch.checked = false;
}

