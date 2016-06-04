#pragma strict

public var foodParent : GameObject;
public var movementSpeed : float;

private var me : CharacterController;
private var target : Transform;

function Start(){
  me = GetComponent(CharacterController);
  target = FindClosestChild();
}

function Update(){
  target = FindClosestChild();
  if (target) {
    //Calculate movement vector
    var dir = Vector3.zero;
    
    //Move on x y towards target
    dir = target.position - transform.position;
    //Remove vertical component
    dir = dir - Vector3.Project(dir, Vector3.up);
    dir.Normalize();
    
    me.Move(dir * movementSpeed * Time.deltaTime);
  }
}

function FindClosestChild(){
  var myPos = transform.position;
  
  var children = foodParent.GetComponentInChildren(Transform);
  
  var closest : Transform;
  var dist : float;
  for(var t : Transform in children){
    if(!closest || Vector3.Distance(myPos, t.position) < dist){
      closest = t;
      dist = Vector3.Distance(myPos, t.position);
    }
  }
  
  return closest;
}

function OnControllerColliderHit(c: ControllerColliderHit){
  if (c.gameObject.name == target.gameObject.name){
    Destroy(c.gameObject);
  }
}

@script RequireComponent(CharacterController)