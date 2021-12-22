import "../../scss/pages/burgermenu.scss";
document.querySelector("button").addEventListener("click", function (e) {
	e.currentTarget.classList.toggle("on");
});
