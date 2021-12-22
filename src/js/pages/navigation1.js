import "../../scss/pages/navigation1.scss";

import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

var burgerTop = document.querySelector(".top");
var burgerBot = document.querySelector(".bottom");
var burgerMid = document.querySelector(".middle");
var burgerSidebar = document.querySelector(".sidebar");
var sideText = document.querySelectorAll(".sidetext");
var burgerWhole = document.querySelectorAll(".top, .bottom, .middle");

const burgerMenu = document.querySelector(".burger-click-region");

let tl = gsap.timeline({ paused: true, reversed: true });
tl.to(burgerTop, { y: 11, yoyo: true, ease: "power1.easeInOut", duration: 0.7 })
	.to(
		burgerBot,
		{ y: -11, yoyo: true, ease: "power1.easeInOut", duration: 0.7 },
		"-=0.7"
	)
	.to(burgerTop, { rotation: 585, duration: 1 })
	.to(burgerMid, { rotation: 585, duration: 1 }, "-=1")
	.to(burgerBot, { rotation: 675, duration: 1 }, "-=1")
	.to(burgerSidebar, { x: 550, duration: 1, ease: "power1.easeOut" }, "-=1")
	.from(
		sideText,
		{ opacity: 0, y: 50, duration: 0.5, stagger: 0.5 },
		"-=0.5"
	);

burgerMenu.onclick = function () {
	tl.reversed() ? tl.play() : tl.reverse();
};
