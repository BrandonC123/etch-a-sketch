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
    defaultColor = color;
}

const sixteenBtn = document.querySelector('.sixteen');
sixteenBtn.addEventListener('click', () => {
    resetGrid(defaultSize);
    defaultSize = 16;
    createDiv(defaultSize);
    createGrid(defaultSize, defaultColor);
});

const twentyBtn = document.querySelector('.twenty');
twentyBtn.addEventListener('click', () => {
    resetGrid(defaultSize);
    defaultSize = 20;
    createDiv(defaultSize);
    createGrid(defaultSize, defaultColor);
});

const fiftyBtn = document.querySelector('.fifty');
fiftyBtn.addEventListener('click', () => {
    resetGrid(defaultSize);
    defaultSize = 50;
    createDiv(defaultSize);
    createGrid(defaultSize, defaultColor);
});

const resetBtn = document.querySelector('.reset-btn');
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