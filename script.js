const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker');
const colorMode = document.getElementById('colorMode');
const rainbowMode = document.getElementById('rainbowMode');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const sizeSlider = document.getElementById('sizeSlider');
console.log(sizeSlider);


// for(let i = 0; i <= 256; i++) {
//     const item = document.createElement('div');
//     item.classList.add("item", "item " + i);
//     grid.appendChild(item);
// }

function makeCells(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
    //   cell.innerText = (i + 1);
      grid.appendChild(cell).className = "grid-item";
    };
  };
  
  makeCells(16, 16);