let divArray = [];
for (let i = 0; i < 256; i++) {
    divArray.push(document.createElement('div'));
}

const gridContainer = document.querySelector('.grid-container');
for (let i = 0; i < 256; i++) {
    divArray[i].classList.add('div-grid');
    gridContainer.appendChild(divArray[i]);
}

for (let i = 0; i < 256; i++) {
    divArray[i].addEventListener('mouseenter', () => {
        console.log('test');
        divArray[i].classList.add('grid-color');
    });
}