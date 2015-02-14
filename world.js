(function(){


    var Player = {
        name:'hohoho',
        texture: 'enemy',
        x:100, y: 250, w:16, h:16,
        update: function() {


            if ( ICE.input.key == 37 )
                this.x -= 10;
            if ( ICE.input.key == 39 )
                this.x += 10;
            if ( ICE.input.key == 38 )
                this.y -= 10;
            if ( ICE.input.key == 40 )
                this.y += 10;

            return true;
        },

        draw: function() {
            ICE.texture.drawRect( 'player', this.x, this.y, this.w, this.h );
        }
    };


    var Game = {

        player: null,
        map: null,

        init: function() {


            ICE.texture.load( 'player', '2.png' );

            this.player = Player;
            this.map = Map;

            this.map.init();
        },

        update: function() {

            this.player.update();

            return true;
        },

        draw: function() {


            this.map.draw();
            this.player.draw();
            ICE.draw.text( 'mySpace', 700, 10, 16 );
        }

    };

    ICE.setApp( Game );
}());
