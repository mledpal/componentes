// Autor : Miguel Ledesma Palacios
// Fecha : 16/11/2024
// web: www.ledemar.es

const logo = document.querySelector("#logo img");
const container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", function () {
	const ancho_container = (window.innerWidth * 0.8).toFixed(0);
	container.style.width = `${ancho_container}px`;

	const numero_columnas = 50;
	const empezar_a_desaparecer = 5000;
	const tiempo_desaparecer = 2000;

	const ancho = container.offsetWidth;
	const alto = container.offsetHeight;

	const ancho_div = Math.floor(ancho / numero_columnas);

	container.style.gridTemplateColumns = `repeat(${numero_columnas}, ${ancho_div}px)`;

	const filas = Math.floor(alto / ancho_div);

	// TVEO TELEVISIÓN
	const startColor = [102, 195, 207]; // RGB de var(--color-azul-claro)
	const endColor = [9, 68, 98]; // RGB de var(--color-azul-oscuro)

	// FPV EN JAÉN
	// const startColor = [77, 211, 39];
	// const endColor = [1, 1, 1];

	for (let i = 0; i < numero_columnas * filas; i++) {
		const div = document.createElement("div");
		div.style.width = ancho_div + "px";
		div.setAttribute("data-id", i);

		const fila = Math.floor(i / numero_columnas);
		const columna = i % numero_columnas;

		const normalizedCol = columna / (numero_columnas - 1);
		const normalizedRow = fila / (filas - 1);

		const t = (normalizedCol + normalizedRow) / 2;
		const interpolatedColor = startColor.map((start, index) =>
			Math.round(start + t * (endColor[index] - start))
		);
		div.style.backgroundColor = `rgb(${interpolatedColor.join(",")})`;

		// Agregar animaciones
		div.style.animationDelay = `${(fila + columna) * 0.05}s`;
		div.classList.add("mosca");

		container.appendChild(div);
	}

	setTimeout(function () {
		logo.classList.add("aparecerTexto");
	}, tiempo_desaparecer - 2000);
	setTimeout(() => {
		logo.classList.remove("aparecerTexto");
		logo.classList.add("desaparecerTexto");
	}, empezar_a_desaparecer + 500);

	setTimeout(function () {
		const moscas = document.querySelectorAll(".mosca");
		moscas.forEach(function (mosca) {
			mosca.classList.add("desaparecer");
		});
	}, empezar_a_desaparecer);
});
