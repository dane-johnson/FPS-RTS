#pragma strict

var playerClass : PlayerClass;

var rtsCamera : GameObject;
var fpsCamera : GameObject;

enum PlayerClass {
  FPS,
  RTS
}

function Start(){
  //cache the cameras
  rtsCamera = GameObject.Find("RTSCamera");
  fpsCamera = GameObject.Find("FPSCamera");
  
  switch (playerClass){
  case PlayerClass.FPS:
    rtsCamera.SetActive(false);
    break;
  case PlayerClass.RTS:
    fpsCamera.SetActive(false);
    break;
  }
}