/**
 * Created by Alan on 8/7/2016.
 */
var util = require('./util.js');

var spawnRate = 600;
var enemies = [];
var UID = 0;

var drawEnemy = function(){
    // ellipse(xpos, ypos, 25, 25);
};

var createEnemy = function(){
    var black = util.getRandomBool();
    var x = util.getRandomInt(0, 1000);

    enemies.push({black: black, x: x, y: 0, id: UID, hitUser: false}); // hit user flag is to track if we did damage or not
    UID++;
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
