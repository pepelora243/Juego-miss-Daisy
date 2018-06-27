function Obstacle(game,powerUp) {
  this.game = game;
  this.w = 50;
  this.h = 80;
  
  this.dx = Math.round(Math.random()) * 2 - 1;
  this.dy = this.game.background.vy;
  
  this.x = Math.random() * this.game.canvas.width;
  this.y = Math.random() * ((this.game.canvas.height / 10) - 10) + 10;
  
  this.powerUp = false;
  if (powerUp) this.powerUp = true;

  this.img = new Image();
  
  console.log(this.powerUp)
  
}
Obstacle.prototype.draw = function () {
  this.img.src = "img/missDaisy.png";
  if(this.powerUp)this.img.src = "img/cat.png";
  this.game.ctx.drawImage(this.img,this.x, this.y, this.w, this.h);
};
Obstacle.prototype.move = function () {
  this.x -= this.dx;
  this.y += this.dy;
};