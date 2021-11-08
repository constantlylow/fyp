let music = this.sound.add("backgroundmusic");
let muteState = false;

function PlayorStopMusic(){
    if (muteState == true) {
      music.play();
      this.setTexture("mutebtn");
    } else {
      music.stop();
      this.setTexture("unmutebtn");
    }
}



