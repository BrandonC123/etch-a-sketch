let divArray = [];
let size = 32;
for (let i = 0; i < size*size; i++) {
    divArray.push(document.createElement('div'));
}

const gridContainer = document.querySelector('.grid-container');
for (let i = 0; i < size*size; i++) {
    divArray[i].classList.add('div-grid');
    divArray[i].style.height = (500 / size) + 'px';
    divArray[i].style.width = (500 / size) + 'px';
    divArray[i].addEventListener('mouseenter', () => {
        divArray[i].classList.add('grid-color');
    });
    gridContainer.appendChild(divArray[i]);
}

function resetGrid () {
    for (let i = 0; i < size*size; i++) {
        divArray[i].style.backgroundColor = 'white';
    }
}

const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', () => {
    resetGrid();
});