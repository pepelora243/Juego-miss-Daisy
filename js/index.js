window.onload = function() {
  document.getElementById("start").onclick = function() {
   var game = new Game("canvas",1);
   document.getElementById("inicio").style.display = "none"
   game.start()
   document.querySelector(".score").style.display = "flex"
   
  }
};
