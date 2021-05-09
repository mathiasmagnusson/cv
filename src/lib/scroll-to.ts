let animationFrame: number | null = null;
let targetY: number;
let startY: number;
let start: number, stop: number;

const scrollOffset = 50;
const scrollTime = 500;

function curve(x: number) {
    return (1 - Math.cos(Math.PI * x)) / 2;
}

function cancel() {
    if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
    }
}

export function setup() {
    window.addEventListener("scroll", cancel);
}

export default function scrollTo(el: Element) {
    cancel();

    startY = window.scrollY;
    targetY = el.getBoundingClientRect().y + window.scrollY - scrollOffset;

    start = Date.now();
    stop = Date.now() + scrollTime;

    function scrollStep() {
        let now = Date.now();
        let x = (now - start) / scrollTime;
        let y = startY + curve(x) * (targetY - startY);

        window.scrollTo(null, y);

        if (Date.now() >= stop) {
            window.scrollTo(null, targetY);
            cancel();
        } else {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}
