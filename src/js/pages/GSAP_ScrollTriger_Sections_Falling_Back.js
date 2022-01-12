import "../../scss/pages/GSAP_ScrollTriger_Sections_Falling_Back.scss";

import gsap from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

var panels = gsap.utils.toArray(".panel");
panels.pop(); // get rid of the last one (don't need it in the loop)
panels.forEach((panel, i) => {
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger: panel,
      start: "bottom bottom",
      pinSpacing: false,
      pin: true,
      scrub: true,
	  markers:true  
    }
  });
  tl.fromTo(panel, {y:0, opacity:1,duration:2,ease: "power2.out"}, {y:0,  opacity:1,duration:2,ease: "power2.out"}, 0)
});
