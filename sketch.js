// let img;
// function preload() {
//     img = loadImage('Images/fond-slide-ludispace.jpg');
// }
posX = 550;
posY = 50;

function setup() {
    createCanvas(640, 480);
    background(153);
    line(0, 0, width, height);

    // Image(img, 0, 0);
}
function draw() {
    colorMode(HSB);
    background(255, 204, 100);
    ellipse(50,50,80,80);
    circle(posX, posY, 50);
}