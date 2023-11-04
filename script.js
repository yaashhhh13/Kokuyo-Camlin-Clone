function locojspen(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locojspen()

document.querySelector("#main").addEventListener("mousemove",function(dets){
    document.querySelectorAll(".eyes").forEach(function(elem){
        elem.style.transform = `translate(-50%,-50%) translate(${dets.clientX * 0.025}px , ${dets.clientY* 0.02}px)`
    })
    document.querySelectorAll(".pupil").forEach(function(elem){
        elem.style.transform = `translate(-50%,-50%) translate(${dets.clientX * 0.012}px , ${dets.clientY* 0.012}px)`
    })
    // console.log(dets.clientX)
})

var tl = gsap.timeline()

tl.from("#maintext1",{
    opacity: 0,
    delay: 2
})

tl.from("#maintext2",{
    opacity: 0,
})

tl.from("#maintext3",{
    opacity: 0,
})

tl.from("#maintext4",{
    opacity: 0,
})

tl.from("#maintext5",{
    opacity: 0,
})


gsap.from("#box1>img",{
    height: 0,
    scrollTrigger:{
        trigger: "#box1>img",
        scroller: "#main",
        start: "top 90%",
        // scrub: 1,
        // markers: true
    }
})

gsap.from("#box2>img",{
    height: 0,
    scrollTrigger:{
        trigger: "#box2>img",
        scroller: "#main",
        start: "top 90%",
        // scrub: 1,
        // markers: true
    }
})

gsap.from("#box3>img",{
    height: 0,
    scrollTrigger:{
        trigger: "#box3>img",
        scroller: "#main",
        start: "top 90%",
        // scrub: 1,
        // markers: true
    }
})

gsap.from("#box4>img",{
    height: 0,
    scrollTrigger:{
        trigger: "#box4>img",
        scroller: "#main",
        start: "top 90%",
        // scrub: 1,
        // markers: true
    }
})

gsap.from("#box5>img",{
    height: 0,
    scrollTrigger:{
        trigger: "#box5>img",
        scroller: "#main",
        start: "top 90%",
        // scrub: 1,
        // markers: true
    }
})

gsap.from("#box6>img",{
    height: 0,
    scrollTrigger:{
        trigger: "#box6>img",
        scroller: "#main",
        start: "top 90%",
        // scrub: 1,
        // markers: true
    }
})

gsap.from("#box7>img",{
    height: 0,
    scrollTrigger:{
        trigger: "#box7>img",
        scroller: "#main",
        start: "top 90%",
        // scrub: 1,
        // markers: true
    }
})

gsap.from("#box8>img",{
    height: 0,
    scrollTrigger:{
        trigger: "#box8>img",
        scroller: "#main",
        start: "top 90%",
        // scrub: 1,
        // markers: true
    }
})

gsap.from("#box9>img",{
    height: 0,
    scrollTrigger:{
        trigger: "#box9>img",
        scroller: "#main",
        start: "top 90%",
        // scrub: 1,
        // markers: true
    }
})

gsap.from("#box10>img",{
    height: 0,
    scrollTrigger:{
        trigger: "#box10>img",
        scroller: "#main",
        start: "top 90%",
        // scrub: 1,
        // markers: true
    }
})

gsap.from("#box11>img",{
    height: 0,
    scrollTrigger:{
        trigger: "#box11>img",
        scroller: "#main",
        start: "top 90%",
        // scrub: 1,
        // markers: true
    }
})
