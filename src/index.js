var x = 500;
var y = 950;

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    if (keyIsDown(65))
        x-=5;

    if (keyIsDown(68))
        x+=5;

    if (keyIsDown(87))
        y-=5;

    if (keyIsDown(83))
        y+=5;

    background(211, 211, 211);
    fill(255, 0, 0);
    ellipse(x, y, 50, 50);
}