var enemies = require('./enemies.js');

var xpos = 500;
var ypos = 900;
var numPixels = 10;

function setup() {
    createCanvas(1000, 1000);
    enemies.init();
}

function draw() {

    background(211,211,211);

    fill(255, 0, 0);

    stroke(0);

    ellipseMode(CENTER);

    ellipse(xpos, ypos, 25, 25);


    // Enemy logic below
    var nme = enemies.getEnemies();

    enemies.updateEnemies();

    for(var i=0; i < nme.length; i++)
    {
        var e = nme[i];
        if(e.black) {
            fill(255, 0, 0);
        } else {
            fill(0, 0, 255);
        }
        ellipse(e.x, e.y, 35, 35);
    }
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

global.setup = setup;
global.draw = draw;
global.keyPressed = keyPressed;
