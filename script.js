const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

yesBtn.addEventListener("click", () => {
    result.innerHTML = "Tur murot hihot e xumai ase";
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth * 0.6;
    const y = Math.random() * window.innerHeight * 0.6;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
