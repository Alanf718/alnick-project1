var enemies = require('./enemies.js');

var x = 500;
var y = 900;
var numPixels = 10;

function setup() {
    createCanvas(1000, 1000);
    enemies.init();
}

function userInputs(){
    // LEFT @todo need to put these numbers in global scope
    if (keyIsDown(65)) {
        if (x<=0) {
            x = 999;
        }
        else {
            x-=5;
        }
    }

    // RIGHT
    if (keyIsDown(68)) {
        if (x>=1000) {
            x = 1;
        }
        else {
            x+=5;
        }
    }

    // UP
    if (keyIsDown(87)) {
        if (y<=0) {
        }
        else {
            y-=5;
        }
    }

    // DOWN
    if (keyIsDown(83)) {
        if (y>=1000) {
        }
        else {
            y+=5;
        }
    }
};

function update() {
    enemies.updateEnemies();
};


function draw() {

    userInputs();

    background(211, 211, 211);
    fill(255, 0, 0);
    ellipse(x, y, 50, 50);

    // Enemy logic below
    var nme = enemies.getEnemies();

    update();

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

global.setup = setup;
global.draw = draw;
