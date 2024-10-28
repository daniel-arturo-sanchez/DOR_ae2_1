let isDarkTheme = document.body.classList.contains("dark-theme");

function switchTheme() {
    if (isDarkTheme){
        document.body.removeAttribute("class","dark-theme");
        isDarkTheme = document.body.classList.contains("dark-theme");
    } else {
        document.body.setAttribute("class", "dark-theme");
        isDarkTheme = document.body.classList.contains("dark-theme");
    }
}