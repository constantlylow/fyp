//create a new scene (place where the action takes place characters etc.)
let gameScene = new Phaser.Scene("Game");

//-----------CHOOSE GAME PAGE-----------------------------
class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "sceneA" });
  }

  preload() {
    this.load.image("selectbackground", "SLICES/diclaimer_bluebg.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("letsgo", "SLICES/bttn_yescontinue.png");
    this.load.image("back", "SLICES/imptinfo.png");
    this.load.audio("backgroundmusic", "SLICES/New music.mp3");
    this.load.image("player", "SLICES/Action Sprite Skate Board.gif");
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");
    this.load.image("disclaimer", "SLICES/disclaimer.png");
    this.load.image("condition", "SLICES/conditionofaccess.png");
    this.load.image("close", "SLICES/btn_close.png");
    this.load.image("placeholder", "SLICES/placeholder_checkpoint[2147].png");
    this.load.image("shadow", "SLICES/black.png");
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
    let bg = this.add.sprite(1921 / 2, 510,  "selectbackground").setScale(1, 1);
    let top = this.add.sprite(1921 / 2, 30, "top");
    //place sprite in the center
    let placeholder = this.add.sprite(1921 / 2, 500, "placeholder")
    .setVisible(false)
    .setDepth(11);
    let shadow = this.add.sprite(1921 / 2, 500, "shadow").setScale(2,2)
    .setDepth(10)
    .setVisible(false);



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



    //--------------------------NEXT BUTTON------------------------------
    let spritenextbtn = this.add.sprite(1350, 700, "letsgo").setInteractive();
    spritenextbtn.setScale(0.8, 0.8);
    spritenextbtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritenextbtn.on("pointerout", function (event) {
      this.clearTint();
    });
    spritenextbtn.on("pointerdown", function () {
      window.location.href = "profile.html";
    });

    //--------------------------white box BUTTON------------------------------
    let spritebackbtn = this.add.sprite(600, 700, "back");


    //--------------------------conditionm BUTTON------------------------------
    let spritecondition = this.add.sprite(450, 600, "condition").setInteractive();
    spritecondition.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritecondition.on("pointerout", function (event) {
      this.clearTint();
    });
    spritecondition.on("pointerdown", function () {
        text6.setVisible(false);
    text7.setVisible(false);
    text8.setVisible(false);
    text9.setVisible(false);
    text10.setVisible(false);
    text11.setVisible(false);
    text12.setVisible(false);
    text13.setVisible(false);
    text14.setVisible(false);
    text15.setVisible(false);
    text16.setVisible(false);
    placeholder.setScale(0.9, 0.9);
    shadow.setVisible(true);
    text1.setVisible(true);
    text4.setVisible(true);
    text2.setVisible(true);
    text3.setVisible(true);
    text5.setVisible(true);
    spriteclose.setVisible(true);
    placeholder.setVisible(true);
    });

    const text1 = this.add.text(
      430,
      350,
      "Access to this third party web site is granted by POSB Bank Limited (hereinafter",
      { fontFamily: "Roboto", fill: "black", fontSize: "30px" }
    ).setDepth(11);

    const text2 = this.add.text(
      430,
      400,
  "known as 'POSB') subject to the terms and conditions set out herein. By ",
      { fontFamily: "Roboto", fill: "black", fontSize: "30px" }
    ).setDepth(11);

    const text3 = this.add.text(
      430,
      450,
  "accessing this web site, you agree to be bound by the terms and conditions set ",
      { fontFamily: "Roboto", fill: "black", fontSize: "30px" }
    ).setDepth(11);

    const text4 = this.add.text(
      430,
      500,
"out herein. If you do not agree to any of these terms and conditions, please ",
      { fontFamily: "Roboto", fill: "black" , fontSize: "30px"}
    ).setDepth(11);

    const text5 = this.add.text(
      430,
      550,
"discontinue your access to this web site immediately.",
      { fontFamily: "Roboto", fill: "black" , fontSize: "30px"}
    ).setDepth(11);

    text1.setVisible(false);
    text2.setVisible(false);
    text3.setVisible(false);
    text4.setVisible(false);
    text5.setVisible(false);

    const text6 = this.add.text(
      380,
      260,
      "POSB makes no representations or warranties in respect of this third party site you are about to",
      { fontFamily: "Roboto", fill: "black", fontSize: "26px" }
    ).setDepth(11);

    const text7 = this.add.text(
      380,
      305,
  "access directly or indirectly via this web site. You acknowledge that the web site you are about to",
      { fontFamily: "Roboto", fill: "black", fontSize: "26px" }
    ).setDepth(11);

    const text8 = this.add.text(
      380,
      350,
  "access is provided by POSB on an 'as is', 'as available' basis. POSB shall in no event be liable for any",
      { fontFamily: "Roboto", fill: "black", fontSize: "26px" }
    ).setDepth(11);

    const text9 = this.add.text(
      380,
      395,
"damage, loss or expense including without limitation, direct, indirect, special, consequential damage,",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text10 = this.add.text(
      380,
      440,
"or economic loss arising from or in connection with:",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text11 = this.add.text(
        410,
      485,
"1. any access, use or the inability to access or use this web site, or reliance on the contents of this web site",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text12 = this.add.text(
      410,
      530,
"2. any system, server or connection failure, error, omission, interruption, delay in transmission, computer",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text13 = this.add.text(
    435,
      565,
"virus or other malicious, destructive or corrupting code, agent, program or macros; Even if POSB or its",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text14 = this.add.text(
    435,
      600,
"agents or employees are advised of the possibility of such damage, loss and/or expense. Access to",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text15 = this.add.text(
    435,
      635,
"this web site is not an endorsement or verification of such web site and such web site should only be",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text16 = this.add.text(
    435,
      670,
"accessed at your own risks. This exclusion clause shall take effect to the fullest extent permitted by law.",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    text6.setVisible(false);
    text7.setVisible(false);
    text8.setVisible(false);
    text9.setVisible(false);
    text10.setVisible(false);
    text11.setVisible(false);
    text12.setVisible(false);
    text13.setVisible(false);
    text14.setVisible(false);
    text15.setVisible(false);
    text16.setVisible(false);


    //--------------------------CLOSE BUTTON------------------------------
    let spriteclose = this.add.sprite(1600, 250, "cross").setInteractive()
    .setVisible(false)
    .setDepth(11);
    spriteclose.setScale(0.9, 0.9);
    spriteclose.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteclose.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteclose.on("pointerdown", function () {
        text1.setVisible(false);
        text2.setVisible(false);
        text3.setVisible(false);
        text4.setVisible(false);
        text5.setVisible(false);
        text6.setVisible(false);
        text7.setVisible(false);
        text8.setVisible(false);
        text9.setVisible(false);
        text10.setVisible(false);
        text11.setVisible(false);
        text12.setVisible(false);
        text13.setVisible(false);
        text14.setVisible(false);
        text15.setVisible(false);
        text16.setVisible(false);
        placeholder.setVisible(false);
        shadow.setVisible(false);
        spriteclose.setVisible(false);
    });

    //--------------------------disclaimer BUTTON------------------------------
    let spritedisclaimer = this.add.sprite(375, 700, "disclaimer").setInteractive();
    spritedisclaimer.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritedisclaimer.on("pointerout", function (event) {
      this.clearTint();
    });
    spritedisclaimer.on("pointerdown", function () {
      placeholder.setScale(1, 1.2);
      text1.setVisible(false);
    text2.setVisible(false);
    text3.setVisible(false);
    text4.setVisible(false);
    text5.setVisible(false);
    shadow.setVisible(true);
        text6.setVisible(true);
        text7.setVisible(true);
        text8.setVisible(true);
        text9.setVisible(true);
        text10.setVisible(true);
        text11.setVisible(true);
        text12.setVisible(true);
        text13.setVisible(true);
        text14.setVisible(true);
        text15.setVisible(true);
        text16.setVisible(true);
    spriteclose.setVisible(true);
    placeholder.setVisible(true);
    });

    const text165 = this.add.text(
    1700,
      900,
"Powered by SQKII",
      { fontFamily: "Roboto", fill: "white" , fontSize: "24px"}
    ).setDepth(11);

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
  height: 950,
  scene: [SceneA],
  pixelArt: false,
  parent: "canvas",
};

var game = new Phaser.Game(config);
