// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];
const listaElement = document.getElementById('listaAmigos');
const resultadoElement = document.getElementById('resultado');

function agregarAmigo() {
    const inputElement = document.getElementById('amigo');
    const nombreAmigo = inputElement.value.trim();

    if (nombreAmigo) {
        listaAmigos.push(nombreAmigo);
        actualizarLista();
        inputElement.value = '';
    } else {
        alert('El campo de nombre no puede estar vacío. Por favor, ingresa un nombre.');
    }
}

function actualizarLista() {
    listaElement.innerHTML = '';
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 1) {
        alert('Debes añadir al menos un amigo para hacer un sorteo.');
        return;
    }

    const amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    resultadoElement.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}
