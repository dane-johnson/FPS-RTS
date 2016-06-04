#pragma strict

var movementSpeed : float;
var sensitivity : float;

private var me : CharacterController;
private var cameraTransform : Transform;

function Start(){
  me = GetComponent(CharacterController);
  cameraTransform = GetComponentsInChildren(Transform)[1];
}

function FixedUpdate(){
  
  //Movement
  var movement = Vector3.zero;
  
  movement += Vector3.forward * Input.GetAxis("Vertical");
  movement += Vector3.right   * Input.GetAxis("Horizontal");
  
  movement = transform.TransformDirection(movement);
  
  me.Move(movement * movementSpeed * Time.deltaTime);
  
  //Rotation
  
  var rotation = Vector3.zero;
  
  rotation += Vector3.up * Input.GetAxis("FPSCameraHorizontal");
  transform.Rotate(rotation * sensitivity *  Time.deltaTime);
  
  var cameraRotation = Vector3.right * Input.GetAxis("FPSCameraVertical");
  
  var currRotation = cameraTransform.localEulerAngles + cameraRotation;
  
  if (currRotation.x > 90 && currRotation.x < 180){
    currRotation.x = 90;
  } else if (currRotation.x > 180 && currRotation.x < 270){
    currRotation.x = 270;
  }
  
  cameraTransform.localEulerAngles = currRotation;
}