function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const mainElement = document.getElementById("main");
mainElement.innerText = getRndInteger(1, 7);

window.addEventListener("click", () => {
	mainElement.innerText = getRndInteger(1, 7);
});
