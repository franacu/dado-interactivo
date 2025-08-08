let currentRotation = { x: 0, y: 0 };
const cube = document.getElementById('cube');
const girarBtn = document.getElementById('girarBtn');

// Definimos las rotaciones exactas para cada número del dado
const faces = [
    { num: 1, x: 0, y: 0 },       // Frente
    { num: 2, x: 0, y: 180 },     // Atrás
    { num: 3, x: 0, y: -90 },     // Derecha
    { num: 4, x: 0, y: 90 },      // Izquierda
    { num: 5, x: -90, y: 0 },     // Arriba
    { num: 6, x: 90, y: 0 }       // Abajo
];

let disponibles = [...faces]; // Copia de las caras sin usar

function girarCubo() {
    if (disponibles.length === 0) {
        girarBtn.disabled = true;
        girarBtn.textContent = "¡Todos salieron!";
        return;
    }

    // Elegir cara aleatoria
    const index = Math.floor(Math.random() * disponibles.length);
    const face = disponibles[index];

    // Rotar hacia la cara
    currentRotation.x = face.x;
    currentRotation.y = face.y;
    cube.style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;

    // Quitar la cara elegida de la lista
    disponibles.splice(index, 1);

    // Bloqueo temporal para fluidez
    girarBtn.disabled = true;
    setTimeout(() => {
        girarBtn.disabled = false;
    }, 1000);
}


girarBtn.addEventListener('click', girarCubo);