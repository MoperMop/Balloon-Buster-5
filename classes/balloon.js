class Balloon{
  constructor(x,y,color){
    this.sprite = createSprite(x,y,21,52);
    this.sprite.velocityY = -3;
    this.sprite.lifetime = this.sprite.y/3;
    balloonGroup.push(this.sprite);
    this.sprite.color = color;
    switch(color){
      case 1:
        this.sprite.addImage("blueBalloon", blueBalloonImage);
        this.sprite.scale = 0.18;


        this.sprite.setCollider("circle", 0, -50, 245);
      break;
      case 2:
        this.sprite.addImage("greenBalloon", greenBalloonImage);
        this.sprite.scale = 0.125;


        this.sprite.setCollider("circle", 0, -122.5, 285);
      break;
      case 3:
        this.sprite.addImage("redBalloon", redBalloonImage);
        this.sprite.scale = 0.11;


        this.sprite.setCollider("circle", 0, -115, 275);
      break;
      case 4:
        this.sprite.addImage("pinkBalloon", pinkBalloonImage);
        this.sprite.scale = 1.1;


        this.sprite.setCollider("circle", 0, -8.5, 22)
      break;
    }
  }
  /*checkPop(){
    if(balloon.isTouching(arrow)){
      balloon.visible = false;


      score = score+1;
    }
  }*/
}