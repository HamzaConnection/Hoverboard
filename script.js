const container = document.getElementById('container')

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', (e) => setColor(e.target))
    square.addEventListener('mouseout', (e) => removeColor(e.target))
    container.appendChild(square)

}


function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
}


function removeColor(element) {
    element.style.backgroundColor = ""
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}