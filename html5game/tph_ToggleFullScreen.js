function ToggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

function openModal(){
getRandomInt(1,4);
var modal = document.getElementById("myModal");
modal.style.display = "block";
}

function getRandomInt(min, max) {
            let val=Math.floor(Math.random() * (max - min)) + min;
            if(val==1){
              document.getElementById("p1").innerHTML = "You have won a discount coupon for 5% off!";
              document.getElementById("p2").innerHTML = "5_OFF";
            }
            if(val==2){
              document.getElementById("p1").innerHTML = "You have won a discount coupon for 7% off!";
              document.getElementById("p2").innerHTML = "7_OFF";
            }
            if(val==3){
              document.getElementById("p1").innerHTML = "You have won a discount coupon for 10% off!";
              document.getElementById("p2").innerHTML = "10_OFF";
            }
          }