let divArray = [];
let defaultSize = 16;
let defaultColor = 'black';
let rgbSelector;
function createDiv (size) {
    for (let i = 0; i < size*size; i++) {
        divArray.push(document.createElement('div'));
    }
}

const gridContainer = document.querySelector('.grid-container');
function createGrid (size, color) {
    for (let i = 0; i < size*size; i++) {
        divArray[i].classList.add('div-grid');
        divArray[i].style.height = (500 / size) + 'px';
        divArray[i].style.width = (500 / size) + 'px';
        divArray[i].addEventListener('mouseenter', () => {
            divArray[i].style.backgroundColor = colorChanger2(defaultColor);
        });
        gridContainer.appendChild(divArray[i]);
    }
}
createDiv(defaultSize);
createGrid(defaultSize, defaultColor);

function resetGrid (size) {
    for (let i = 0; i < size*size; i++) {
        gridContainer.removeChild(divArray[i]);
    }
    divArray = [];
}

function colorChanger (color) {
    for (let i = 0; i < defaultSize * defaultSize; i++) {
        divArray[i].removeEventListener('mouseenter', colorChanger2);
        divArray[i].addEventListener('mouseenter', () => {
            divArray[i].style.backgroundColor = colorChanger2(color);
        });
    }
    rgbSelector = false;
}

function colorChanger2 (color) {
    if (rgbSelector == true) {
        defaultColor = colorRGB();
    } else {
        defaultColor = color;
    }
    return defaultColor;
}

function colorRGB () {
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')'; 
    return rgb;
}

function gridResizer (size, color) {
    resetGrid(defaultSize);
    defaultSize = size;
    createDiv(defaultSize);
    createGrid(defaultSize, color);
}

let pressedS;
let pressedC;
function btnPressed (btn) {
    if (btn.classList.contains('size-btn')) {
        if (pressedS != null) {
            pressedS.classList.remove('btn-pressed');
    }
        btn.classList.add('btn-pressed');
    } else {
        if (pressedC != null) {
            pressedC.classList.remove('btn-pressed');
    }
        btn.classList.add('btn-pressed');
    }
}

const sixteenBtn = document.querySelector('#sixteen');
sixteenBtn.addEventListener('click', () => {
    gridResizer(16, defaultColor);
    btnPressed(sixteenBtn);
    pressedS = sixteenBtn;
});

const twentyBtn = document.querySelector('#twenty');
twentyBtn.addEventListener('click', () => {
    gridResizer(20, defaultColor);
    btnPressed(twentyBtn);
    pressedS = twentyBtn;
});

const fiftyBtn = document.querySelector('#fifty');
fiftyBtn.addEventListener('click', () => {
    gridResizer(50, defaultColor);
    btnPressed(fiftyBtn);
    pressedS = fiftyBtn;
});

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', () => {
    resetGrid(defaultSize);
    let newSize = prompt('Please enter a new size', '');
    if (newSize > 100) {
        alert('Too big! Staying at ' + defaultSize + 'x' + defaultSize);
    } else {
        defaultSize = newSize;
    }
    createDiv(defaultSize);
    createGrid(defaultSize, defaultColor);
});

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', () => {
    colorChanger('black');
    btnPressed(blackBtn);
    pressedC = blackBtn
});

const orangeBtn = document.querySelector('#orange');
orangeBtn.addEventListener('click', () => {
    colorChanger('orange');
    btnPressed(orangeBtn);
    pressedC = orangeBtn;
});

const cadetBlueBtn = document.querySelector('#cadet-blue');
cadetBlueBtn.addEventListener('click', () => {
    colorChanger('#5F9EA0');
    btnPressed(cadetBlueBtn);
    pressedC = cadetBlueBtn;
});

const rgbBtn = document.querySelector('#rgb');
rgbBtn.addEventListener('click', () => {
    colorChanger('rgb');
    btnPressed(rgbBtn);
    pressedC = rgbBtn;
    rgbSelector = true;
});