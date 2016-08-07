/**
 * Created by Alan on 8/7/2016.
 */

module.exports = {
    getRandomInt: function(min, max) {
        return Math.floor( Math.random() * (max-min) + min );
    },
    
    getRandomBool: function(){
        return (Math.random() >= .5)
    }
};
