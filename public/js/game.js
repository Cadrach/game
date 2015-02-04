var manager = {
    preload: function(){
        game.load.image('pic', 'assets/textures/walls/bathroom.png');
    },

    create: function(){
//        var wall = game.make.bitmapData(40, 40, 'pic');
//        var wall = game.add.image(400, 300, 'pic');
//        wall.anchor.set(0.5,0.5);
//        wall.rotation = Math.PI / 4;
//        wall.height = 142;
//        wall.width = 82;
//        var texture = new Phaser.RenderTexture(game, 'pic');
//        var texture = game.add.renderTexture('wall');
//
//
//        game.add.sprite(100, 100, texture);

        //	Here we'll create a renderTexture the same size as our game
        texture = game.add.renderTexture(800, 600, 'mousetrail');

        //	This is the sprite that will be drawn to the texture
        //	Note that we 'make' it, not 'add' it, as we don't want it on the display list.
        ball = game.make.sprite(0, 0, 'pic');
        ball.anchor.set(0.5);

        //	This is the sprite that is drawn to the display. We've given it the renderTexture as its texture.
        game.add.sprite(0, 0, texture);
    },

    update: function() {

    if (!game.input.activePointer.position.isZero())
    {
        //	This time we'll draw the ball sprite twice, in a mirror effect
        texture.renderXY(ball, game.input.activePointer.x, game.input.activePointer.y, true);
        texture.renderXY(ball, game.input.activePointer.x, 600 - game.input.activePointer.y, false);
    }

}
}

var game = new Phaser.Game('100', '100', Phaser.AUTO, '', manager, true);
