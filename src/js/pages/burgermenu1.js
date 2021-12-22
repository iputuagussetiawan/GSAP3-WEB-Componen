import "../../scss/pages/burgermenu1.scss";

// $("document").ready(function () {
// 	var trigger = $("#hamburger"),
// 		isClosed = true;

// 	trigger.click(function () {
// 		burgerTime();
// 	});

// });

// Your code to run since DOM is loaded and ready

const burgerMenu = document.querySelector("#hamburger");
let isClosed = true;

burgerMenu.onclick = function () {
	console.log("test");
	burgerTime();
};

function burgerTime() {
	console.log("burger time");
	if (isClosed == true) {
		burgerMenu.classList.remove("is-open");
		burgerMenu.classList.add("is-closed");
		isClosed = false;
	} else {
		burgerMenu.classList.remove("is-closed");
		burgerMenu.classList.add("is-open");
		isClosed = true;
	}
}

document.addEventListener("DOMContentLoaded", function (event) {});
