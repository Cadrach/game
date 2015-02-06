var Transform = function(game){

    var func = function(displayCenterX, displayCenterY, angleX, angleY){
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
        transfMatrix[1] *= scale * relScaleX;
        transfMatrix[2] *= scale / _norm;
        transfMatrix[3] *= scale / _norm;
        // matrix reverse
        var determinant = transfMatrix[0] * transfMatrix[3] - transfMatrix[2] * transfMatrix[1];
        var transfMatrixRev = [transfMatrix[3], -transfMatrix[1], -transfMatrix[2], transfMatrix[0]];
        transfMatrixRev[0] /= determinant;
        transfMatrixRev[1] /= determinant;
        transfMatrixRev[2] /= determinant;
        transfMatrixRev[3] /= determinant;

        return {
            a: transfMatrix[0],
            b: transfMatrix[1],
            c: transfMatrix[2],
            d: transfMatrix[3],
            tx: displayCenterX,
            ty: displayCenterY
        }
    }

    var _apply = function(matrixReceived, matrixToApply){
        matrixReceived.a = matrixToApply.a;
        matrixReceived.b = matrixToApply.b;
        matrixReceived.c = matrixToApply.c;
        matrixReceived.d = matrixToApply.d;
        matrixReceived.tx+= matrixToApply.tx;
        matrixReceived.ty+= matrixToApply.ty;
    }

    var _ground = func(0, 0, game.iso.projectionAngle, Math.PI / 1.2);
    var _wallFront = func(-70, -40, -game.iso.projectionAngle, Math.PI / 2);
    var _wallSide = func(-70, -40, game.iso.projectionAngle, Math.PI / 2);

    return {
        ground: function(matrix){
//            var _ground = new Matrix;
//            _ground = _ground.rotate(Math.PI/4, new Point(40,40));
//            _ground = _ground.scale(1,60/80, new Point(40,40));
//            <g transform="matrix(0.707 0.409 -0.707 0.409 100.51 -14.78)">
//                var _ground = {
//                    a: 0.707,
//                    b: 0.409,
//                    c: -0.707,
//                    d: 0.409,
//                    tx: 0,
//                    ty: 0
//                }
            _apply(matrix, _ground);
        },

        wallFront: function(matrix){
            _apply(matrix, _wallFront);
        },

        wallSide: function(matrix){
            _apply(matrix, _wallSide);
        }
    }
}
