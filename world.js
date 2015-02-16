(function(){


    var Player = {
        name:'hohoho',
        texture: 'enemy',
        x:100, y: 250, w:32, h:32,
        alp: 0,
        v: 0,
        v_max: 4,
        v_add: 0.2,
        update: function() {


            if ( ICE.input.keyPress(37) )
                this.alp -= 2;
            if ( ICE.input.keyPress(39) )
                this.alp += 2;

            if ( ICE.input.keyPress(38) && this.v < this.v_max )
                this.v += this.v_add;
            if ( ICE.input.keyPress(40) && this.v > this.v_add )
                this.v -= this.v_add;

            this.x += this.v * Math.cos( this.alp * Math.PI / 180 );
            this.y += this.v * Math.sin( this.alp * Math.PI / 180 );

            return true;
        },

        draw: function() {
            ICE.texture.drawRot( 'player', this.x, this.y, this.w, this.h, this.alp );
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


    var Bonus = {
        x: 0, y: 0, r: 10,
        texture: 'bonus',
        dead: false,
        preInit: function() {
            ICE.texture.load( 'bonus', '4.png' );
        },
        draw: function() {
            if ( !this.dead )
                ICE.texture.drawRect( this.texture, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r );
        },
        update: function() {
            if ( !this.dead ) {
                if ( this.getDistance(Game.player.x, Game.player.y) < 10 )
                    this.dead = true;
            }
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

            this.units.addUnit( Bonus, {x: 500, y: 500} );
            this.units.addUnit( Bonus, {x: 100, y: 300} );
            this.units.addUnit( Bonus, {x: 400, y: 370} );
            this.units.addUnit( Bonus, {x: 500, y: 120} );

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
