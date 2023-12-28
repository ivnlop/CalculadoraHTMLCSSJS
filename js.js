// Variable para almacenar el estado del tablero (vacío al inicio)
let tablero = ["", "", "", "", "", "", "", "", ""];
// Variable para llevar el registro de quién es el jugador actual (jugador 'X' o 'O')
let jugadorActual = "X";

// Función para hacer un movimiento en el tablero
function hacerMovimiento(indice) {
  // Si la casilla ya está ocupada o el juego ya terminó, no hacer nada
  if (tablero[indice] !== "" || hayGanador() || tableroCompleto()) {
    return;
  }

  // Realizar el movimiento del jugador actual en la casilla seleccionada
  tablero[indice] = jugadorActual;

  // Actualizar la visualización del tablero en la página
  document.querySelectorAll(".casilla")[indice].textContent = jugadorActual;

  // Verificar si hay un ganador después del movimiento
  if (hayGanador()) {
    alert(`¡El jugador ${jugadorActual} ha ganado!`);
    reiniciarJuego();
    return;
  }

  // Verificar si el tablero está completo (empate)
  if (tableroCompleto()) {
    alert("¡Empate! El juego ha terminado sin ganador.");
    reiniciarJuego();
    return;
  }

  // Cambiar el turno al siguiente jugador
  cambiarTurno();
}

// Función para cambiar el turno al siguiente jugador
function cambiarTurno() {
  jugadorActual = jugadorActual === "X" ? "O" : "X";
}

// Función para verificar si hay un ganador
function hayGanador() {
  const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6]             // Diagonales
  ];

  for (const combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return true;
    }
  }

  return false;
}

// Función para verificar si el tablero está completo (empate)
function tableroCompleto() {
  return tablero.every(casilla => casilla !== "");
}

// Función para reiniciar el juego
function reiniciarJuego() {
  // Reiniciar el estado del tablero
  tablero = ["", "", "", "", "", "", "", "", ""];
  jugadorActual = "X";

  // Limpiar la visualización del tablero en la página
  document.querySelectorAll(".casilla").forEach(casilla => casilla.textContent = "");
}
