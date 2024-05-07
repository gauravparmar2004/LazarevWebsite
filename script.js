function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.3,
    delay: 0.2,
  });
  tl.from("#page1", {
    transform: "scaleX(0.7),scaleY(0.2) translateY:(80%)",
    borderRadius: "500px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("#nav", {
    opacity: 0,
    delay: -0.3 ,
  });
  tl.from("#page1 h1,#page1 p,#page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}

function navAnimation() {
  let nav = document.querySelector("#nav");
  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "23vh",
    });
    tl.to("#nav h5", {
      display: "block",
    });

    tl.from("#nav h5 span", {
      y: 25,
      stagger: {
        amount: 0.3,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to("#nav h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.1,
    });
  });
}

function page2Animation() {
  var elem = document.querySelectorAll(".right-elem");
  elem.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
      elem.addEventListener("mousemove", function (details) {
        gsap.to(elem.childNodes[3], {
          x: details.x - elem.getBoundingClientRect().x - 50,
          y: details.y - elem.getBoundingClientRect().y - 150,
        });
      });
    });
  });
}

function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}

function page7SectionVideoAnimation() {
  var sections = document.querySelectorAll(".sec-right");
  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });

    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}
function page11Animation() {
  gsap.from("h4,#btm-contentp-3 h4,#btm-contentp-4 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#btm-contentp-2",
      scroller: "#main",
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
}

locomotiveAnimation();
loadingAnimation()
page2Animation();
navAnimation();
page3VideoAnimation();
page7SectionVideoAnimation();
page11Animation();
