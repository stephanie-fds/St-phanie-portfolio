const burger = document.getElementById("burger-button");
const nav = document.querySelector(".main_pages");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
});