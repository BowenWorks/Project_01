const element = document.querySelector(".interactive-element");

document.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 70;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 70;

    element.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.addEventListener("mouseleave", () => {
    element.style.transform = "rotateY(0deg) rotateX(0deg)";
});


    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "#ff5733"; // Change to your desired color on hover
    });

    element.addEventListener("mouseout", () => {
        element.style.backgroundColor = "#49618d35"; // Change back to the original color when not hovering
    });

