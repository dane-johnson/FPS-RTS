#pragma strict

var walkPoint : GameObject;
private var worldOrigin : Transform;

function Start(){
  worldOrigin = GameObject.Find("WorldOrigin").transform;
}

function Update(){
  
  if (Input.GetButtonDown("Fire1")){
    
    //If there is already a walkPoint, remove it
    for (var child : Transform in worldOrigin){
      if (child.gameObject.tag == "Objective"){
        Destroy(child.gameObject);
      }
    }
    
    var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    var hitInfo : RaycastHit;
    
    Physics.Raycast(ray, hitInfo);
    
    var myWalkPoint = Instantiate(walkPoint, hitInfo.point, Quaternion.identity);
    myWalkPoint.transform.SetParent(worldOrigin);
  }
}