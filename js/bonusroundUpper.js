let gameScene = new Phaser.Scene("Game");

//-----------SUMMARY PAGE-----------------------------
class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "sceneA" });
  }

  preload() {
    this.load.image("background", "SLICES/bonusround.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "game2/image/btn_close.png");
    // this.load.image('homebtn','SLICES/btn_home.png');
    this.load.image("nextbtn", "game2/image/new_bttn-next.png");
    this.load.audio("backgroundmusic", "SLICES/New music.mp3");
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");
  }

  create() {


    //create sprite
    let bg = this.add.sprite(1921 / 2, 380, "background").setScale(1, 1.1);
    let top = this.add.sprite(1921 / 2, 30, "top");

    //place sprite in the center

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    //--------------------------CROSS BUTTON------------------------------
    let spritecross = this.add.sprite(1820, 35, "cross").setInteractive();
    spritecross.on("pointerover", function (event) {
      this.setTint(0xf0f8ff);
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
    let spritenextbtn = this.add.sprite(1840, 780, "nextbtn").setInteractive();
    spritenextbtn.on("pointerover", function (event) {
      this.setTint(0xffe4b5);
    });

    spritenextbtn.on("pointerout", function (event) {
      this.clearTint();
    });

    spritenextbtn.on("pointerdown", () => this.scene.start("sceneB"));
  }
}
//-----------SUMMARY PAGE-----------------------------
class SceneB extends Phaser.Scene {
  constructor() {
    super({ key: "sceneB" });
  }

  preload() {
    this.load.image("titlebackground", "SLICES/background (2).png");
    // this.load.image('player','SLICES/Action Sprite Nut Animation.gif');
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "game2/image/btn_close.png");
    //this.load.image('homebtn','SLICES/btn_home.png');
    this.load.image("startbtn", "SLICES/new_bttn-start.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.audio("backgroundmusic", "SLICES/New music.mp3");
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
    let bg = this.add
      .sprite(1921 / 2, 430, "titlebackground")
      .setScale(1, 0.95);
    let top = this.add.sprite(1921 / 2, 30, "top");
    let coinholder = this.add.sprite(1700, 170, "coinholder");
    let nameholder = this.add.sprite(250, 170, "nameholder");

    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(150, 150, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1680, 155, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    //--------------------------CROSS BUTTON------------------------------
    let spritecross = this.add.sprite(1820, 35, "cross").setInteractive();
    spritecross.on("pointerover", function (event) {
      this.setTint(0xf0f8ff);
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
    let spritestartbtn = this.add
      .sprite(1750, 770, "startbtn")
      .setInteractive();
    spritestartbtn.on("pointerover", function (event) {
      this.setTint(0xffe4b5);
    });

    spritestartbtn.on("pointerout", function (event) {
      this.clearTint();
    });

    spritestartbtn.on("pointerdown", function () {
      window.location.href = "dressupsmileyUpper.html";
    });

     //--------------------------MUTE BUTTON------------------------------
    let spriteunmute = this.add
      .sprite(1750, 35, "unmutebtn")
      .setInteractive()
      .setScale(0.4, 0.4);

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
  scene: [SceneA, SceneB],
  pixelArt: false,
  parent: "canvas",
};

var game = new Phaser.Game(config);
