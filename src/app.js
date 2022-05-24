import "./style.scss";

import confetti from "canvas-confetti";
import ColorThief from "colorthief";

console.log("Welcome to NPM!");

const confettiButton = document.getElementById("confetti-button");
const image = document.getElementById("image");
const colorThief = new ColorThief();
const body = document.querySelector("body");
const imgURL = document.querySelector("#img-url");

image.addEventListener('load', () => {
    const color = colorThief.getColor(image);
    body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`
    fireConfetti();
});

const fireConfetti = (event) => {
    const rgbPalette = colorThief.getPalette(image, 8);
    let hexPalette = rgbPalette.map((color) => {
        return RGBToHex(color[0], color[1], color[2]);
    })
    console.log(hexPalette)

    confetti({
        particleCount: 300,
        spread: 180,
        origin: {
            x: 0,
            y: 0
        },
        angle: -70,
        colors: [hexPalette[0], hexPalette[1], hexPalette[2],hexPalette[3],hexPalette[4],hexPalette[5],hexPalette[6],hexPalette[7]]
    });
}

const onUserURL = (event) => {
    console.log("onUserURL")
    image.src = event.target.value;
    fireConfetti();
}

confettiButton.addEventListener("click", fireConfetti);
imgURL.addEventListener("input", onUserURL)

function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
}