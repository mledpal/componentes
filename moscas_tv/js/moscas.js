// Autor : Miguel Ledesma Palacios
// Fecha : 16/11/2024
// web: www.ledemar.es

const logo = document.querySelector("#logo img");
const container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", function () {
	const ancho_container = (window.innerWidth * 0.8).toFixed(0);
	container.style.width = `${ancho_container}px`;

	const numero_columnas = 30;
	const empezar_a_desaparecer = 10000;
	const tiempo_desaparecer = 2000;

	const ancho = container.offsetWidth;
	const alto = container.offsetHeight;

	const ancho_div = Math.floor(ancho / numero_columnas);

	container.style.gridTemplateColumns = `repeat(${numero_columnas}, ${ancho_div}px)`;

	const filas = Math.floor(alto / ancho_div);

	// Calcular el máximo delay basado en la distancia más grande
	const max_distance = Math.sqrt((filas - 1) ** 2 + (numero_columnas - 1) ** 2);

	for (let i = 0; i < numero_columnas * filas; i++) {
		const div = document.createElement("div");
		div.style.width = ancho_div + "px";
		div.setAttribute("data-id", i);

		// Calcular fila y columna de cada div
		const fila = Math.floor(i / numero_columnas);
		const columna = i % numero_columnas;

		// Calcular distancia desde la esquina superior izquierda
		const distance = Math.sqrt(fila ** 2 + columna ** 2);

		// Calcular delay proporcional a la distancia
		const delay = (distance / max_distance) * (tiempo_desaparecer / 1000);
		div.style.animationDelay = `${delay}s`;

		div.classList.add("mosca");
		container.appendChild(div);
	}

	setTimeout(function () {
		logo.classList.add("aparecerTexto");
	}, tiempo_desaparecer - 1000);
	setTimeout(() => {
		logo.classList.remove("aparecerTexto");
		logo.classList.add("desaparecerTexto");
	}, empezar_a_desaparecer - 500);

	setTimeout(function () {
		const moscas = document.querySelectorAll(".mosca");
		moscas.forEach(function (mosca) {
			mosca.classList.add("desaparecer");
		});
	}, empezar_a_desaparecer);
});
