
const container = document.getElementById("container");

function createDivs(number){
    const rows = number;
    const cols = number;
    const totalCells = rows * cols;
    const containerSize = 600;

    const cellSize = containerSize/rows;

    for (let i = 0; i < totalCells; i++){
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");

        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        container.appendChild(cell);
    }

};



//const size = prompt("Cuantos cuadros quieres por lado?");

//createDivs(size);

createDivs(16);

