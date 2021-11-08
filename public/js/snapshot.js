//create a new scene (place where the action takes place characters etc.)
let gameScene = new Phaser.Scene("Game");

//-----------HOME PAGE-----------------------------
class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "sceneA" });
  }

  preload() {

    //this.load.image("bg", "SLICES/Dressup coinbox.jpeg");
    //this.load.image("cross", "SLICES/btn_close.png");


  }

  create() {

    let bg = this.add.sprite(1280 / 2, 35, "bg");


    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);

        const text165 = this.add.text(
    1700,
      900,
"Powered by SQKII",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    //--------------------------CROSS BUTTON------------------------------
    let spritecross = this.add
      .sprite(1200, 35, "cross")
      .setInteractive()
      .setScale(0.75, 0.75);
    spritecross.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });

    spritecross.on("pointerout", function (event) {
      this.clearTint();
    });

    spritecross.on("pointerdown", function () {
      window.open("https://www.google.com/", "_self");
    });
  }
}

var config = {
  type: Phaser.AUTO, //Phaser will decide to use webgl if available or canvas
  width: 1920,
  height: 950,
  scene: [SceneA],
  pixelArt: false,
  parent: "canvas",
};

var game = new Phaser.Game(config);
