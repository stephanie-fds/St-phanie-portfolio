const burger = document.getElementById("burger-button");
const nav = document.querySelector(".main_pages");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
});

// Icon + open/close de card curriculum

const cards = document.querySelectorAll('.card-cv');

cards.forEach(card => {
    const opener = card.querySelector('.opener');
    const icon = card.querySelector('.toggle-icon');

    opener.addEventListener('click', () => {
        card.classList.toggle('open');

        if (card.classList.contains('open')) {
            icon.src = "icons/minus.svg";
            icon.alt = "Icon less";
        } else {
            icon.src = "icons/plus.svg";
            icon.alt = "Icon more";
        }
    });
});