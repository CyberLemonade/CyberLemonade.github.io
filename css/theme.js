const root = document.documentElement;

document.getElementById("theme-toggle").onclick = () => {
    root.dataset.theme =
        root.dataset.theme === "dark" ? "light" : "dark";
};
