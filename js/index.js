// Theme Switcher
let lightMode = localStorage.getItem("lightMode");
const lightModeSwitcher = document.querySelector('#light-mode-switcher');

const enableLightMode = () => {
    document.body.classList.add("lightMode");
    localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
    document.body.classList.remove("lightMode");
    localStorage.setItem("lightMode", null);
};

if (lightMode === "enabled") {
    enableLightMode();
}

lightModeSwitcher.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightMode");
    if (lightMode !== "enabled") {
        enableLightMode();
    } else {
        disableLightMode();
    }
});