const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
let colorBtn = document.getElementById("colorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");

function makeCells(rows, cols) {
  grid.style.setProperty("--grid-rows", rows);
  grid.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    //   cell.innerText = (i + 1);
    grid.appendChild(cell).className = "grid-item";
  }
}

makeCells(16, 16);

const DEFAULT_COLOR = "#1A1A47";
const DEFAULT_MODE = "color";
const DEFAULT_SLIDER_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SLIDER_SIZE;

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

/** oninput triggers setCurrentColor(). It grabs selected color value in colorPicker */
colorPicker.oninput = (e) => setCurrentColor(e.target.value);

/** onclick triggers setCurrentMode() to change mode to the specific button clicked */
colorBtn.onclick = () => setCurrentMode("color");
rainbowBtn.onclick = () => setCurrentMode("rainbow");
eraserBtn.onclick = () => setCurrentMode("eraser");
clearBtn.onclick = () => reloadGrid();

/** sizeValueUpdate() shows value changes by dragging mouse cursor over the slider */
sizeSlider.onmousemove = (e) => sizeValueUpdate(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

/** Called in setCurrentMode(). Clicked button activates and styled with theme color */
function activateButton(newMode) {
  if (currentMode === "rainbow") {
    rainbowBtn.classList.remove("active");
  } else if (currentMode === "color") {
    colorBtn.classList.remove("active");
  } else if (currentMode === "eraser") {
    eraserBtn.classList.remove("active");
  }

  if (newMode === "rainbow") {
    rainbowBtn.classList.add("active");
  } else if (newMode === "color") {
    colorBtn.classList.add("active");
  } else if (newMode === "eraser") {
    eraserBtn.classList.add("active");
  }
}

/** Slider size changes */
function sizeValueUpdate(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}

/** Maintains slider newly updated size */
function changeSize(value) {
  setCurrentSize(value);
  sizeValueUpdate(value);
}
