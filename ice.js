//noinspection SpellCheckingInspection
/**
 * Ilya Canvas Engine
 * version: 0.0
 */
var ICE = (function(eng){

    var display = {};

    eng.ctx = {};

    eng.viewW = 0;
    eng.viewH = 0;

    eng.world = {};


    function init() {
        // todo init
        display = document.getElementById("display");
        eng.viewW = display.width = document.documentElement.clientWidth;
        eng.viewH = display.height = document.documentElement.clientHeight;
        eng.ctx = display.getContext("2d");
        // todo eng.mouse.init();
        // todo eng.particles.init();
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