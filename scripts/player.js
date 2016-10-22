Quintus.ActionPlatformerPlayer = function(Q) {

  Q.Sprite.extend("Player", {    
    init: function(p) {
      this._super(p, {
        sheet: "player",
        jumpSpeed: -450,
        speed: 250,
      });
      this.add("2d, platformerControls");
      var that = this;
     
      this.on("jump", function(){
        if(!that.p.isJumping && that.p.vy < 0) {
          that.p.isJumping = true;
          Q.audio.play("jump.mp3");
        }            
      });

      this.on("bump.bottom", function(){
        that.p.isJumping = false;
      });
    },    
  });
};