import "../../scss/pages/GSAP_ScrollTriger_Footer.scss";

import gsap from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.set('section.footer-container', { yPercent: -100 })
const uncover = gsap.timeline({ paused:true })
uncover.to('section.footer-container', { yPercent: 0, ease: 'none' });

ScrollTrigger.create({  
  trigger: 'section.conclusion',
  start: 'bottom bottom',
  end: '+=75%',
  animation: uncover,
  scrub: true,  
})
