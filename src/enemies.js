/**
 * Created by Alan on 8/7/2016.
 */
var util = require('./util.js');

var spawnRate = 600;
var enemies = [];

var drawEnemy = function(){
    // ellipse(xpos, ypos, 25, 25);
};

var createEnemy = function(){
    var black = util.getRandomBool();
    var x = util.getRandomInt(0, 1000);

    enemies.push({black: black, x: x, y: 0});
};


var init = function() {
    setInterval(function() { createEnemy() }, spawnRate);
    
};

var updateEnemies = function() {
    for(var i=0; i < enemies.length; i++) {
        var e = enemies[i];
        e.y += 4;
    }
};

var getEnemies = function() {
    return enemies;
};


module.exports = {
    init: init,
    drawEnemy: drawEnemy,
    getEnemies: getEnemies,
    updateEnemies: updateEnemies
};
