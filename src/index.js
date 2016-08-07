function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    if (keyIsPressed === true) {
        fill(0);
    } else {
        fill(255);
    }
    rect(width/2, 900, 50, 50);
}

//
// global.setup = setup;
// global.draw = draw;
