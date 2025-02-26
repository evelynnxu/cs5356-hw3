/* JavaScript for Interactive Mousemove Effect */
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".About");
    aboutSection.addEventListener("mousemove", function (event) {
        const { offsetX, offsetY } = event;
        const width = aboutSection.clientWidth;
        const height = aboutSection.clientHeight;
        const moveX = (offsetX / width) * 20 - 10;
        const moveY = (offsetY / height) * 20 - 10;
        aboutSection.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    aboutSection.addEventListener("mouseleave", function () {
        aboutSection.style.transform = "translate(0, 0)";
    });
});