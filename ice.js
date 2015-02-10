//noinspection SpellCheckingInspection
/**
 * Ilya Canvas Engine
 * version: 0.0
 */
var ICE = (function(eng){


    function init() {
        // todo init
    }


    function update() {
        // todo world.update
    }


    function draw() {
        // todo world.draw
    }


    function loop() {
        var start = new Date();

        if ( update() ) draw();

        var end = new Date();
        time_ex = (end.getTime()-start.getTime());
        //console.log(time_ex);
    }


    eng.go = function() {
        window.onload = function() {
            init();
            setInterval( function(){ loop(); }, 50 );
        }
    };

    eng.addWorld = function( module ) {
        // todo eng.world = module;
    };


    return eng;

}( ICE || {} ));

ICE.go();