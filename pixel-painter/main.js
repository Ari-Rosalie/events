const colorPalette = document.querySelectorAll('.color');
const currentColor = document.querySelector('#current-color')
const main = document.getElementById("canvas")

for (let i = 0; i < 100; i++) {
    const newCell = document.createElement("div");
    newCell.className = "cell"
    main.appendChild(newCell)
}

for (let color of colorPalette) {
    color.addEventListener("click", (e) => {
        currentColor.style.background = e.target.style.background;
    });
}

const cells = document.querySelectorAll('.cell');
for (let cell of cells) {
    cell.addEventListener('click', (e) => {
        e.target.style.background = currentColor.style.background;
    });
}
