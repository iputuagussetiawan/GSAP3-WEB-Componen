import "../../scss/pages/scroll_triger.scss";
import gsap from "gsap/all";

//start section 1
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".square",{
//     x:700,
//     duration:3,
//     scrollTrigger:".square2"
// })
//end section 1


// str section 2 Start End Scroll Triger
// gsap.to(".square",{
//     // x:700,
//     duration:3,
//     scrollTrigger:{
//         trigger:".square",
//         start:"top center",
//         end:()=>`+=${document.querySelector(".square").offsetHeight}`,
//         markers:true,
//         toggleClass:'red'

//         // markers:{
//         //     startColor:"purple",
//         //     endColor:"fuchsia",
//         //     fontSize:"4rem",
//         //     indent:200
//         // }
//     }
// })
//end section 2

// str section 3 Toggle Action
// gsap.to(".square",{
//     x:1000,
//     duration:8,
//     scrollTrigger:{
//         trigger:".square",
//         start:"top 60%",
//         end:"top 40%",
//         toggleActions:"restart pause resume complate",
//         //play pause resume reverse restart reset complate none
//         //onEnter onLeave onEnterBack onLeaveBack

//         markers:{
//             startColor:"purple",
//             endColor:"fuchsia",
//             fontSize:"3rem",
//         }
//     }
// })
//end section 3

//start section 4 scrub
// gsap.to(".square",{
//     x:1000,
//     duration:8,
//     scrollTrigger:{
//         trigger:".square",
//         start:"top 80%",
//         end:"top 30%",
//         scrub:4,
//         toggleActions:"restart none none none",
//         //play pause resume reverse restart reset complate none
//         //onEnter onLeave onEnterBack onLeaveBack

//         markers:{
//             startColor:"purple",
//             endColor:"fuchsia",
//             fontSize:"3rem",
//         }
//     }
// })
//end section 4

//start section 5 Pin
// gsap.to(".square",{
//     //x:1000,
//     duration:8,
//     scrollTrigger:{
//         trigger:".square2",
//         start:"top 80%",
//         end:"top 30%",
//         scrub:4,
//         pin:".square",
//         pinSpacing:true,
//         toggleActions:"restart none none none",
    
//         markers:{
//             startColor:"purple",
//             endColor:"fuchsia",
//             fontSize:"3rem",
//         }
//     }
// })
//end section 5 pin

//start section 6 Timeline
gsap.to(".square",{
    //x:1000,
    duration:8,
    scrollTrigger:{
        trigger:".square2",
        start:"top 80%",
        end:"top 30%",
        scrub:4,
        pin:".square",
        pinSpacing:true,
        toggleActions:"restart none none none",
    
        markers:{
            startColor:"purple",
            endColor:"fuchsia",
            fontSize:"3rem",
        }
    }
})
//end section 6 pin