#pragma strict

public var foodParent : GameObject;

private var target : Transform;
private var isFacingTarget = false;

function Start(){
  target = FindClosestChild();
}

function FixedUpdate(){
  var rb = GetComponent(Rigidbody);
  
  if(!isFacingTarget){
    turnToFaceTarget();
  } else {
    moveTowardsTarget();
  }
}

function FindClosestChild(){
  var myPos = transform.position;
  
  var children = foodParent.GetComponentInChildren.<Transform>();
  
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

function turnToFaceTarget(){}
function moveTowardsTarget(){}