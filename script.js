const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
let colorBtn = document.getElementById("colorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");

const DEFAULT_COLOR = "#1A1A47";
const DEFAULT_MODE = "color";
const DEFAULT_SLIDER_SIZE = 16

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
clearBtn.onclick = () => gridReload();

/** sizeValueUpdate() shows value changes by dragging mouse cursor over the slider */
sizeSlider.onmousemove = (e) => sizeValueUpdate(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

/** Maintains slider newly updated size */
function changeSize(value) {
  setCurrentSize(value);
  sizeValueUpdate(value);
  gridReload();
}

/** Slider size changes */
function sizeValueUpdate(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}

function gridReload() {
  clearGrid();
  setupGrid(currentSize);
}

/* clears shapes in grid */
function clearGrid() {
  grid.innerHTML = "";
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    grid.appendChild(gridElement)
  }
}

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  if (currentMode === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  } else if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = '#fefefe'
  }
}

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

window.onload = () => {
  setupGrid(DEFAULT_SLIDER_SIZE);
  activateButton(DEFAULT_MODE);
};

