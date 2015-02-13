(function(){

    var World = {

        init: function() {

            ICE.texture.load( 'bg', '1.png' );
        },

        update: function() {

            return true;
        },

        draw: function() {

            ICE.texture.drawRect( 'bg', 0, 0, 800, 600 );
            ICE.draw.text( 'mySpace', 700, 10, 16 );
        }

    };

    ICE.addWorld( World );
}());
