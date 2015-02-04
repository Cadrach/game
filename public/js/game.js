var wallSide = function(worldTransform){
    var displayCenterX = 1*game.canvas.width / 3;
    var displayCenterY = 2 * game.canvas.height / 3;

    // angle of the x axis. Should be in [0, PI/2]
    var angleX = Math.PI / 6;
    // angle of the y axis. Should be in [PI/2, PI[
    var angleY = Math.PI / 2;

    // scale for the tiles
    var scale = 2.0;
    // relative scale for the x of the tile. use it to stretch tiles.
    var relScaleX = 1;

    // ----------------------------------------
    //     Transforms
    // ----------------------------------------
    var transfMatrix = [Math.cos(angleX), Math.sin(angleX),
        Math.cos(angleY), Math.sin(angleY)];
    var _norm = relScaleX + 1;
    relScaleX /= _norm;
    transfMatrix[0] *= scale * relScaleX;
    transfMatrix[1] *= scale  * relScaleX;
    transfMatrix[2] *= scale / _norm;
    transfMatrix[3] *= scale / _norm;
    // matrix reverse
    var determinant = transfMatrix[0] * transfMatrix[3] - transfMatrix[2] * transfMatrix[1];
    var transfMatrixRev = [transfMatrix[3], -transfMatrix[1], -transfMatrix[2], transfMatrix[0]];
    transfMatrixRev[0] /= determinant;
    transfMatrixRev[1] /= determinant;
    transfMatrixRev[2] /= determinant;
    transfMatrixRev[3] /= determinant;

    worldTransform.a = transfMatrix[0];
    worldTransform.b = transfMatrix[1];
    worldTransform.c = transfMatrix[2];
    worldTransform.d = transfMatrix[3];
    worldTransform.tx = displayCenterX - 70;
    worldTransform.ty = displayCenterY - 40;
}

var wallFront = function(worldTransform){
    var displayCenterX = 1*game.canvas.width / 3;
    var displayCenterY = 2 * game.canvas.height / 3;

    // angle of the x axis. Should be in [0, PI/2]
    var angleX = -Math.PI / 6;
    // angle of the y axis. Should be in [PI/2, PI[
    var angleY = Math.PI / 2;

    // scale for the tiles
    var scale = 2.0;
    // relative scale for the x of the tile. use it to stretch tiles.
    var relScaleX = 1;

    // ----------------------------------------
    //     Transforms
    // ----------------------------------------
    var transfMatrix = [Math.cos(angleX), Math.sin(angleX),
        Math.cos(angleY), Math.sin(angleY)];
    var _norm = relScaleX + 1;
    relScaleX /= _norm;
    transfMatrix[0] *= scale * relScaleX;
    transfMatrix[1] *= scale  * relScaleX;
    transfMatrix[2] *= scale / _norm;
    transfMatrix[3] *= scale / _norm;
    // matrix reverse
    var determinant = transfMatrix[0] * transfMatrix[3] - transfMatrix[2] * transfMatrix[1];
    var transfMatrixRev = [transfMatrix[3], -transfMatrix[1], -transfMatrix[2], transfMatrix[0]];
    transfMatrixRev[0] /= determinant;
    transfMatrixRev[1] /= determinant;
    transfMatrixRev[2] /= determinant;
    transfMatrixRev[3] /= determinant;

    worldTransform.a = transfMatrix[0];
    worldTransform.b = transfMatrix[1];
    worldTransform.c = transfMatrix[2];
    worldTransform.d = transfMatrix[3];
    worldTransform.tx = displayCenterX - 70;
    worldTransform.ty = displayCenterY - 40;
}

var ground = function(worldTransform){
    var displayCenterX = 1*game.canvas.width / 3;
    var displayCenterY = 2 * game.canvas.height / 3;

    // angle of the x axis. Should be in [0, PI/2]
    var angleX = Math.PI / 6;
    // angle of the y axis. Should be in [PI/2, PI[
    var angleY = Math.PI / 1.2;

    // scale for the tiles
    var scale = 2.0;
    // relative scale for the x of the tile. use it to stretch tiles.
    var relScaleX = 1;

    // ----------------------------------------
    //     Transforms
    // ----------------------------------------
    var transfMatrix = [Math.cos(angleX), Math.sin(angleX),
        Math.cos(angleY), Math.sin(angleY)];
    var _norm = relScaleX + 1;
    relScaleX /= _norm;
    transfMatrix[0] *= scale * relScaleX;
    transfMatrix[1] *= scale  * relScaleX;
    transfMatrix[2] *= scale / _norm;
    transfMatrix[3] *= scale / _norm;
    // matrix reverse
    var determinant = transfMatrix[0] * transfMatrix[3] - transfMatrix[2] * transfMatrix[1];
    var transfMatrixRev = [transfMatrix[3], -transfMatrix[1], -transfMatrix[2], transfMatrix[0]];
    transfMatrixRev[0] /= determinant;
    transfMatrixRev[1] /= determinant;
    transfMatrixRev[2] /= determinant;
    transfMatrixRev[3] /= determinant;

    worldTransform.a = transfMatrix[0];
    worldTransform.b = transfMatrix[1];
    worldTransform.c = transfMatrix[2];
    worldTransform.d = transfMatrix[3];
    worldTransform.tx = displayCenterX;
    worldTransform.ty = displayCenterY;
//    console.log(displayCenterX, displayCenterY)
}

var manager = {
    preload: function(){
        game.load.image('pic', 'assets/textures/walls/bathroom.png');
        game.load.image('80x80', 'assets/textures/walls/bathroom80x80.png');
        game.load.image('80x160', 'assets/textures/walls/bathroom80x160.png');
        game.load.image('explosion', 'assets/masks/explosion.png');
    },

    create: function(){
        //  Parameters
        //
//console.log(game)
        // center of the display on screen

        /***
         * - PI/6    PI/2 pour un mur de face
         * PI/6     PI/2 pour un mur de côté
         * PI/6     P/1.2 pour un sol
         */



//
//        var wall = game.add.image(400, 300, '80x80');
//        wall.anchor.set(0.5,0.5);
//        wall.scale.set(40,40)
//        wall.mask = game.make.image('explosion');

        var bmd = game.make.bitmapData(80,80);
        bmd.alphaMask('80x80', 'explosion');

        var wall3 = game.add.image(400, 300, bmd);
        var wall1 = game.add.image(400, 300, bmd);
        var wall2 = game.add.image(400, 300, bmd);

        // use with :
        wall1.transformCallback = wallFront;
        wall2.transformCallback = wallSide;
        wall3.transformCallback = ground;

        //Darken some walls
        wall1.tint = 0xBBBBBB;
        wall3.tint = 0xDDDDDD;
    },

    update: function() {

    }
}

var game = new Phaser.Game('100', '100', Phaser.AUTO, '', manager, true);
