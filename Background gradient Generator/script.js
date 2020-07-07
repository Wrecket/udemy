var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

function generateGradient1() {
    var randomColorCode1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor1 = "#"+randomColorCode1;
    color1.value = randomColor1;
}

function generateGradient2() {
    var randomColorCode2 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = "#"+randomColorCode2;
    color2.value = randomColor2;
}

function setRandomGradient() {
    generateGradient1()
    generateGradient2()
    setGradient()
};

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

button.addEventListener("click", setRandomGradient);
button.addEventListener("onmouseover", function() {
    button.style.opacity="1";
})


