class Player {
  constructor() {
    //initialize properties
    this.width = 20;
    this.height = 10;
    this.positionY = 0;
    this.positionX = 50 - (this.width / 2);
    //dom manipulation to reflect initial values (size, position)
    this.playerElm = document.getElementById("player");
    this.playerElm.style.width = this.width + "vw";
    this.playerElm.style.height = this.height + "vh";
    this.playerElm.style.bottom = this.positionY + "vh";
    this.playerElm.style.left = this.positionX + "vw";
  }
  moveLeft() {
    this.positionX--;
    this.playerElm.style.left = this.positionX + "vw";
  }
  moveRight() {
    this.positionX++;
    this.playerElm.style.left = this.positionX + "vw";
  }
}

class Obstacle {
  constructor() {
    this.width = 30;
    this.height = 10;
    this.positionX = Math.floor(Math.random()*(100 - this.width + 1));
    this.positionY = 90;
    
    this.obstacleElm = null;
    this.createDomElement();  
    }

  createDomElement() {
    // step1: create the element
    this.obstacleElm = document.createElement("div");

    // step2: add content or modify
    this.obstacleElm.classList.add("obstacle");
    this.obstacleElm.style.width = this.width + "vw";
    this.obstacleElm.style.height = this.height + "vh";
    this.obstacleElm.style.left = this.positionX + "vw";
    this.obstacleElm.style.bottom = this.positionY + "vh";

    // step3: append to the dom: `parentElm.appendChild()`
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.obstacleElm);
  }
  moveDown() {
    this.positionY--;
    console.log("moving down....."+ this.positionY);
    this.obstacleElm.style.bottom = this.positionY + "vh";
  }
}

const player = new Player();

const obstaclesArr = [];

setInterval(()=>{
    const newObstacle = new Obstacle()
    obstaclesArr.push(newObstacle);
},3000)

setInterval(()=>{
    obstaclesArr.forEach((ob)=>{
        ob.moveDown();

             // detect collision
             if (
              player.positionX < ob.positionX + ob.width &&
              player.positionX + player.width > ob.positionX &&
              player.positionY < ob.positionY + ob.height &&
              player.positionY + player.height > ob.positionY
          ) {
              //colision detected
              //console.log('game over')
             // location.href = "./gameOver.html"
          }

    })
},50)



// const ob1 = new Obstacle();
// setInterval(()=>{
//     ob1.moveDown();
// },1000)


document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      console.log("pressed left");
      player.moveLeft();
      break;
    case "ArrowRight":
      console.log("pressed right");
      player.moveRight();
      break;
  }
});


