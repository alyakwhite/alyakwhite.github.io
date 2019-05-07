var level01 = function(window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1,
            speed: -3,
            gameItems: [
                { type: 'sawblade', x: 400, y: groundY },
                { type: 'sawblade', x: 600, y: groundY },
                { type: 'sawblade', x: 900, y: groundY }
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        //TODO 7
        //TODO 7 PT 2
        //TODO 8
        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            // your code goes here
        }
        
        // dynamically add game items to game
        for (var i = 0; i < levelData.gameItems.length; i++) {
    var gameItem = levelData.gameItems[i];
    console.log(gameItem.type)
    if (gameItem.type === 'sawblade'){ 
    // Create a sawblade using the .x and .y property of each game item object
    
    createSawBlade(350, 670)
        createSawBlade(450, 470)
        createSawBlade(550, 370)
}
}
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
