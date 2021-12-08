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
            divArray[i].style.backgroundColor = defaultColor;
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
    for (let i = 0; i < defaultSize * defaultSize; i++) {
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

const sixteenBtn = document.querySelector('#sixteen');
sixteenBtn.addEventListener('click', () => {
    gridResizer(16, defaultColor);
});

const twentyBtn = document.querySelector('#twenty');
twentyBtn.addEventListener('click', () => {
    gridResizer(20, defaultColor);
});

const fiftyBtn = document.querySelector('#fifty');
fiftyBtn.addEventListener('click', () => {
    gridResizer(50, defaultColor);
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