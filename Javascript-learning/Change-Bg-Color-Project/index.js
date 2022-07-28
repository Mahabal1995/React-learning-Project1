const colorChangeButton = document.querySelector("button");
const currentColorSpan = document.querySelector(".current-color");
const body = document.body;

const randomColorGenerator = () => {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;

}

colorChangeButton.addEventListener("click", (event) => {
    const randomColor = randomColorGenerator();
    currentColorSpan.textContent = randomColor;
    body.style.background = randomColor;
})