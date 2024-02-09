export const parallex = () => {
    const parallexEffect = (x, y) => {
        document.querySelectorAll(".parallex_img").forEach((e) => {
            var ivalueX = (x * -1 / 100);
            var ivalueY = (y * -1 / 100);
            e.style.transform = `translateX(${ivalueX}px) translateY(${ivalueY}px)`;
        });

    }
    document.addEventListener("mousemove", e => { parallexEffect(e.clientX, e.clientY) });
}