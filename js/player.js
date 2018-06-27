function Player(game) {
    this.game = game;

    this.x = this.game.canvas.width * 0.5;
    this.y0 = this.game.canvas.height * 0.8;
    this.y = this.y0;

    this.img = new Image();
    this.img.src = 'img/carraco.png';
    this.img.frames = 3;
    this.img.frameIndex = 0;

    this.w = 50;
    this.h = 75;

    this.moveRight = false;
    this.moveLeft = false;

    this.vx = 1;

    this.ax = 5
    this.life = 100
    

    this.setListeners();
}
Player.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}

Player.prototype.setListeners = function () {
    var RIGHT_KEY = 39;
    var LEFT_KEY = 37;

    document.onkeydown = function (event) {
        if (event.keyCode === RIGHT_KEY) {
            this.moveRight = true;
        }
        if (event.keyCode === LEFT_KEY) {
            this.moveLeft = true;
        }
    }.bind(this);

    document.onkeyup = function (event) {
        if (event.keyCode === RIGHT_KEY) {
            this.moveRight = false;
        }
        if (event.keyCode === LEFT_KEY)
            this.moveLeft = false;
    }.bind(this)
}
Player.prototype.move = function () {
    if (this.moveRight === true && this.x < this.game.canvas.width - (this.w)) {
        this.x += this.vx * this.ax;
    }
    if (this.moveLeft === true && this.x >= 0)  {
        this.x -= this.vx * this.ax
    }
};

Player.prototype.setLife = function(life){
    this.life += life
    console.log(this.life)
}