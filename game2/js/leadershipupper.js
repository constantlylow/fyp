function next() {
  location.replace("./game3objupper.html");
}

class leadership extends Phaser.Scene {
  constructor() {
    super({ key: "leadership" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background3", "SLICES/game1background_yourscore.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    //this.load.image('homebtn','SLICES/btn_home.png');
    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    //this.load.image("dics2", "SLICES/dics2.png");

    //this.load.spritesheet(
    //"squ3",
    //"game2/image/Action_Sprite_Trophy_Animation.png",
    //{ frameWidth: 640, frameHeight: 480 }
    //);
    this.load.audio("backgroundmusic", "game2/audio/highscoremusic.mp3");
  }

  create() {
    this.sound.pauseOnBlur = false;
    this.sound.play("backgroundmusic", {
      volume: 0.5,
      autoplay: true,
      allowMultiple: false,
      detune: 100,
    });
    // create a bg sprite
    let bg3 = this.add.sprite(1921 / 2, 430, "background3");
    //let dics2 = this.add.sprite(480, 540, "dics2");
    let hd = this.add.sprite(1921 / 2, 40, "header");

    //change the origin to the top-left corner
    bg3.setScale(1, 0.89);

    // let sprites = this.add.sprite(1070, 800, 'start').setInteractive();
    // sprites.on('pointerover', function (event) {
    //     this.setTint(0xffae42);
    // });
    // sprites.on('pointerout', function (event) {
    //     this.clearTint();
    // });
    // sprites.on('pointerdown', () => ques());

    let spritecb = this.add.sprite(1820, 35, "cancel").setInteractive();
    spritecb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spritecb.on("pointerout", function (event) {
      this.clearTint();
    });
    spritecb.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "end.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => next());

    //let squ3 = this.add.sprite(400, 520, "squ3", 0);
    //squ3.setScale(1, 1);
    //this.anims.create({
    //key: "tro",
    //repeat: -1,
    //frameRate: 45,
    //frames: this.anims.generateFrameNames("squ3", { start: 1, end: 70 }),
    //});
    // squ3.play("tro");

    var c = 1;
    var correctqn = Number(localStorage.getItem(c));
    var w = 2;
    var wrongqn = Number(localStorage.getItem(w));
    let spritecorrectans = this.add
      .text(1080, 375, correctqn + " question(s)", {
        font: "32px Arial",
        fill: "black",
      })
      .setDepth(1);
    let spritewrongans = this.add
      .text(1080, 520, wrongqn + " question(s)", {
        font: "32px Arial",
        fill: "black",
      })
      .setDepth(1);
    var i = 0;
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1130, 650, playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "black",
    });
    }
}

let config = {
  type: Phaser.Auto,
  height: 848,
  width: 1900,
  scene: [leadership],
  parent: "canvas",
};

let game = new Phaser.Game(config);
