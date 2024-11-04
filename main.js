let isDarkTheme = document.body.classList.contains("dark-theme");
const themeSwitch = document.getElementById("theme");

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeSwitch.checked = true;
    document.body.setAttribute("class", "dark-theme");
    isDarkTheme = document.body.classList.contains("dark-theme");
} else if (window.matchMedia('(prefers-color-scheme: light)').matches){
    document.body.setAttribute("class", "light-theme");
    isDarkTheme = document.body.classList.contains("dark-theme");
    themeSwitch.checked = false;
}

function switchTheme() {
    if (isDarkTheme){
        document.body.setAttribute("class", "light-theme");
        isDarkTheme = document.body.classList.contains("dark-theme");
    } else {
        document.body.setAttribute("class", "dark-theme");
        isDarkTheme = document.body.classList.contains("dark-theme");
    }
}