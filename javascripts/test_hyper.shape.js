(function(Hypersolid) {

    /*
     * Hypercube
     */

    Hypersolid.Hypercube = function() {
        return new Hypercube();
    };
    function Hypercube() {}
    Hypercube.prototype = Hypersolid.Shape([
        { x:  1, y:  1, z:  1, w:  1 },
        { x:  1, y:  1, z: -1, w: -1 },
        { x:  1, y: -1, z:  1, w: -1 },
        { x:  1, y: -1, z: -1, w:  1 },
        { x: -1, y:  1, z:  1, w: -1 },
        { x: -1, y:  1, z: -1, w:  1 },
        { x: -1, y: -1, z:  1, w:  1 },
        { x: -1, y: -1, z: -1, w: -1 }
    ], [
        [ 0,  1], [ 0,  2], [ 0,  3], [ 0,  4], [ 0,  5], [ 0,  6],
        [ 1,  2], [ 1,  3], [ 1,  4], [ 1,  5], [ 1,  7],
        [ 2,  3], [ 2,  4], [ 2,  6], [ 2, 7],
        [ 3,  5], [ 3,  6], [ 3,  7],        
        [ 4,  5], [ 4,  6], [ 4,  7],
        [ 5,  6], [ 5, 7],
        [ 6,  7]
    ]);

})(window.Hypersolid = window.Hypersolid || {});
