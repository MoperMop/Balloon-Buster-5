function createBalloon(){
  balloon = new Balloon(Math.random()*300+50, Math.random()*350+200, Math.round(Math.random()*3)+1);
}


function fireArrow(){
  if(arrow != null){arrow.lifetime = 0;}
  arrow = createSprite(500,bow.y,5,30);
  arrow.addImage("arrow", arrowImage); 
  arrow.scale = 0.375;
  arrow.velocityX = -10;
  arrow.setCollider("rectangle", -110, -5, 30, 45);
  shots = shots+1;
}