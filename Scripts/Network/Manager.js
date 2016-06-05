#pragma strict

import UnityEngine.Networking;

public class Manager extends NetworkManager{
  
  var FPSPrefab : GameObject;
  var RTSPrefab : GameObject;
  
  private var count = 0;
  
  private var gamestate : Gamestate;
  
  function Start(){
    gamestate = GameObject.Find("Gamestate").GetComponent(Gamestate);
  }
  
  public override function OnServerAddPlayer(conn: NetworkConnection, playerControllerId : short){
    if (gamestate.playerClass == PlayerClass.FPS){
      playerPrefab = FPSPrefab;
    } else if (gamestate.playerClass == PlayerClass.RTS) {
      playerPrefab = RTSPrefab;
      // There can only be one!
      gamestate.playerClass = PlayerClass.FPS;
    }
    
    var playerObject : GameObject = Instantiate(playerPrefab, Vector3(0,0,2), Quaternion.identity);
    
    NetworkServer.AddPlayerForConnection(conn, playerObject, playerControllerId);
  }
}