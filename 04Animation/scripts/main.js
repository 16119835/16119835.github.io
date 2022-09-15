var rotationSpeed = 0.01;
var updown = 0.5;
var myOtherBox = document.getElementById('myOtherBox');

function spin() {
    myOtherBox.object3D.rotation.x -= rotationSpeed;
    myOtherBox.object3D.rotation.y += rotationSpeed;
    myOtherBox.object3D.rotation.z += updown;

    console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps
