document.addEventListener("DOMContentLoaded", function () {
	const botones = document.querySelectorAll(".btn");

	botones.forEach((btn) => {
		btn.addEventListener("click", function () {
			this.classList.add("clicked");
			setTimeout(() => {
				this.classList.remove("clicked");
			}, 300);
		});
	});
});
