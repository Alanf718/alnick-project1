var xpos = 500;

var ypos = 900;

var numPixels = 10;

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(211,211,211);

    fill(255, 0, 0);

    stroke(0);

    ellipseMode(CENTER);

    ellipse(xpos, ypos, 25, 25);
}

function keyPressed() {
    // UP key
    if(keyCode == UP_ARROW)
    {
        ypos = ypos - numPixels;
    }

    // DOWN key
    if(keyCode == DOWN_ARROW)
    {
        ypos = ypos + numPixels;
    }

    // RIGHT key
    if(keyCode == RIGHT_ARROW)
    {
        xpos = xpos + numPixels;
    }

    // LEFT key
    if(keyCode == LEFT_ARROW)
    {
        xpos = xpos - numPixels;
    }
}