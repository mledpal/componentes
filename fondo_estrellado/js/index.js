const ancho = window.innerWidth;
const alto = window.innerHeight;
let salir = 0;

const contenedor = document.querySelector(".contenedor");
const num_estrellas = 10;
let intervalo_crear_estrellas;

document.addEventListener("DOMContentLoaded", function () {
	// llama a la funcion crear estrellas cada 100 milisegundos
	intervalo_crear_estrellas = setInterval(crearEstrellas, 300);
});

contenedor.addEventListener("click", function (e) {
	// Para el intervalo de crear estrellas
	clearInterval(intervalo_crear_estrellas);
});

const crearEstrellas = () => {
	for (let i = 0; i < num_estrellas; i++) {
		let random_x = Math.floor(Math.random() * ancho);
		let random_y = Math.floor(Math.random() * alto);

		const estrella = document.createElement("div");

		estrella.classList.add("estrella");

		estrella.style.left = `${random_x}px`;
		estrella.style.top = `${random_y}px`;

		setTimeout(() => {
			estrella.remove();
		}, 3000);

		contenedor.appendChild(estrella);
	}
};
