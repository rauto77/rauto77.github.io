// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Obtener y limpiar el texto del campo de entrada

    if (nombre) {
        amigos.push(nombre); // Agregar el nombre al arreglo

        // Actualizar la lista en pantalla
        const lista = document.getElementById("listaAmigos");
        const item = document.createElement("li");
        item.textContent = nombre; // Mostrar el nombre
        item.className = "amigo"; // Clase para estilo
        lista.appendChild(item);

        // Limpiar el campo de entrada
        input.value = "";
    } else {
        alert("Por favor, escribe un nombre antes de añadirlo.");
    }
}

// Función para sortear al amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Por favor, añade al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
    const amigoSecreto = amigos[indiceAleatorio]; // Obtener el nombre correspondiente

    // Mostrar el resultado en la lista de resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="amigo">El amigo secreto es: ${amigoSecreto}</li>`;
}