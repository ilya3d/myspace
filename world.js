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


    var Planet = {
        x: 0,
        y: 0,
        r: 20,
        m: 0,
        texture: 'planet',
        preInit: function() {
            ICE.texture.load( 'planet', '3.png' );
        },
        draw: function() {
            ICE.texture.drawRect( this.texture, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r );
        },
        update: function() {

        }
    };


    var Game = {

        units: null,
        player: null,
        map: null,

        init: function() {


            ICE.texture.load( 'player', '2.png' );

            this.units = Collection;
            this.units.addUnit( Planet, {x: 300, y: 300, m: 1000, r: 20} );
            this.units.addUnit( Planet, {x: 700, y: 200, m: 2000, r: 38} );

            this.player = Player;
            this.map = Map;

            this.map.init();
        },

        update: function() {

            this.player.update();
            this.units.update();

            return true;
        },

        draw: function() {


            this.map.draw();
            this.units.draw();
            this.player.draw();
            ICE.draw.text( 'mySpace', 700, 10, 16 );
        }

    };

    ICE.setApp( Game );
}());
