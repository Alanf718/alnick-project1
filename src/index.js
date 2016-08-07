var enemies = require('./enemies.js');

var xpos = 500;
var ypos = 900;
var numPixels = 10;

function setup() {
    createCanvas(1000, 1000);
    enemies.init();
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
    ellipse(x, y, 50, 50);
}

global.setup = setup;
global.draw = draw;
global.keyPressed = keyPressed;
