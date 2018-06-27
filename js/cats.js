function Cats(game) {
    this.game = game;
  
    this.w = 15;
    this.h = this.w * 3;
  
    this.dx = Math.round(Math.random()) * 2 - 1;
    this.dy = this.game.background.vy;
  
    this.x = Math.random() * this.game.canvas.width;
    this.y = Math.random() * ((this.game.canvas.height / 10) - 10) + 10;
  
  }
  Cats.prototype.draw = function () {
    this.game.ctx.fillStyle = "green";
    this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
  };
  Cats.prototype.move = function () {
    this.x -= this.dx;
    this.y += this.dy;
  };