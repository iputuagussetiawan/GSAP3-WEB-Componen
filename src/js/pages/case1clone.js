//STR CSS IMPORT
import "../../scss/pages/case1clone.scss";
//END CSS IMPORT

console.clear();

//STR JS IMPORT
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
//END JS IMPORT

//STR REGISTER MODUL
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
//END REGISTER MDOUL

//STR DECLARATION VAR
var select = (e) => document.querySelector(e);
var selectAll = (e) => document.querySelectorAll(e);
const parallax = selectAll(".parallax");
let top = select(".footer__link-top");
//END DECLARATION VAR


//STR EVENT
top.addEventListener("click", (e) => {
	e.preventDefault();
	scrollTop();
});

top.addEventListener("mouseover", (e) => {
	gsap.to(".footer__link-top-line", {
		scaleY: 3,
		transformOrigin: "bottom center",
		duration: 0.6,
		ease: "power4",
	});
});

top.addEventListener("mouseout", (e) => {
	gsap.to(".footer__link-top-line", {
		scaleY: 1,
		transformOrigin: "bottom center",
		duration: 0.6,
		ease: "power4",
	});
});
//END EVENT



//STR FUNCTION
function initIntro() {
	// animate the intro elements into place
	let tl = gsap.timeline({ delay: 1.2 });
	tl.from(".intro__txt",{x: -100,opacity: 0,ease: "power4",duration: 3,},2)
	.from(".intro__img--1",{y: 50,opacity: 0,ease: "power2",duration: 10,},3)
	.from(".intro__img--2",{y: -50,opacity: 0,ease: "power2",duration: 10,},3);
	let stl = gsap.timeline({
		scrollTrigger: {
			trigger: ".intro",
			scrub: 1,
			start: "top bottom", // position of trigger meets the scroller position
			end: "bottom top",
			//markers: true,
		},
	});
	stl.to(".intro__title", {x: 400,ease: "power4.in",duration: 3})
	.to(".intro__txt",{y: 100,ease: "power4.in",duration: 3,},0);
}


function initParallax() {
	parallax.forEach((slide, i) => {
		console.log(slide);
		let imageWrappers = slide.querySelectorAll(".parallax-wrap");
		gsap.fromTo(
			imageWrappers,
			{
				y: "-25vh",
			},
			{
				y: "25vh",
				scrollTrigger: {
					trigger: slide,
					scrub: true,
					start: "top bottom", // position of trigger meets the scroller position
					snap: {
						snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
						duration: 1,
						ease: "power4.inOut",
					},
					markers: true,
				},
				ease: "none",
			}
		);
	});
}

function scrollTop() {
	gsap.to(window, {
		duration: 2,
		scrollTo: {
			y: "#slide-0",
		},
		ease: "power2.inOut",
	});
	gsap.to(".footer__link-top-line", {
		scaleY: 1,
		transformOrigin: "bottom center",
		duration: 0.6,
		ease: "power4",
	});
}

//END FUNCTION


//STR INIT FUNCTION
function init() {
	initIntro();
	initParallax();
}
//END INIT FUNCTION


//STR RUN FUNCTION
window.onload = () => {
	init();
};
//END RUN FUCTION
