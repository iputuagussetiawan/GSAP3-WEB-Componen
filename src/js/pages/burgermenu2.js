import "../../scss/pages/burgermenu2.scss";

const burgerMenu = document.querySelector("#hamburger");
let isClosed = false;

burgerMenu.onclick = function () {
	console.log("test");
	burgerTime();
};

function burgerTime() {
	console.log("burger time");
	if (isClosed == true) {
		burgerMenu.classList.remove("open");
		burgerMenu.classList.add("closed");
		isClosed = false;
	} else {
		burgerMenu.classList.remove("closed");
		burgerMenu.classList.add("open");
		isClosed = true;
	}
}

// document.addEventListener("DOMContentLoaded", function (event) {});
