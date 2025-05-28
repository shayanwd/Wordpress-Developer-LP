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

// Mobile menu functionality
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileSidebar = document.querySelector('.mobile-sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
const overlay = document.createElement('div');

// Add overlay properties
overlay.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'hidden', 'z-40', 'hidden' );
document.body.appendChild(overlay);

// Toggle menu
function toggleMenu() {
    mobileSidebar.classList.toggle('right-[-100%]');
    mobileSidebar.classList.toggle('right-0');
    // overlay.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
}

menuToggle.addEventListener('click', toggleMenu);
closeSidebar.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);