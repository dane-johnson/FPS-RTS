#pragma strict

public var worldOrigin : Transform;
public var movementSpeed : float;

private var me : CharacterController;
private var target : Transform;

private var idle = true;

function Start(){
  me = GetComponent(CharacterController);
  target = GetNextTarget();
}

function Update(){
  target = GetNextTarget();
  if (target) {
    idle = false;
    var diff = target.position - transform.position;
    diff.y = 0;
    
    if (diff.magnitude > 0.1F){
      
      //Calculate movement vector
      var dir = Vector3.zero;
      
      //Move on x y towards target
      dir = target.position - transform.position;
      //Remove vertical component
      dir.y = 0;
      dir.Normalize();
      
      me.Move(dir * movementSpeed * Time.deltaTime);
    } else {
      Destroy(target.gameObject);
    }
  } else {
    idle = true;
  }
}

function FixedUpdate(){
  //gravity pulls him down
  me.Move(Vector3.down);
}

function GetNextTarget(){
  for (var child : Transform in worldOrigin){
    if (child.gameObject.tag == "Objective") return child;
  }
}

@script RequireComponent(CharacterController)