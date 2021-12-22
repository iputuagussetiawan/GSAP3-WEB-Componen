import "../../scss/pages/scroll_triger_timeline.scss";
import gsap from "gsap/all";

//start section 1
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//manual animation wiout timeline is add more delay in any section
// gsap.to(".box",{x:500,duration:2})
// gsap.to(".box",{y:200,duration:3,delay:2})
// gsap.to(".box",{x:0,duration:2,delay:5})

// const tl=gsap.timeline({
//     scrollTrigger:{
//         trigger:".box",
//         markers:true,
//         start:"top 80%",
//         end:"top 30%",
//         scrub:1,
//     }
// });
// tl.to(".box",{x:500,duration:5})
// .to(".box",{y:200,duration:3})
// .to(".box",{x:0,duration:2})

ScrollTrigger.create({
    trigger:".box",
    start:"top 80%",
    end:"top 50%",
    markers:true,
    toggleClass:"box-red"
})