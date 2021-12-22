import "../../scss/pages/navigation2.scss";

import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const burgerMenu = document.querySelector("#btn");

let tl = gsap.timeline({ paused: true });
tl.to(".bar", {
	cycle: {
		left: [-40, -24, -60],
		rotation: [5, 0, -7],
	},
	duration: 0.2,
	stagger: 0.1,
});
tl.to(".menu", { transform: "translateX(0%)", duration: 1 });
tl.to(".hamburger-btn", { left: "50%", duration: 1 }, "-=1");
tl.to(
	".bar",
	{
		cycle: {
			rotation: [-45, 0, 45],
			left: [0, -100, 0],
			top: [20, 0, -20],
		},
		duration: 1,
		stagger: 0.1,
	},
	"-=1"
);

burgerMenu.onclick = function () {
	if (tl.progress() < 1) {
		tl.play();
	} else {
		tl.reverse();
	}
};
