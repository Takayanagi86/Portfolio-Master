(() => {
    var load_state = {
      init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        game.scale.onSizeChange.add(() => { if (game.state.getCurrentState().sizeChange) { game.state.getCurrentState().sizeChange(); }});
      },
      create: function() {
        setTimeout(() => 
          game.state.start('game'),
          100
        );
      }
    };
    var game_state = {
      create: function() {
        var fragmentSrc = [
  
            "precision mediump float;",
  
            "varying vec2      vTextureCoord;",
            "uniform float     time;",
  
            "void main( void ) {",
  
            "vec2 p = vTextureCoord - 0.5;",
  
            "float sx = 0.2 * sin( 1000.0 * p.x - time);",
  
            "float dy = 4./ ( 500.0 * abs(p.y - sx));",
  
            "dy += 1./ (25. * length(p - vec2(p.x, 0.)));",
          
            //"gl_FragColor = vec4( (p.x + 0.1) * dy, 0.3 * dy, dy, 1.1 );",
          
            "gl_FragColor = vec4( 0.1 * dy, 0.3 * dy, 0.7 * dy, 1 );",
  
        "}"];
  
        this.filter = new Phaser.Filter(game, null, fragmentSrc);
  
        this.sprite = game.add.sprite();
        this.sprite.filters = [ this.filter ];
        
        this.sizeChange();
      },
      sizeChange: function() {
        //this.sprite.width = game.width;
        //this.sprite.height = game.height;
        this.sprite.width = 1000;
        this.sprite.height = 600;
      },
      update: function() {
        this.filter.update();
      }
    };
  
    // Initialize Phaser
    var game = new Phaser.Game(800, 601, Phaser.AUTO);
    
    game.state.add('load', load_state);
    game.state.add('game', game_state);
    
    game.state.start('load');
  })();