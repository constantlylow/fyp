let gameScene = new Phaser.Scene("Game");

//-----------SUMMARY PAGE-----------------------------
class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "sceneA" });
  }

  preload() {
    this.load.image(
      "summarybackground",
      "SLICES/game1background_yourscore.png"
    );
    // this.load.image('player','SLICES/Action Sprite Nut Animation.gif');
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");

    this.load.image("nextbtn", "game2/image/new_bttn-next.png");
    this.load.audio("backgroundmusic", "SLICES/highscoremusic.mp3");
  }

  create() {
    this.sound.pauseOnBlur = false;
    this.sound.play("backgroundmusic", {
      volume: 0.5,
      loop: true,
      autoplay: true,
      allowMultiple: false,
      detune: 100,
    });

    //create sprite
    let bg = this.add.sprite(1921 / 2, 400, "summarybackground");

    let top = this.add.sprite(1921 / 2, 30, "top");

    //let player = this.add.sprite(500, 500, "player").setScale(0.6, 0.6);
    // this.anims.create({
    //   key:'walk',
    //   repeat: -1,
    //   frameRate: 50,
    //   frames: this.anims.generateFrameNames('player', {start: 1, end: 74})
    // });
    //
    // player.play('walk');

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var c = 1;
    var correctqn = Number(localStorage.getItem(c));
    var w = 2;
    var wrongqn = Number(localStorage.getItem(w));
    let spritecorrectans = this.add
      .text(1080, 350, correctqn + " question(s)", {
        font: "32px Arial",
        fill: "black",
      })
      .setDepth(1);
    let spritewrongans = this.add
      .text(1080, 500, wrongqn + " question(s)", {
        font: "32px Arial",
        fill: "black",
      })
      .setDepth(1);
    var i = 0;
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1130, 655, playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "black",
    });

    //--------------------------CROSS BUTTON------------------------------
    let spritecross = this.add.sprite(1820, 35, "cross").setInteractive();
    spritecross.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });

    spritecross.on("pointerout", function (event) {
      this.clearTint();
    });

    spritecross.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "end.html";
      }
    });

    //--------------------------NEXT BUTTON------------------------------
    let spritenextbtn = this.add.sprite(1800, 770, "nextbtn").setInteractive();
    spritenextbtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });

    spritenextbtn.on("pointerout", function (event) {
      this.clearTint();
    });

    spritenextbtn.on("pointerdown", function () {
      window.location.href = "game2objlower.html";
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
