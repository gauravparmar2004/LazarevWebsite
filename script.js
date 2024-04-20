function navAnimation() {
    let nav = document.querySelector("#nav")
    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
        tl.to("#nav-bottom", {
            height: "23vh",
        })
        tl.to("#nav h5", {
            display: "block"
        })

        tl.from("#nav h5 span", {
            y: 25,
            stagger: {
                amount: 0.3,
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to("#nav h5 span", {
            y: 25,
            stagger: {
                amount: 0.2,
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1,
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.1,
        })
    })
}

function page2Animation() {
    var elem = document.querySelectorAll(".right-elem")
    elem.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1,
            })
        })

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0,
            })
            elem.addEventListener("mousemove", function (details) {
                gsap.to(elem.childNodes[3], {
                    x: details.x - elem.getBoundingClientRect().x - 50,
                    y: details.y - elem.getBoundingClientRect().y - 150,
                })
            })
        })
    })
}

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px",
        })
    })
}

function page7SectionVideoAnimation() {
    var sections = document.querySelectorAll(".sec-right")
    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })

        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}

page2Animation()
navAnimation()
page3VideoAnimation()
page7SectionVideoAnimation()


// var secsections = document.querySelectorAll(".box1")
// secsections.forEach(function (elem) {
//     elem.addEventListener("mouseenter", function () {
//         elem.childNodes[7].style.opacity = 1
//         elem.childNodes[7].play()
//     })
// })