var enemies = require('./enemies.js');

var x = 500;
var y = 900;

var heroWidth = 50;
var minWidth = 10;
var maxWidth = 75;

var numPixels = 10;

var vel = 5;

function setup() {
    createCanvas(1000, 1000);
    enemies.init();
}

function userInputs(){
    if (keyIsDown(65))
        x-=vel;

    if (keyIsDown(68))
        x+=vel;

    if (keyIsDown(87))
        y-=vel;

    if (keyIsDown(83))
        y+=vel;

    if (keyIsDown(LEFT_ARROW)){
        if(heroWidth >= minWidth + .4){
            heroWidth -= .4;
            vel = heroWidth/10;
        } else {
        }
    }
    if (keyIsDown(RIGHT_ARROW)){
        if(heroWidth <= maxWidth - .4){
            heroWidth += .4;
            vel = heroWidth/10;
        } else {
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
    ellipse(x, y, heroWidth, 50);

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
