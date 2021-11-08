//create a new scene (place where the action takes place characters etc.)
let gameScene = new Phaser.Scene("Game");

//-----------HOME PAGE-----------------------------
class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "sceneA" });
  }

  preload() {
    this.load.image("introbackground", "SLICES/thankyou_page.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("nextbtn", "SLICES/NEW buttons size/new_bttn-next.png");
    this.load.image("QR", "SLICES/frame.png");
  }

  create() {
    //create sprite
    let bg = this.add.sprite(0, 0, "introbackground");
    bg.setPosition(1921 / 2, 850 / 2);
    let top = this.add.sprite(1921 / 2, 30, "top");
    let QR = this.add.sprite(1300, 600, "QR").setScale(0.6, 0.6);
    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);

    const text1 = this.add.text(660, 585, "Click here for more tips", {
      fontFamily: "Roboto",
      fill: "white",
    });

    text1.setFontSize(35);

    //--------------------------NEXT BUTTON------------------------------
    let spritecross = this.add.sprite(1100, 600, "nextbtn").setInteractive();

    spritecross.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });

    spritecross.on("pointerout", function (event) {
      this.clearTint();
    });

    spritecross.on("pointerdown", function () {
      window.open(
        "https://www.posb.com.sg/personal/bank-with-ease/parents",
        "_self"
      );
    });
  }
}

var config = {
  type: Phaser.AUTO, //Phaser will decide to use webgl if available or canvas
  width: 1900,
  height: 950,
  scene: [SceneA],
  pixelArt: false,
  parent: "canvas",
};

var game = new Phaser.Game(config);
