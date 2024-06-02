
const container = document.getElementById("container");
let isMouseDown = false;


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
    cell.addEventListener("click", () => {
        cell.style.backgroundColor = "black";
    });

    cell.addEventListener("mouseover", () => {
        if (isMouseDown) {
            cell.style.backgroundColor = "black";
        }
    });

    container.appendChild(cell);
        }

}

document.body.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.body.addEventListener("mouseup", () => {
    isMouseDown = false;
});

numero = 16

const botones = document.createElement("div");
botones.classList.add("botones")
document.body.appendChild(botones);

button = document.createElement("button")
button.classList.add ("button")
button.textContent = "TAMAÑO"
button.addEventListener("click", () => {
    numero = prompt("¿Rejustar tamaño?", "No se recomienda mas de 100");
    document.getElementById("container").innerHTML="";
    createDivs(numero);
});
botones.appendChild(button)


limpiar = document.createElement("button");
limpiar.classList.add("button");
limpiar.textContent = "LIMPIAR";
limpiar.addEventListener("click", () => {
    let conf = confirm("¿Quieres limpiar?");
    if (conf = true){
        document.getElementById("container").innerHTML="";
    createDivs(numero);
    }
})
botones.appendChild(limpiar);

reiniciar = document.createElement("button");
reiniciar.classList.add("button");
reiniciar.textContent = "REINICIAR";
reiniciar.addEventListener("click", () => {
    let conf = confirm("¿Quieres reiniciar?");
    if (conf = true){
        document.getElementById("container").innerHTML="";
    createDivs(16);
}})
botones.appendChild(reiniciar);

titulo = document.createElement("h1");
titulo.classList.add("titulo")
titulo.textContent = "PIZARRA";

document.body.appendChild(titulo)

createDivs(numero);





//const size = prompt("Cuantos cuadros quieres por lado?");

//createDivs(size);





