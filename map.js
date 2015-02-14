var Map = (function(){

    return {

        init: function() {
            ICE.texture.load( 'bg', '1.png' );
        },

        update: function() {

        },

        draw: function() {
            ICE.texture.drawFull( 'bg', 0, 0, 256, 256, 5, 4 );
        }

    }


}());