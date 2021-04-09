let lamp="off";
function flipSwitch() {
    if(lamp==="off") {
        lamp="on";
        document.getElementById("landing-img").src="images/bg_on.png";
    }
    else {
        lamp="off";
        document.getElementById("landing-img").src="images/bg_off.png";
    }
}