let currentRotation = { x: 0, y: 0 };
const directions = ['left', 'right', 'up', 'down'];
const cube = document.getElementById('cube');
const girarBtn = document.getElementById('girarBtn');

function rotateRandom() {
    // Elige una dirección aleatoria
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    
    // Aplica la rotación
    switch(randomDirection) {
        case 'left':
            currentRotation.y -= 90;
            break;
        case 'right':
            currentRotation.y += 90;
            break;
        case 'up':
            currentRotation.x += 90;
            break;
        case 'down':
            currentRotation.x -= 90;
            break;
    }
    
    cube.style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;
    
    // Efecto visual: deshabilita el botón brevemente
    girarBtn.disabled = true;
    setTimeout(() => {
        girarBtn.disabled = false;
    }, 1000);
}

// Evento para el botón
girarBtn.addEventListener('click', rotateRandom);