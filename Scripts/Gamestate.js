#pragma strict

import UnityEngine.Networking;

class Gamestate extends NetworkBehaviour{
  @SyncVar
  var playerClass : PlayerClass;
}

enum PlayerClass {FPS,RTS}