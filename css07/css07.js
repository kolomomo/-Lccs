/**
 * Created by 18717 on 2017/3/13.
 */
function player() {
        var audio = document.getElementById('music');
        if(audio.paused){
            audio.play();
        }
        else{
            audio.pause();
        }
    }
function vote() {
    window.location.href="./css07_3.html";
}
function again() {
    window.location.href="./css07_1.html";
}