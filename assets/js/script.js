const wrokScrollSec = document.querySelector(".anim-wrap")
if (wrokScrollSec) {
    const wstravellerWidht = document.querySelector(".ani-parent").getBoundingClientRect().width
    const wsTravelInnerWidth = wrokScrollSec.querySelector(".ani-text").getBoundingClientRect().width
    const finalWidth = wstravellerWidht - wsTravelInnerWidth
    gsap.to(wrokScrollSec.querySelector(".ani-text"), {
        scrollTrigger: {
            start: "top 5%",
            end: "end -100%",
            trigger: wrokScrollSec,
            scrub: 1,
            markers:false,
            pin: true,
        },
        x: finalWidth,
    })
}