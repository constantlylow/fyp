//create a new scene (place where the action takes place characters etc.)
let gameScene = new Phaser.Scene("Game");

//-----------HOME PAGE-----------------------------
class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "sceneA" });
  }

  preload() {
    this.load.image("introbackground", "SLICES/Bluebg.jpeg");
    this.load.image("placeholder", "SLICES/INTRO PAGE/login_placeholder.png");
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("speech", "SLICES/login_message.png");
    this.load.image("introname", "SLICES/mynameis.png");
    this.load.audio("backgroundmusic", "SLICES/New music.mp3");
    this.load.image("player", "SLICES/Sprite-Winking-Animation.gif");
  }

  create() {
    let music = this.sound.add("backgroundmusic");
    let muteState = false;
    const playMusic = () => {
      if (!this.sound.locked) {
        // already unlocked so play
        music.play();
      } else {
        // wait for 'unlocked' to fire and then play
        this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
          music.play();
        });
      }
    };

    setTimeout(() => {
      playMusic();
    }, 1000);

    //create sprite

    let bg = this.add.sprite(1921 / 2, 510, "introbackground").setScale(1.5, 1);

    let top = this.add.sprite(1921 / 2, 30, "top");
    // let placeholder = this.add
    //   .sprite(1300 / 2, 350, "placeholder")
    //   .setScale(1, 0.75);
    let speech = this.add.sprite(970, 200, "speech");
    let player = this.add.sprite(400, 500, "player").setScale(0.5, 0.5);
    // this.anims.create({
    //   key:'walk',
    //   repeat: -1,
    //   frameRate: 50,
    //   frames: this.anims.generateFrameNames('player', {start: 1, end: 64})
    // });
    // player.play('walk');

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);

    //--------------------------CROSS BUTTON------------------------------
    let spritecross = this.add
      .sprite(1800, 35, "cross")
      .setInteractive()
      .setScale(0.75, 0.75);
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

    //--------------------------MUTE BUTTON------------------------------
    let spriteunmute = this.add
      .sprite(1860, 35, "unmutebtn")
      .setInteractive()
      .setScale(0.35, 0.35);

    spriteunmute.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });

    spriteunmute.on("pointerout", function (event) {
      this.clearTint();
    });

    spriteunmute.on("pointerdown", function () {
      muteState = !muteState;
      if (muteState) {
        music.stop();
        this.setTexture("mutebtn");
      } else {
        playMusic();
        this.setTexture("unmutebtn");
      }
    });
  }
}

var config = {
  type: Phaser.AUTO, //Phaser will decide to use webgl if available or canvas
  width: 1920,
  height: 930,
  scene: [SceneA],
  pixelArt: false,
  parent: "canvas",
};

var game = new Phaser.Game(config);
