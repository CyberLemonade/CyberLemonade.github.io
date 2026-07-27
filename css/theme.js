const root = document.documentElement;
const button = document.getElementById("theme-toggle");

button.onclick = () => {

    if (root.dataset.theme === "dark") {

        root.dataset.theme = "light";
        button.textContent = "☽";

    } else {

        root.dataset.theme = "dark";
        button.textContent = "☀︎";

    }

};
