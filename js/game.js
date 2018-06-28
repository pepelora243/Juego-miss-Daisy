function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.framesCounter = 0
  this.gamePoints = 0
  this.difficulty = 50
  this.reset();
}

Game.prototype.start = function () {
  this.interval = setInterval(function () {
    this.clear();

    $('.score span').text(this.gamePoints)

    this.framesCounter++;
    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }
    //sumar puntos
    if (this.framesCounter % 60 === 0) {
      this.gamePoints += 5
      console.log(this.gamePoints)

    }
    //niveles
    if (this.gamePoints > 50 && this.gamePoints < 75) {
      console.log("nivel1")
      this.difficulty = 20
    } else if (this.gamePoints > 75 && this.gamePoints < 100) {
      this.difficulty = 14
    } else if (this.gamePoints > 100)
      this.difficulty = 8

    if (this.framesCounter % this.difficulty === 0) {
      this.generateObstacle();
    }

    if (this.framesCounter % 80 === 0) {
      this.generateObstacle(true)
    }

    if (this.player.life < 0) {
      this.gameOver()
    }



    this.draw();
    this.move();
    this.touchCar()
    this.clearObstacles();

  }.bind(this), 1000 / this.fps);
};
Game.prototype.stop = function () {
  clearInterval(this.interval);
}

Game.prototype.gameOver = function () {
  document.getElementById("game-over").style.display = "flex";
  document.querySelector(".btn1").style.display = "none"
  this.stop()
  this.resetEvent()
}; 

Game.prototype.resetEvent = function () {
  window.onkeydown = function (event) {
    if (event.key == "Enter") {
      window.location.reload();
    }
  };
};
Game.prototype.reset = function () {
  this.background = new Background(this);
  this.player = new Player(this);
  this.obstacles = []
  this.framesCounter = 0
  this.gamePoints = 0
}

Game.prototype.touchCar = function () {
  for (var i = 0; i < this.obstacles.length; i++) {
    if (this.player.x < this.obstacles[i].x + this.obstacles[i].w &&
      this.player.x + this.player.w > this.obstacles[i].x &&
      this.player.y < this.obstacles[i].y + this.obstacles[i].h &&
      this.player.h + this.player.y > this.obstacles[i].y) {

      if (this.obstacles[i].powerUp) {
        console.log('power')
        this.player.setLife(40)
      } else {
        console.log('obst')
        this.player.setLife(-20);
        this.drawCollision()
      }
      this.obstacles.splice(i, 1);
      return true;
    }
  }
};

Game.prototype.clearObstacles = function () {
  this.obstacles = this.obstacles.filter(function (obstacle) {
    return obstacle.y < this.canvas.height;
  });
};

Game.prototype.generateObstacle = function (powerUp) {
  if (powerUp) this.obstacles.push(new Obstacle(this, true));
  else this.obstacles.push(new Obstacle(this));
};


Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function () {
  this.background.draw();
  this.player.draw()
  this.obstacles.forEach(function (obstacle) { obstacle.draw(); });
}

Game.prototype.move = function () {
  this.player.move()
  this.background.move();
  this.obstacles.forEach(function (obstacle) { obstacle.move(); });
}

Game.prototype.drawCollision = function() {
  document.getElementById("angel").classList.add("visible")
  console.log(document.getElementById("angel"))
  setTimeout(function(){
    document.getElementById("angel").classList.remove("visible")
  },1000)

}