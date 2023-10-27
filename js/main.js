



const player = new Player();

const obstaclesArr = [];

setInterval(()=>{
    const newObstacle = new Obstacle()
    obstaclesArr.push(newObstacle);
},3000)

setInterval(()=>{
    obstaclesArr.forEach((ob)=>{
        ob.moveDown();

        if(ob.positionY < 0 - ob.height){
          ob.obstacleElm.remove();
          obstaclesArr.shift();
        }

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


