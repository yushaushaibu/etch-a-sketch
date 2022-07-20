const grid = document.getElementById('grid');

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