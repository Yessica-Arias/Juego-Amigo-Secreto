// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaArrayAmigos = [];

function agregarAmigo () {
    let nombresDeAmigos = document.getElementById('amigo').value;
    if (nombresDeAmigos === '') {
        alert('¡Error!, Porfavor Inserte un Nombre.');
    } else {
        listaArrayAmigos.push(nombresDeAmigos);
        agregarNombres();
    }
  document.getElementById('amigo').value = ''; 
  console.log(listaArrayAmigos) 
} 

function agregarNombres () {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    for (let i = 0; i < listaArrayAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaArrayAmigos[i];
        listaHTML.appendChild(item);
    }
    console.log(listaHTML)
}

function sortearAmigo () {
    if (listaArrayAmigos.length === 0) {
        alert('No has Ingresado Nombres')
        return;
    } 

    let indiceAleatorio = Math.floor(Math.random() * listaArrayAmigos.length);
    let amigoSorteado = listaArrayAmigos[indiceAleatorio];    
    let contenedorResultado = document.getElementById('resultado');
    contenedorResultado.innerHTML = `${amigoSorteado}, fue el amigo secreto seleccionado 🎉`;

}
