#pragma strict
import UnityEngine.Networking;

public class CameraController extends NetworkBehaviour{
  var buffer : float;
  var panSpeed : float;
  
  function Start(){
    if (!isLocalPlayer){
      transform.GetChild(0).gameObject.SetActive(false);
      GetComponent(ObjectiveSpawner).enabled = false;
    }
  }

  function Update() {
    var dir = Vector3.zero;
    if (Input.mousePosition.x <= buffer){
      dir += Vector3.left;
    } else if (Input.mousePosition.x >= Screen.width - buffer) {
      dir += Vector3.right;
    }
    if (Input.mousePosition.y <= buffer){
      dir += Vector3.back;
    } else if (Input.mousePosition.y >= Screen.height - buffer) {
      dir += Vector3.forward;
    }
    
    transform.Translate(dir * Time.deltaTime * panSpeed);
  }
}