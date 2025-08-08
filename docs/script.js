let currentRotation = { x: 0, y: 0 };

function rotateCube(direction) {
    switch(direction) {
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
    document.getElementById('cube').style.transform = 
        `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;
}

function reset() {
    currentRotation = { x: 0, y: 0 };
    document.getElementById('cube').style.transform = 'rotateX(0deg) rotateY(0deg)';
}