const root = document.documentElement;

root.dataset.theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

document.getElementById("theme-toggle").onclick = () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
};
