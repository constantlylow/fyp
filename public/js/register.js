let gameScene = new Phaser.Scene("Game");

//-----------HOME PAGE-----------------------------
class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "sceneA" });
  }

  preload() {
    this.load.image("top", "SLICES/taskbar.png");
    this.load.image("pic", "SLICES/register.png");
    this.load.image("cross", "SLICES/btn_close.png");
  }

  create() {
    this.add.image(1280 / 2, 330, "pic").setScale(0.7, 0.6);
    this.add.image(1280 / 2, 38, "top").setScale(0.67, 0.68);

    //--------------------------CROSS BUTTON------------------------------
    let spritecross = this.add.image(1220, 38, "cross").setInteractive();
    spritecross.setScale(0.8, 0.8);
    spritecross.on("pointerover", function (event) {
      this.setTint(0xf0ffff);
    });
    spritecross.on("pointerout", function (event) {
      this.clearTint();
    });
    spritecross.on("pointerdown", function () {
      window.open("index.html", "_self");
    });

    document.getElementById("submit").addEventListener("click", myFunction);
    function myFunction() {
      var inputUsername = document.getElementById("username");
      var inputPassword = document.getElementById("password");
      var inputEmail = document.getElementById("contact");
      var inputPri = document.getElementById("prisch");
      if (
        inputUsername.value !== "" &&
        inputPassword.value !== "" &&
        inputEmail.value !== "" &&
        inputPri.value !== ""
      ) {
        window.location.href = "name.html";
      } else {
        document.getElementById("errormsg").style.visibility = "visible";
      }
    }
  }
}

var config = {
  type: Phaser.AUTO, //Phaser will decide to use webgl if available or canvas
  width: 1280,
  height: 572,
  // width: 1900,
  // height: 950,
  scene: [SceneA],
  pixelArt: false,
  parent: "canvas",
};

var game = new Phaser.Game(config);
