//create a new scene (place where the action takes place characters etc.)
let gameScene = new Phaser.Scene("Game");

//-----------CHOOSE GAME PAGE-----------------------------
class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "sceneA" });
  }

  preload() {
  localStorage.setItem("click", 0);
    this.load.image("selectbackground", "SLICES/diclaimer_bluebg.png");
    this.load.image("bg", "SLICES/Bluebg.jpeg");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("letsgo", "SLICES/bttn_yescontinue.png");
    this.load.image("back", "SLICES/imptinfo.png");
    this.load.image("place", "SLICES/imptinfo2.png");
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
    let bgr = this.add.sprite(1921 / 2, 1500,  "bg").setScale(1.2, 1.2);
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
    let spriteback = this.add.sprite(600, 1100, "place").setVisible(false);
    let spriteback2 = this.add.sprite(600, 1450, "place").setVisible(false);
    let spriteback3 = this.add.sprite(600, 1800, "place").setVisible(false);


    //--------------------------conditionm BUTTON------------------------------
    let spritecondition = this.add.sprite(450, 600, "condition").setInteractive();
    spritecondition.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritecondition.on("pointerout", function (event) {
      this.clearTint();
    });
    spritecondition.on("pointerdown", function () {
    text6.setVisible(true);
    text7.setVisible(true);
    text8.setVisible(true);
    text1.setVisible(true);
    text4.setVisible(true);
    text2.setVisible(true);
    text3.setVisible(true);
    text5.setVisible(true);
    spritedisclaimer2.setVisible(true);
    spritedisclaimer.setVisible(false);
    spritecondition2.setVisible(true);
    spriteback.setVisible(true);
    if (localStorage.getItem("click") == 1){
    text91.setVisible(false);
    text101.setVisible(false);
    text111.setVisible(false);
    text121.setVisible(false);
    text131.setVisible(false);
    text141.setVisible(false);
    text151.setVisible(false);
    text161.setVisible(false);
    text171.setVisible(false);
    text181.setVisible(false);
    text191.setVisible(false);
    text201.setVisible(false);
    text211.setVisible(false);
    text221.setVisible(false);
    text231.setVisible(false);
    text241.setVisible(false);
    text251.setVisible(false);
    text261.setVisible(false);
    text271.setVisible(false);
    text281.setVisible(false);
    text291.setVisible(false);
    text301.setVisible(false);
    text311.setVisible(false);
    text31.setVisible(false);
    text9.setVisible(true);
    text10.setVisible(true);
    text11.setVisible(true);
    text12.setVisible(true);
    text13.setVisible(true);
    text14.setVisible(true);
    text15.setVisible(true);
    text16.setVisible(true);
    text17.setVisible(true);
    text18.setVisible(true);
    text19.setVisible(true);
    text20.setVisible(true);
    text21.setVisible(true);
    text22.setVisible(true);
    text23.setVisible(true);
    text24.setVisible(true);
    text25.setVisible(true);
    text26.setVisible(true);
    text27.setVisible(true);
    text28.setVisible(true);
    text29.setVisible(true);
    text30.setVisible(true);
    text31.setVisible(true);
    spriteback3.setVisible(true);
    spriteback2.setVisible(true);
    spriteback.setVisible(true);
    spritedisclaimer.setVisible(false);
    spritedisclaimer4.setVisible(false);
    console.log("pog");
    }
    });

    //--------------------------conditionm BUTTON------------------------------
    let spritecondition2 = this.add.sprite(450, 600, "condition").setInteractive()
    .setVisible(false);
    spritecondition2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritecondition2.on("pointerout", function (event) {
      this.clearTint();
    });
    spritecondition2.on("pointerdown", function () {

    if (localStorage.getItem("click") == 1) {
        text91.setVisible(true);
    text101.setVisible(true);
    text111.setVisible(true);
    text121.setVisible(true);
    text131.setVisible(true);
    text141.setVisible(true);
    text151.setVisible(true);
    text161.setVisible(true);
    text171.setVisible(true);
    text181.setVisible(true);
    text191.setVisible(true);
    text201.setVisible(true);
    text211.setVisible(true);
    text221.setVisible(true);
    text231.setVisible(true);
    text241.setVisible(true);
    text251.setVisible(true);
    text261.setVisible(true);
    text271.setVisible(true);
    text281.setVisible(true);
    text291.setVisible(true);
    text301.setVisible(true);
    text311.setVisible(true);
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
    text1.setVisible(false);
    text4.setVisible(false);
    text2.setVisible(false);
    text3.setVisible(false);
    text5.setVisible(false);
    text9.setVisible(false);
    text10.setVisible(false);
    text11.setVisible(false);
    text12.setVisible(false);
    text13.setVisible(false);
    text14.setVisible(false);
    text15.setVisible(false);
    text16.setVisible(false);
    text17.setVisible(false);
    text18.setVisible(false);
    text19.setVisible(false);
    text20.setVisible(false);
    text21.setVisible(false);
    text22.setVisible(false);
    text23.setVisible(false);
    text24.setVisible(false);
    text25.setVisible(false);
    text26.setVisible(false);
    text27.setVisible(false);
    text28.setVisible(false);
    text29.setVisible(false);
    text30.setVisible(false);
    text31.setVisible(false);
    spritedisclaimer2.setVisible(false);
    spritedisclaimer3.setVisible(false);
    spriteback3.setVisible(false);
    spritecondition2.setVisible(false);
    spritedisclaimer.setVisible(true);

    }
    else {
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
    text1.setVisible(false);
    text4.setVisible(false);
    text2.setVisible(false);
    text3.setVisible(false);
    text5.setVisible(false);
    spriteback.setVisible(false);
    spritedisclaimer2.setVisible(false);
    spritecondition2.setVisible(false);
    spritedisclaimer.setVisible(true);
    }
    }

    );

    const text1 = this.add.text(
      350,
      640,
      "Access to this third party web site is granted by",
      { fontFamily: "Roboto", fill: "black", fontSize: "26px" }
    ).setDepth(11);

    const text2 = this.add.text(
      350,
      685,
  "POSB Bank Limited (hereinafter known as 'POSB')",
      { fontFamily: "Roboto", fill: "black", fontSize: "26px" }
    ).setDepth(11);

    const text3 = this.add.text(
      350,
      730,
  "subject to the terms and conditions set out herein.",
      { fontFamily: "Roboto", fill: "black", fontSize: "26px" }
    ).setDepth(11);

    const text4 = this.add.text(
      350,
      775,
"By accessing this web site, you agree to be bound",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text5 = this.add.text(
      350,
      820,
"by the terms and conditions set out herein. If you do",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text6 = this.add.text(
      350,
      865,
"not agree to any of these terms and conditions,",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text7 = this.add.text(
      350,
      910,
"please discontinue your access to this web site",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text8 = this.add.text(
      350,
      955,
"immediately.",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    text1.setVisible(false);
    text2.setVisible(false);
    text3.setVisible(false);
    text4.setVisible(false);
    text5.setVisible(false);
    text6.setVisible(false);
    text7.setVisible(false);
    text8.setVisible(false);

    const text9 = this.add.text(
      350,
      1050,
      "POSB makes no representations or warranties in",
      { fontFamily: "Roboto", fill: "black", fontSize: "26px" }
    ).setDepth(11);

    const text10 = this.add.text(
      350,
      1095,
  "respect of this third party site you are about to",
      { fontFamily: "Roboto", fill: "black", fontSize: "26px" }
    ).setDepth(11);

    const text11 = this.add.text(
      350,
      1140,
  "access directly or indirectly via this web site. You",
      { fontFamily: "Roboto", fill: "black", fontSize: "26px" }
    ).setDepth(11);

    const text12 = this.add.text(
      350,
      1185,
"acknowledge that the web site you are about to",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text13 = this.add.text(
      350,
      1230,
"access is provided by POSB on an 'as is', 'as ",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text14 = this.add.text(
    350,
      1275,
"available' basis. POSB shall in no event be liable for ",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text15 = this.add.text(
      350,
      1320,
"any damage, loss or expense including without ",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text16 = this.add.text(
    350,
      1365,
"limitation, direct, indirect, special, consequential ",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text17 = this.add.text(
    350,
      1410,
"damage, or economic loss arising from or in",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text18 = this.add.text(
    350,
      1455,
"connection with:",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text19 = this.add.text(
    380,
      1500,
"1. any access, use or the inability to access or use",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text20 = this.add.text(
    380,
      1535,
"this web site, or reliance on the contents of this web",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text21 = this.add.text(
    380,
      1570,
"site, or reliance on the contents of this web site",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text22 = this.add.text(
    380,
      1610,
"2. any system, server or connection failure, error,",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text23 = this.add.text(
    380,
      1645,
"omission, interruption, delay in transmission, computer",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text24 = this.add.text(
    380,
      1680,
"virus or other malicious, destructive or corrupting",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text25 = this.add.text(
    380,
      1715,
"code, agent, program or macros; Even if POSB or its",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text26 = this.add.text(
    380,
      1750,
"agents or employees are advised of the possibility of",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text27 = this.add.text(
    380,
      1785,
"such damage, loss and/or expense. Access to this",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text28 = this.add.text(
    380,
      1820,
"web site is not an endorsement or verification of such",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text29 = this.add.text(
    380,
      1855,
"web site and such web site should only be accessed",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text30 = this.add.text(
    380,
      1890,
"at your own risks. This exclusion clause shall take",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text31 = this.add.text(
    380,
      1925,
"effect to the fullest extent permitted by law.",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    text9.setVisible(false);
    text10.setVisible(false);
    text11.setVisible(false);
    text12.setVisible(false);
    text13.setVisible(false);
    text14.setVisible(false);
    text15.setVisible(false);
    text16.setVisible(false);
    text17.setVisible(false);
    text18.setVisible(false);
    text19.setVisible(false);
    text20.setVisible(false);
    text21.setVisible(false);
    text22.setVisible(false);
    text23.setVisible(false);
    text24.setVisible(false);
    text25.setVisible(false);
    text26.setVisible(false);
    text27.setVisible(false);
    text28.setVisible(false);
    text29.setVisible(false);
    text30.setVisible(false);
    text31.setVisible(false);

    const text91 = this.add.text(
      350,
      740,
      "POSB makes no representations or warranties in",
      { fontFamily: "Roboto", fill: "black", fontSize: "26px" }
    ).setDepth(11);

    const text101 = this.add.text(
      350,
      785,
  "respect of this third party site you are about to",
      { fontFamily: "Roboto", fill: "black", fontSize: "26px" }
    ).setDepth(11);

    const text111 = this.add.text(
      350,
      830,
  "access directly or indirectly via this web site. You",
      { fontFamily: "Roboto", fill: "black", fontSize: "26px" }
    ).setDepth(11);

    const text121 = this.add.text(
      350,
      875,
"acknowledge that the web site you are about to",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text131 = this.add.text(
      350,
      920,
"access is provided by POSB on an 'as is', 'as ",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text141 = this.add.text(
    350,
      965,
"available' basis. POSB shall in no event be liable for ",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text151 = this.add.text(
      350,
      1010,
"any damage, loss or expense including without ",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text161 = this.add.text(
    350,
      1055,
"limitation, direct, indirect, special, consequential ",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text171 = this.add.text(
    350,
      1100,
"damage, or economic loss arising from or in",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text181 = this.add.text(
    350,
      1145,
"connection with:",
      { fontFamily: "Roboto", fill: "black" , fontSize: "26px"}
    ).setDepth(11);

    const text191 = this.add.text(
    380,
      1190,
"1. any access, use or the inability to access or use",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text201 = this.add.text(
    380,
      1225,
"this web site, or reliance on the contents of this web",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text211 = this.add.text(
    380,
      1260,
"site, or reliance on the contents of this web site",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text221 = this.add.text(
    380,
      1300,
"2. any system, server or connection failure, error,",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text231 = this.add.text(
    380,
      1335,
"omission, interruption, delay in transmission, computer",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text241 = this.add.text(
    380,
      1370,
"virus or other malicious, destructive or corrupting",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text251 = this.add.text(
    380,
      1405,
"code, agent, program or macros; Even if POSB or its",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text261 = this.add.text(
    380,
      1440,
"agents or employees are advised of the possibility of",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text271 = this.add.text(
    380,
      1475,
"such damage, loss and/or expense. Access to this",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text281 = this.add.text(
    380,
      1510,
"web site is not an endorsement or verification of such",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text291 = this.add.text(
    380,
      1545,
"web site and such web site should only be accessed",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text301 = this.add.text(
    380,
      1580,
"at your own risks. This exclusion clause shall take",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    const text311 = this.add.text(
    380,
      1615,
"effect to the fullest extent permitted by law.",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

        const text165 = this.add.text(
    1700,
      900,
"Powered by SQKII",
      { fontFamily: "Roboto", fill: "white" , fontSize: "24px"}
    ).setDepth(11);

    text91.setVisible(false);
    text101.setVisible(false);
    text111.setVisible(false);
    text121.setVisible(false);
    text131.setVisible(false);
    text141.setVisible(false);
    text151.setVisible(false);
    text161.setVisible(false);
    text171.setVisible(false);
    text181.setVisible(false);
    text191.setVisible(false);
    text201.setVisible(false);
    text211.setVisible(false);
    text221.setVisible(false);
    text231.setVisible(false);
    text241.setVisible(false);
    text251.setVisible(false);
    text261.setVisible(false);
    text271.setVisible(false);
    text281.setVisible(false);
    text291.setVisible(false);
    text301.setVisible(false);
    text311.setVisible(false);

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
    if (localStorage.getItem("click") == 0) {
    text91.setVisible(true);
    text101.setVisible(true);
    text111.setVisible(true);
    text121.setVisible(true);
    text131.setVisible(true);
    text141.setVisible(true);
    text151.setVisible(true);
    text161.setVisible(true);
    text171.setVisible(true);
    text181.setVisible(true);
    text191.setVisible(true);
    text201.setVisible(true);
    text211.setVisible(true);
    text221.setVisible(true);
    text231.setVisible(true);
    text241.setVisible(true);
    text251.setVisible(true);
    text261.setVisible(true);
    text271.setVisible(true);
    text281.setVisible(true);
    text291.setVisible(true);
    text301.setVisible(true);
    text311.setVisible(true);
    spritedisclaimer4.setVisible(true);
    spritedisclaimer.setVisible(false);
    spriteback2.setVisible(true);
    spriteback.setVisible(true);
    localStorage.setItem("click", 1);
    } else {
    text91.setVisible(false);
    text101.setVisible(false);
    text111.setVisible(false);
    text121.setVisible(false);
    text131.setVisible(false);
    text141.setVisible(false);
    text151.setVisible(false);
    text161.setVisible(false);
    text171.setVisible(false);
    text181.setVisible(false);
    text191.setVisible(false);
    text201.setVisible(false);
    text211.setVisible(false);
    text221.setVisible(false);
    text231.setVisible(false);
    text241.setVisible(false);
    text251.setVisible(false);
    text261.setVisible(false);
    text271.setVisible(false);
    text281.setVisible(false);
    text291.setVisible(false);
    text301.setVisible(false);
    text311.setVisible(false);
    spriteback2.setVisible(false);
    spriteback.setVisible(false);
    spritedisclaimer4.setVisible(false);
    spritedisclaimer.setVisible(true);
    localStorage.setItem("click", 0);
    }});
        //--------------------------disclaimer BUTTON------------------------------
    let spritedisclaimer4 = this.add.sprite(375, 700, "disclaimer").setInteractive().setVisible(false);
    spritedisclaimer4.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritedisclaimer4.on("pointerout", function (event) {
      this.clearTint();
    });
    spritedisclaimer4.on("pointerdown", function () {
    text91.setVisible(false);
    text101.setVisible(false);
    text111.setVisible(false);
    text121.setVisible(false);
    text131.setVisible(false);
    text141.setVisible(false);
    text151.setVisible(false);
    text161.setVisible(false);
    text171.setVisible(false);
    text181.setVisible(false);
    text191.setVisible(false);
    text201.setVisible(false);
    text211.setVisible(false);
    text221.setVisible(false);
    text231.setVisible(false);
    text241.setVisible(false);
    text251.setVisible(false);
    text261.setVisible(false);
    text271.setVisible(false);
    text281.setVisible(false);
    text291.setVisible(false);
    text301.setVisible(false);
    text311.setVisible(false);
    spriteback2.setVisible(false);
    spriteback.setVisible(false);
    spritedisclaimer4.setVisible(false);
    spritedisclaimer.setVisible(true);
    localStorage.setItem("click", 0);
    });

        //--------------------------disclaimer BUTTON------------------------------
    let spritedisclaimer2 = this.add.sprite(375, 1020, "disclaimer").setInteractive()
    .setVisible(false);
    spritedisclaimer2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritedisclaimer2.on("pointerout", function (event) {
      this.clearTint();
    });
    spritedisclaimer2.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
    localStorage.setItem("click", 1);
    text9.setVisible(true);
    text10.setVisible(true);
    text11.setVisible(true);
    text12.setVisible(true);
    text13.setVisible(true);
    text14.setVisible(true);
    text15.setVisible(true);
    text16.setVisible(true);
    text17.setVisible(true);
    text18.setVisible(true);
    text19.setVisible(true);
    text20.setVisible(true);
    text21.setVisible(true);
    text22.setVisible(true);
    text23.setVisible(true);
    text24.setVisible(true);
    text25.setVisible(true);
    text26.setVisible(true);
    text27.setVisible(true);
    text28.setVisible(true);
    text29.setVisible(true);
    text30.setVisible(true);
    text31.setVisible(true);
    spritedisclaimer3.setVisible(true);
    spriteback.setVisible(true);
    spriteback3.setVisible(true);
    spriteback2.setVisible(true);
    } else {
    text9.setVisible(false);
    text10.setVisible(false);
    text11.setVisible(false);
    text12.setVisible(false);
    text13.setVisible(false);
    text14.setVisible(false);
    text15.setVisible(false);
    text16.setVisible(false);
    text17.setVisible(false);
    text18.setVisible(false);
    text19.setVisible(false);
    text20.setVisible(false);
    text21.setVisible(false);
    text22.setVisible(false);
    text23.setVisible(false);
    text24.setVisible(false);
    text25.setVisible(false);
    text26.setVisible(false);
    text27.setVisible(false);
    text28.setVisible(false);
    text29.setVisible(false);
    text30.setVisible(false);
    text31.setVisible(false);
    spritedisclaimer3.setVisible(false);
    spriteback3.setVisible(false);
    spriteback2.setVisible(false);
    localStorage.setItem("click", 0);
    }});

    //--------------------------disclaimer BUTTON------------------------------
    let spritedisclaimer3 = this.add.sprite(375, 1020, "disclaimer").setInteractive()
    .setVisible(false);
    spritedisclaimer3.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritedisclaimer3.on("pointerout", function (event) {
      this.clearTint();
    });
    spritedisclaimer3.on("pointerdown", function () {
    localStorage.setItem("click", 0);
    text9.setVisible(false);
    text10.setVisible(false);
    text11.setVisible(false);
    text12.setVisible(false);
    text13.setVisible(false);
    text14.setVisible(false);
    text15.setVisible(false);
    text16.setVisible(false);
    text17.setVisible(false);
    text18.setVisible(false);
    text19.setVisible(false);
    text20.setVisible(false);
    text21.setVisible(false);
    text22.setVisible(false);
    text23.setVisible(false);
    text24.setVisible(false);
    text25.setVisible(false);
    text26.setVisible(false);
    text27.setVisible(false);
    text28.setVisible(false);
    text29.setVisible(false);
    text30.setVisible(false);
    text31.setVisible(false);
    spritedisclaimer3.setVisible(false);
    spriteback3.setVisible(false);
    spriteback2.setVisible(false);
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
  height: 2000,
  scene: [SceneA],
  pixelArt: false,
  parent: "canvas",
};

var game = new Phaser.Game(config);
