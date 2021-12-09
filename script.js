let divArray = [];
let defaultSize = 16;
let defaultColor = 'black';
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
            colorChanger(defaultColor);
            divArray[i].style.backgroundColor = color;
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
    if (color != 'rgb') {
        defaultColor = color;
    }
    for (let i = 0; i < defaultSize * defaultSize; i++) {
        let test;
        if (color == 'rgb') {
            let r = Math.floor(Math.random()* 256);
            let g = Math.floor(Math.random()* 256);
            let b = Math.floor(Math.random()* 256);
            test = 'rgb(' + r + ',' + g + ',' + b + ')'; 
            color = test;
            defaultColor = test;
        }
        divArray[i].removeEventListener('mouseenter', colorChanger);
        divArray[i].addEventListener('mouseenter', () => {
            divArray[i].style.backgroundColor = defaultColor;
        });
    }
}

function gridResizer (size, color) {
    resetGrid(defaultSize);
    defaultSize = size;
    createDiv(defaultSize);
    createGrid(defaultSize, color);
}

let pressed;
function btnPressed (btn) {
    if (pressed != null) {
        pressed.classList.remove('btn-pressed');
    }
    btn.classList.add('btn-pressed');
}

const sixteenBtn = document.querySelector('#sixteen');
sixteenBtn.addEventListener('click', () => {
    gridResizer(16, defaultColor);
    btnPressed(sixteenBtn);
    pressed = sixteenBtn;
});

const twentyBtn = document.querySelector('#twenty');
twentyBtn.addEventListener('click', () => {
    gridResizer(20, defaultColor);
    btnPressed(twentyBtn);
    pressed = twentyBtn;
});

const fiftyBtn = document.querySelector('#fifty');
fiftyBtn.addEventListener('click', () => {
    gridResizer(50, defaultColor);
    btnPressed(fiftyBtn);
    pressed = fiftyBtn;
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

const orangeBtn = document.querySelector('#orange');
orangeBtn.addEventListener('click', () => {
    colorChanger('orange');
});

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', () => {
    colorChanger('black');
});

const cadetBlueBtn = document.querySelector('#cadet-blue');
cadetBlueBtn.addEventListener('click', () => {
    colorChanger('#5F9EA0');
});

const rgbBtn = document.querySelector('#rgb');
rgbBtn.addEventListener('click', () => {
    colorChanger('rgb');
});