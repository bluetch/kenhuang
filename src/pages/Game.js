import React from "react";


class Game extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    var myGamePiece;
    var myObstacle;
    var myGameArea = {
      canvas: document.createElement("myCanvas"),
      start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(this.updateGameArea, 20);
      },
      clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  

startGame() {
  this.myGamePiece = new this.component(30, 30, "red", 10, 120);
  this.myObstacle = new this.component(10, 200, "green", 300, 120);
  this.myGameArea.start();
}



component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    var ctx = this.myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

updateGameArea() {
  this.myGameArea.clear();
  this.myObstacle.update();
  this.myGamePiece.newPos();
  this.myGamePiece.update();
}

moveup() {
  this.myGamePiece.speedY = -1;
}

movedown() {
  this.myGamePiece.speedY = 1;
}

moveleft() {
  this.myGamePiece.speedX = -1;
}

moveright() {
  this.myGamePiece.speedX = 1;
}

clearmove() {
  this.myGamePiece.speedX = 0;
  this.myGamePiece.speedY = 0;
}

componentDidMount() {


}
render() {
  return (
    <section className="game-page">
      <div className="container">
        <div className="jumbotron">
          <h1>Game</h1>
        </div>
        <canvas id="myCanvas"></canvas>
        <button onClick={this.btnClick}>Button</button>
      </div>
    </section>
  )
}
};

export default Game;