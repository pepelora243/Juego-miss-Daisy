function Player(game) {
    this.game = game;
   
    this.x = this.game.canvas.width * 0.5;
    this.y0 = this.game.canvas.height * 0.9;
    this.y = this.y0;
  
    this.img = new Image();
    this.img.src = 'img/coche.jpg';
    this.img.frames = 3;
    this.img.frameIndex = 0;
  
    this.w = 50;
    this.h = 75;
}
Player.prototype.draw = function() {
    this.game.ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
}  