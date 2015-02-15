//noinspection SpellCheckingInspection
/**
 * Ilya Canvas Engine
 * version: 0.0
 * todo obj ctx: draw and params
 * todo extends: texture, mouse, particles, ...
 */
var ICE = (function(eng){

    var display = {};

    eng.ctx = {};

    eng.viewW = 0;
    eng.viewH = 0;

    eng.app = {};


    function init() {

        display = document.getElementById("display");
        eng.viewW = display.width = document.documentElement.clientWidth;
        eng.viewH = display.height = document.documentElement.clientHeight;
        eng.ctx = display.getContext("2d");
        // todo eng.mouse.init();
        // todo eng.particles.init();

        eng.input.init();

        if ( !eng.app )
            return false;

        eng.app.init();

        return true;
    }


    function update() {

        eng.input.update();

        return eng.app.update();
    }


    function draw() {
        eng.app.draw();
    }


    function loop() {
        var start = new Date();

        if ( update() ) draw();

        var end = new Date();
        var time_ex = (end.getTime()-start.getTime());
        eng.draw.text( time_ex, 10, 10, 10 );
    }


    eng.go = function() {
        window.onload = function() {
            if ( init() )
                setInterval( function(){ loop(); }, 500 );
        }
    };

    eng.setApp = function( module ) {
        eng.app = module;
    };


    /***** DRAW *****/
    function ManagerDraw() {

        this.text = function( text, x, y, font_size ) {
            if ( !font_size ) font_size = 6;
            eng.ctx.font = 'bold ' + font_size + 'px Tahoma';
            eng.ctx.textAlign = 'left';
            eng.ctx.textBaseline = 'top';
            eng.ctx.fillStyle = '#FFF';
            eng.ctx.fillText( text, x, y );
        };
    }


    /***** TEXTURES *****/
    function ManagerTextures() {

        this.count = 0;
        this.textures = {};

        this.load = function( name, file ) {
            var img = new Image();
            img.src = file;
            img.onload = function() {};
            this.count++;
            this.textures[name] = img;
        };

        this.draw = function( name, x, y, w, h ) {
            eng.ctx.drawImage( this.textures[name], x - w / 2, y - h / 2, w, h );
        };

        this.drawFull = function( name, x, y, w, h, cw, ch ) {

            for ( var i = 0; i < cw; i++ )
                for ( var j = 0; j < ch; j++ )
                    eng.ctx.drawImage( this.textures[name], x + w * i, y + h * j, w, h );

        };

        this.drawRect = function( name, x, y, w, h ) {
            eng.ctx.drawImage( this.textures[name], x, y, w, h );
        };


    }

    /***** KEYBOARD/MOUSE *****/
    eng.input = {

        key: 0,

        init: function() {
            document.onkeydown = this.keyDown;
        },

        keyDown: function( e ) {
            eng.input.key = e.keyCode;
            // fixme this.key and eng.input.key
        },

        update: function() {
            //this.key += 1;
        },

        getKey: function() {
            return this.key;
        }

    };


    // draw manager
    eng.draw = new ManagerDraw();

    // texture manager
    eng.texture = new ManagerTextures();

    return eng;

}( ICE || {} ));

ICE.go();