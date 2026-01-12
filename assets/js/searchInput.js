const searchBox = document.getElementById("searchBox");
const input = searchBox.querySelector(".search-input");

searchBox.addEventListener("click", (e) => {
    e.stopPropagation();

    const opened = searchBox.classList.toggle("is-open");
    if (opened) input.focus();
});

document.addEventListener("click", () => {
    searchBox.classList.remove("is-open");
});