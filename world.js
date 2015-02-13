(function(){


    var Player = {
        name:'hohoho',
        texture: 'enemy',
        x:100, y: 250, w:16, h:16,
        update: function() {
            return true;
        },

        draw: function() {
            ICE.texture.drawRect( 'player', this.x, this.y, this.w, this.h );
        }
    };


    var World = {

        player: null,

        init: function() {

            ICE.texture.load( 'bg', '1.png' );
            ICE.texture.load( 'player', '2.png' );

            this.player = Player;
        },

        update: function() {

            return true;
        },

        draw: function() {

            ICE.texture.drawRect( 'bg', 0, 0, 800, 600 );
            this.player.draw();
            ICE.draw.text( 'mySpace', 700, 10, 16 );
        }

    };

    ICE.addWorld( World );
}());
