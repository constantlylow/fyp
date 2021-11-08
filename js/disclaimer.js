//create a new scene (place where the action takes place characters etc.)
let gameScene = new Phaser.Scene("Game");

//-----------CHOOSE GAME PAGE-----------------------------
class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "sceneA" });
  }

  preload() {
    this.load.image("selectbackground", "SLICES/Bluebg.jpeg");
    //this.load.image("top", "SLICES/taskbar.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("letsgo", "SLICES/bttn_yes.png");
    this.load.image("back", "SLICES/bttn_no.png");
    this.load.audio("backgroundmusic", "SLICES/New music.mp3");
    this.load.image("player", "SLICES/Action Sprite Skate Board.gif");
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");
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
    let bg = this.add.sprite(1921 / 2, 510,  "selectbackground").setScale(1.2, 1.15);

    //place sprite in the center



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
    const disclaimertext1 = this.add.text(20, 100, "You are now leaving POSB Bank's web site to access a third party web site. Please read our important information before proceeding.",
    { fontFamily : "Roboto",
    fill : "black",
    fontSize: "30px",

    });
    const disclaimertext2 = this.add.text(20, 180, "Important Information",
    {fontFamily: "Roboto",
    fill: "black",
    fontSize: "26px",
    });
    const disclaimertext3 = this.add.text(20, 240, "Conditions of Access",
    {fontFamily: "Roboto",
    fill: "black",
    fontSize: "24px",
    });
    const disclaimertext4 = this.add.text(20, 280, "Access to this third party web site is granted by POSB Bank Limited (hereinafter known as 'POSB') subject to the terms and condition.",
    {fontFamily: "Roboto",
    fill: "black",
    fontSize: "22px",
    });
    const disclaimertext5 = this.add.text(20, 360, "Disclaimer",
    {fontFamily: "Roboto",
    fill: "black",
    fontSize: "24px",
    });
    const disclaimertext6 = this.add.text(20, 400, "POSB makes no representations or warranties in respect of this third party site you are about to access directly or indirectly via this web site. You acknowledge that the web site you are about",
    {fontFamily: "Roboto",
    fill: "black",
    fontSize: "22px",
    });
    const disclaimertext7 = this.add.text(20, 440, "to access is provided by POSB on an 'as is', 'as available' basis. POSB shall in no event be liable for any damage, loss or expense including without limitation, direct, indirect, special, or",
    {fontFamily: "Roboto",
    fill: "black",
    fontSize: "22px",
    });
    const disclaimertext8 = this.add.text(20, 480, "consequential damage, or economic loss arising from or in connection with:",
    {fontFamily: "Roboto",
    fill: "black",
    fontSize: "22px",
    });
    const disclaimertext9 = this.add.text(50, 520, "1. any access, use or the inability to access or use this web site, or reliance on the contents of this web site;",
    {fontFamily: "Roboto",
    fill: "black",
    fontSize: "22px",
    });
    const disclaimertext10 = this.add.text(50, 560, "2. any system, server or connection failure, error, omission, interruption, delay in transmission, computer virus or other malicious, destructive or corrupting code, agent, program or macros; ",
    {fontFamily: "Roboto",
    fill: "black",
    fontSize: "22px",
    });
    const disclaimertext11 = this.add.text(70, 600, "if POSB or its agents or employees are advised of the possibility of such damage, loss and/or expense. Access to this web site is not an endorsement or verification of such web site and ",
    {fontFamily: "Roboto",
    fill: "black",
    fontSize: "22px",
    });
    const disclaimertext12 = this.add.text(70, 640, "such web site should only be accessed at your own risks. This exclusion clause shall take effect to the fullest extent permitted by law.",
    {fontFamily: "Roboto",
    fill: "black",
    fontSize: "22px",
    });
    const disclaimertext13 = this.add.text(20, 720, "Do you wish to proceed?",
    {fontFamily: "Roboto",
    fill: "black",
    fontSize: "26px",
    });


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

    //--------------------------BACK BUTTON------------------------------
    let spritebackbtn = this.add.sprite(1550, 850, "back").setInteractive();
    spritebackbtn.setScale(0.8, 0.8);
    spritebackbtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritebackbtn.on("pointerout", function (event) {
      this.clearTint();
    });
    spritebackbtn.on("pointerdown", function () {
      window.location.href = "choosegame.html";
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
  width: 1900,
  height: 950,
  scene: [SceneA],
  pixelArt: false,
  parent: "canvas",
};

var game = new Phaser.Game(config);
