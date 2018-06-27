function Background(game) {
    this.game = game;
  
    this.img = new Image();
    this.img.src = 'img/carretera.png';
  
    this.x = 0;
    this.y = 0;

    this.vy = 12;
}
Background.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.img, this.x, this.y - this.game.canvas.height, this.game.canvas.width, this.game.canvas.height);
}

Background.prototype.move = function() {
    this.y += this.vy;
    if(this.y > this.game.canvas.height) this.y = 0
}