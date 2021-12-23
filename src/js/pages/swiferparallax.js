import "../../scss/pages/swifergsap3.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap/all";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

const swiferBannerContainer = document.querySelector("#banner-slider");
const swiperBanner = new Swiper(".banner-slider", {
	direction: "horizontal",
	// parallax: true,
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 0,
	loop: true,
	disableOnInteraction: true,
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

swiferBannerContainer.addEventListener("mouseenter", (e) => {
	swiperBanner.autoplay.stop();
});
swiferBannerContainer.addEventListener("mouseleave", (e) => {
	swiperBanner.autoplay.start();
});
