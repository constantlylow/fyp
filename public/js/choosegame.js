//create a new scene (place where the action takes place characters etc.)
let gameScene = new Phaser.Scene("Game");

//-----------CHOOSE GAME PAGE-----------------------------
class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "sceneA" });
  }

  preload() {
    this.load.image("selectbackground", "SLICES/INTRO PAGE/gamejourney.jpg");
    //this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("letsgo", "SLICES/NEW buttons size/new_bttn-start.png");
    this.load.image("lowerpri", "SLICES/new_bttn-lowerpri.png");
    this.load.audio("backgroundmusic", "SLICES/New music.mp3");
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");
    //this.load.image("player", "SLICES/Action Sprite Skate Board.gif");
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

    let bg = this.add.sprite(1921 / 2, 510, "selectbackground").setScale(1,0.95);
    //let top = this.add.sprite(1921/2, 50, 'top');
    let lowerpri = this.add.sprite(120, 850, "lowerpri");
    // let spritegame1btn = this.add.sprite(300, 550, 'game1_btn');
    // let spritegame2btn = this.add.sprite(1000, 460, 'game2_btn');
    // let spritegame3btn = this.add.sprite(1200, 760, 'game3_btn');
    // let spritebonusbtn = this.add.sprite(1700, 580, 'bonus_btn');



    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);

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
        const text165 = this.add.text(
    1700,
      900,
"Powered by SQKII",
      { fontFamily: "Roboto", fill: "white" , fontSize: "24px"}
    ).setDepth(11);
    //--------------------------NEXT BUTTON------------------------------
    let spritenextbtn = this.add.sprite(1750, 850, "letsgo").setInteractive();
    spritenextbtn.setScale(0.8, 0.8);
    spritenextbtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritenextbtn.on("pointerout", function (event) {
      this.clearTint();
    });
    spritenextbtn.on("pointerdown", function () {
      window.location.href = "game1lower.html";
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
    })
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
  height: 950,
  scene: [SceneA],
  pixelArt: false,
  parent: "canvas",

};

var game = new Phaser.Game(config);
