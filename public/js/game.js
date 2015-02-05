var wallSide = function(worldTransform){
    var displayCenterX = 1*game.canvas.width / 3;
    var displayCenterY = 2 * game.canvas.height / 3;

    // angle of the x axis. Should be in [0, PI/2]
    var angleX = Math.PI / 6;
    // angle of the y axis. Should be in [PI/2, PI[
    var angleY = Math.PI / 2;

}

var transform;

var manager = {
    preload: function(){
        transform = new Transform(game);
        game.load.image('pic', 'assets/textures/walls/bathroom.png');
        game.load.image('80x80', 'assets/textures/walls/bathroom80x80.png');
        game.load.image('80x160', 'assets/textures/walls/bathroom80x160.png');
        game.load.image('explosion', 'assets/masks/explosion.png');
    },

    create: function(){
        var bmd = game.make.bitmapData(80,80);
        bmd.alphaMask('80x80', 'explosion');

        var wall3 = game.add.image(100, 100, bmd);
        var wall1 = game.add.image(100, 100, bmd);
        var wall2 = game.add.image(100, 100, bmd);

        // use with :
        wall1.transformCallback = transform.wallFront;
        wall2.transformCallback = transform.wallSide;
        wall3.transformCallback = transform.ground;

        //Darken some walls
        wall1.tint = 0xBBBBBB;
        wall3.tint = 0xDDDDDD;
    },

    update: function() {

    }
}

var game = new Phaser.Game('100', '100', Phaser.AUTO, '', manager, true);
