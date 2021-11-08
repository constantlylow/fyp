var correctans = 0;
var wrongans = 0;
localStorage.setItem("ca", correctans);
localStorage.setItem("wa", wrongans);

function leader(cans) {
  if (cans === 8) {
    extra();
    window.location.href = "game2ResultUpper.html";
  }
}

function extra() {
  var time = localStorage.getItem("time");
  time = time.replaceAll("sec", "");
  var number = Number(time);
  var money = Number(localStorage.getItem("0"));
  var total = 0;
  if (number < 31) {
    total = Number(money + 2).toFixed(2);
  } else if (number < 61) {
    total = Number(money + 1).toFixed(2);
  } else {
    total = Number(money).toFixed(2);
  }

  localStorage.setItem("0", total);
}

class question1 extends Phaser.Scene {
  constructor() {
    super({ key: "question1" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("cardmcq10a", "game2/image/LP/10A.png");
    this.load.image("cardmcq10b", "game2/image/LP/10B.png");
    this.load.image("cardmcq10c", "game2/image/LP/10C.png");
    this.load.image("jar", "game2/image/new/moneyjar_only.png");
    this.load.image("jarc", "game2/image/jar_tf_correct.png");
    this.load.image("jarw", "game2/image/jar_tf_wrong.png");

    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");
    this.load.audio("backgroundmusic", "game2/audio/game2.mp3");
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

    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jar = this.add.sprite(450, 550, "jar");
    let jarc = this.add.sprite(430, 500, "jarc").setDepth(1);
    jarc.setVisible(false);
    let jarw = this.add.sprite(430, 500, "jarw").setDepth(1);
    jarw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jar.setOrigin(0, 0);
    jar.setScale(0.7, 0.7);

    jarc.setOrigin(-0.1, -0.2);
    jarc.setScale(0.6, 0.6);
    jarw.setOrigin(-0.1, -0.2);
    jarw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "What is the benefit of putting your money in a bank?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(
      650,
      450,
      "Answer: You can earn extra money from the bank in",
      {
        fontFamily: "Roboto",
        fill: "black",
      }
    );
    const text3 = this.add.text(650, 505, "the form of interest.", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text3.setTint(0x000000);
    text3.setFontSize(35);

    text2.setVisible(false);
    text3.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question2"));

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

    var x1 = 880;
    var x2 = 1280;
    var x3 = 1080;
    var y1 = 500;
    var y2 = 680;

    var imagemcq10a = this.add.image(x1, y1, "cardmcq10a").setInteractive();
    var imagemcq10b = this.add.image(x2, y1, "cardmcq10b").setInteractive();
    var imagemcq10c = this.add.image(x3, y2, "cardmcq10c").setInteractive();
    this.input.setDraggable(imagemcq10a);
    this.input.setDraggable(imagemcq10b);
    this.input.setDraggable(imagemcq10c);
    imagemcq10a.setScale(0.5, 0.5);
    imagemcq10b.setScale(0.5, 0.5);
    imagemcq10c.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      imagemcq10a.setVisible(false);
      imagemcq10b.setVisible(false);
      imagemcq10c.setVisible(false);

      if (gameObject == imagemcq10a) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarw.setVisible(true);
        text2.setVisible(true);
        text3.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question2 extends Phaser.Scene {
  constructor() {
    super({ key: "question2" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("lbtn", "game2/image/btn_back.png");
    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("cardmcq1a", "game2/image/UP/1A.jpeg");
    this.load.image("cardmcq1b", "game2/image/UP/1B.png");
    this.load.image("cardmcq1c", "game2/image/UP/1C.png");
    this.load.image("cardmcq1d", "game2/image/UP/1D.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");

    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "What percent of your allowance should go towards your savings?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(650, 450, "Answer: 20%", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text2.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question3"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var imagemcq1a = this.add.image(x1, y1, "cardmcq1a").setInteractive();
    var imagemcq1b = this.add.image(x2, y1, "cardmcq1b").setInteractive();
    var imagemcq1c = this.add.image(x1, y2, "cardmcq1c").setInteractive();
    var imagemcq1d = this.add.image(x2, y2, "cardmcq1d").setInteractive();
    this.input.setDraggable(imagemcq1a);
    this.input.setDraggable(imagemcq1b);
    this.input.setDraggable(imagemcq1c);
    this.input.setDraggable(imagemcq1d);
    imagemcq1a.setScale(0.5, 0.5);
    imagemcq1b.setScale(0.5, 0.5);
    imagemcq1c.setScale(0.5, 0.5);
    imagemcq1d.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      imagemcq1a.setVisible(false);
      imagemcq1b.setVisible(false);
      imagemcq1c.setVisible(false);
      imagemcq1d.setVisible(false);

      if (gameObject == imagemcq1a) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question3 extends Phaser.Scene {
  constructor() {
    super({ key: "question3" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq14a", "game2/image/new/14A.png");
    this.load.image("cardmcq14b", "game2/image/new/14B.png");
    this.load.image("cardmcq14c", "game2/image/new/14C.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);

    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "The allocation of Spend, Save and Share in Money Jar is?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(
      650,
      450,
      "Answer: Spend 70%, Save 20%, Give 10%.",
      {
        fontFamily: "Roboto",
        fill: "black",
      }
    );

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text2.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question4"));

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

    var x1 = 880;
    var x2 = 1280;
    var x3 = 1080;
    var y1 = 500;
    var y2 = 680;

    var cardmcq14a = this.add.image(x1, y1, "cardmcq14a").setInteractive();
    var cardmcq14b = this.add.image(x2, y1, "cardmcq14b").setInteractive();
    var cardmcq14c = this.add.image(x3, y2, "cardmcq14c").setInteractive();
    this.input.setDraggable(cardmcq14a);
    this.input.setDraggable(cardmcq14b);
    this.input.setDraggable(cardmcq14c);
    cardmcq14a.setScale(0.5, 0.5);
    cardmcq14b.setScale(0.5, 0.5);
    cardmcq14c.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      cardmcq14a.setVisible(false);
      cardmcq14b.setVisible(false);
      cardmcq14c.setVisible(false);

      if (gameObject == cardmcq14a) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question4 extends Phaser.Scene {
  constructor() {
    super({ key: "question4" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq3a", "game2/image/UP/3A.png");
    this.load.image("cardmcq3b", "game2/image/UP/3B.png");
    this.load.image("cardmcq3c", "game2/image/UP/3C.png");
    this.load.image("cardmcq3d", "game2/image/UP/3D.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "The first thing I should do when I first started working is?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(
      650,
      450,
      "Answer: Build up an Emergency Fund account. You will",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text3 = this.add.text(
      650,
      505,
      "never know when you need money in times of emergency.",
      { fontFamily: "Roboto", fill: "black" }
    );

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text3.setTint(0x000000);
    text3.setFontSize(35);
    text2.setVisible(false);
    text3.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question5"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var imagemcq3a = this.add.image(x1, y1, "cardmcq3a").setInteractive();
    var imagemcq3b = this.add.image(x2, y1, "cardmcq3b").setInteractive();
    var imagemcq3c = this.add.image(x1, y2, "cardmcq3c").setInteractive();
    var imagemcq3d = this.add.image(x2, y2, "cardmcq3d").setInteractive();
    this.input.setDraggable(imagemcq3a);
    this.input.setDraggable(imagemcq3b);
    this.input.setDraggable(imagemcq3c);
    this.input.setDraggable(imagemcq3d);
    imagemcq3a.setScale(0.5, 0.5);
    imagemcq3b.setScale(0.5, 0.5);
    imagemcq3c.setScale(0.5, 0.5);
    imagemcq3d.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      imagemcq3a.setVisible(false);
      imagemcq3b.setVisible(false);
      imagemcq3c.setVisible(false);
      imagemcq3d.setVisible(false);

      if (gameObject == imagemcq3a) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
        text3.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question5 extends Phaser.Scene {
  constructor() {
    super({ key: "question5" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq4a", "game2/image/coin_true.png");
    this.load.image("cardmcq4b", "game2/image/coin_false.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "When building a budget, you should put in",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text2 = this.add.text(
      475,
      295,
      "a portion of your income into it on a regular basis.",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text3 = this.add.text(650, 450, "Answer: True", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text3.setTint(0x000000);
    text3.setFontSize(35);
    text3.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question6"));

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

    var x1 = 900;
    var x2 = 1200;
    var y1 = 600;

    var imagemcq4a = this.add.image(x1, y1, "cardmcq4a").setInteractive();
    var imagemcq4b = this.add.image(x2, y1, "cardmcq4b").setInteractive();

    this.input.setDraggable(imagemcq4a);
    this.input.setDraggable(imagemcq4b);

    imagemcq4a.setScale(0.8, 0.8);
    imagemcq4b.setScale(0.8, 0.8);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      imagemcq4a.setVisible(false);
      imagemcq4b.setVisible(false);

      if (gameObject == imagemcq4a) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
        text3.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question6 extends Phaser.Scene {
  constructor() {
    super({ key: "question6" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq5a", "game2/image/UP/5A.png");
    this.load.image("cardmcq5b", "game2/image/UP/5B.png");
    this.load.image("cardmcq5c", "game2/image/UP/5C.png");
    this.load.image("cardmcq5d", "game2/image/UP/5D.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(475, 245, "When you use a credit card, you...", {
      fontFamily: "Roboto",
      fill: "black",
    });

    const text2 = this.add.text(650, 450, "Answer: Buy now, pay later", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text3 = this.add.text(
      650,
      505,
      "When you use a credit card, you are actually borrowing",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text4 = this.add.text(
      650,
      555,
      "from the bank and you are expected to pay them",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text5 = this.add.text(650, 605, "back within a timeframe.", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text3.setTint(0x000000);
    text3.setFontSize(35);
    text4.setTint(0x000000);
    text4.setFontSize(35);
    text5.setTint(0x000000);
    text5.setFontSize(35);
    text2.setVisible(false);
    text3.setVisible(false);
    text4.setVisible(false);
    text5.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question7"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var imagemcq5a = this.add.image(x1, y1, "cardmcq5a").setInteractive();
    var imagemcq5b = this.add.image(x2, y1, "cardmcq5b").setInteractive();
    var imagemcq5c = this.add.image(x1, y2, "cardmcq5c").setInteractive();
    var imagemcq5d = this.add.image(x2, y2, "cardmcq5d").setInteractive();
    this.input.setDraggable(imagemcq5a);
    this.input.setDraggable(imagemcq5b);
    this.input.setDraggable(imagemcq5c);
    this.input.setDraggable(imagemcq5d);
    imagemcq5a.setScale(0.5, 0.5);
    imagemcq5b.setScale(0.5, 0.5);
    imagemcq5c.setScale(0.5, 0.5);
    imagemcq5d.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      imagemcq5a.setVisible(false);
      imagemcq5b.setVisible(false);
      imagemcq5c.setVisible(false);
      imagemcq5d.setVisible(false);

      if (gameObject == imagemcq5a) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question7 extends Phaser.Scene {
  constructor() {
    super({ key: "question7" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("card1", "game2/image/coin_true.png");
    this.load.image("card2", "game2/image/coin_false.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "POSB is an example of a bank in Singapore.",
      {
        fontFamily: "Roboto",
        fill: "black",
      }
    );

    const text3 = this.add.text(650, 450, "Answer: True", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);

    text3.setTint(0x000000);
    text3.setFontSize(35);
    text3.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question8"));

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

    var x1 = 900;
    var x2 = 1200;
    var y1 = 600;

    var image1 = this.add.image(x1, y1, "card1").setInteractive();
    var image2 = this.add.image(x2, y1, "card2").setInteractive();
    this.input.setDraggable(image1);
    this.input.setDraggable(image2);
    image1.setScale(0.8, 0.8);
    image2.setScale(0.8, 0.8);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      image1.setVisible(false);
      image2.setVisible(false);

      if (gameObject == image1) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text3.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question8 extends Phaser.Scene {
  constructor() {
    super({ key: "question8" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq7a", "game2/image/UP/7A.png");
    this.load.image("cardmcq7b", "game2/image/UP/7B.png");
    this.load.image("cardmcq7c", "game2/image/UP/7C.png");
    this.load.image("cardmcq7d", "game2/image/UP/7D.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");

    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "In what area of a typical family budget do people",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(475, 295, "spend most of their money?", {
      fontFamily: "Roboto",
      fill: "black",
    });

    const text3 = this.add.text(650, 450, "Answer: Housing", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text4 = this.add.text(
      650,
      505,
      "Family will mostly spend most of their money to own a property.",
      { fontFamily: "Roboto", fill: "black" }
    );

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text3.setTint(0x000000);
    text3.setFontSize(35);
    text4.setTint(0x000000);
    text4.setFontSize(35);
    text4.setVisible(false);
    text3.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question9"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var imagemcq7a = this.add.image(x1, y1, "cardmcq7a").setInteractive();
    var imagemcq7b = this.add.image(x2, y1, "cardmcq7b").setInteractive();
    var imagemcq7c = this.add.image(x1, y2, "cardmcq7c").setInteractive();
    var imagemcq7d = this.add.image(x2, y2, "cardmcq7d").setInteractive();
    this.input.setDraggable(imagemcq7a);
    this.input.setDraggable(imagemcq7b);
    this.input.setDraggable(imagemcq7c);
    this.input.setDraggable(imagemcq7d);
    imagemcq7a.setScale(0.5, 0.5);
    imagemcq7b.setScale(0.5, 0.5);
    imagemcq7c.setScale(0.5, 0.5);
    imagemcq7d.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      imagemcq7a.setVisible(false);
      imagemcq7b.setVisible(false);
      imagemcq7c.setVisible(false);
      imagemcq7d.setVisible(false);

      if (gameObject == imagemcq7b) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text4.setVisible(true);
        text3.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question9 extends Phaser.Scene {
  constructor() {
    super({ key: "question9" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq8a", "game2/image/UP/8A.png");
    this.load.image("cardmcq8b", "game2/image/UP/8B.png");
    this.load.image("cardmcq8c", "game2/image/UP/8C.png");
    this.load.image("cardmcq8d", "game2/image/UP/8D.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "How many months’ expenses",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text2 = this.add.text(
      475,
      295,
      "should you set aside in an emergency fund?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text3 = this.add.text(650, 505, "Answer: 6 to 12 months", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text3.setTint(0x000000);
    text3.setFontSize(35);
    text3.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question10"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var imagemcq8a = this.add.image(x1, y1, "cardmcq8a").setInteractive();
    var imagemcq8b = this.add.image(x2, y1, "cardmcq8b").setInteractive();
    var imagemcq8c = this.add.image(x1, y2, "cardmcq8c").setInteractive();
    var imagemcq8d = this.add.image(x2, y2, "cardmcq8d").setInteractive();
    this.input.setDraggable(imagemcq8a);
    this.input.setDraggable(imagemcq8b);
    this.input.setDraggable(imagemcq8c);
    this.input.setDraggable(imagemcq8d);
    imagemcq8a.setScale(0.5, 0.5);
    imagemcq8b.setScale(0.5, 0.5);
    imagemcq8c.setScale(0.5, 0.5);
    imagemcq8d.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      imagemcq8a.setVisible(false);
      imagemcq8b.setVisible(false);
      imagemcq8c.setVisible(false);
      imagemcq8d.setVisible(false);

      if (gameObject == imagemcq8c) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text3.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question10 extends Phaser.Scene {
  constructor() {
    super({ key: "question10" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq9a", "game2/image/coin_true.png");
    this.load.image("cardmcq9b", "game2/image/coin_false.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "It is ok to buy everything that I want.",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(650, 450, "Answer: False", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text3 = this.add.text(
      650,
      505,
      "It is not okay to buy whatever you want because they",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text4 = this.add.text(650, 555, "are not necessary in life.", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text3.setTint(0x000000);
    text3.setFontSize(35);
    text4.setTint(0x000000);
    text4.setFontSize(35);
    text2.setVisible(false);
    text3.setVisible(false);
    text4.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question11"));

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

    var x1 = 900;
    var x2 = 1280;
    var y1 = 600;

    var imagemcq9a = this.add.image(x1, y1, "cardmcq9a").setInteractive();
    var imagemcq9b = this.add.image(x2, y1, "cardmcq9b").setInteractive();

    this.input.setDraggable(imagemcq9a);
    this.input.setDraggable(imagemcq9b);

    imagemcq9a.setScale(0.8, 0.8);
    imagemcq9b.setScale(0.8, 0.8);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      imagemcq9a.setVisible(false);
      imagemcq9b.setVisible(false);

      if (gameObject == imagemcq9b) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question11 extends Phaser.Scene {
  constructor() {
    super({ key: "question11" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("q8a", "game2/image/new/8A.png");
    this.load.image("q8b", "game2/image/new/8B.png");
    this.load.image("q8c", "game2/image/new/8C.png");
    this.load.image("q8d", "game2/image/new/8D.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "Which of the following is/are the benefit(s) of cashless payment?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(
      650,
      450,
      "Answer: Allows us to keep track of our expenditures easily",
      {
        fontFamily: "Roboto",
        fill: "black",
      }
    );
    const text3 = this.add.text(
      650,
      505,
      "Cashless payments keep record of all the transactions that",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text4 = this.add.text(
      650,
      555,
      " we make making it easier for us to keep track of our",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text5 = this.add.text(650, 610, "expenditures.", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text3.setTint(0x000000);
    text3.setFontSize(35);
    text4.setTint(0x000000);
    text4.setFontSize(35);
    text5.setTint(0x000000);
    text5.setFontSize(35);
    text2.setVisible(false);
    text3.setVisible(false);
    text4.setVisible(false);
    text5.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question12"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var q8a = this.add.image(x1, y1, "q8a").setInteractive();
    var q8b = this.add.image(x2, y1, "q8b").setInteractive();
    var q8c = this.add.image(x1, y2, "q8c").setInteractive();
    var q8d = this.add.image(x2, y2, "q8d").setInteractive();
    this.input.setDraggable(q8a);
    this.input.setDraggable(q8b);
    this.input.setDraggable(q8c);
    this.input.setDraggable(q8d);
    q8a.setScale(0.5, 0.5);
    q8b.setScale(0.5, 0.5);
    q8c.setScale(0.5, 0.5);
    q8d.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      q8a.setVisible(false);
      q8b.setVisible(false);
      q8c.setVisible(false);
      q8d.setVisible(false);

      if (gameObject == q8d) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question12 extends Phaser.Scene {
  constructor() {
    super({ key: "question12" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq11a", "game2/image/UP/11A.png");
    this.load.image("cardmcq11b", "game2/image/UP/11B.png");
    this.load.image("cardmcq11c", "game2/image/UP/11C.png");
    this.load.image("cardmcq11d", "game2/image/UP/11D.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);

    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "Which of the following is/are a form of NEED(S)?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(650, 450, "Answer: All of the above", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text3 = this.add.text(
      650,
      505,
      "These items are something that are essential in one’s life.",
      { fontFamily: "Roboto", fill: "black" }
    );

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text3.setTint(0x000000);
    text3.setFontSize(35);
    text2.setVisible(false);
    text3.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question13"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var imagemcq11a = this.add.image(x1, y1, "cardmcq11a").setInteractive();
    var imagemcq11b = this.add.image(x2, y1, "cardmcq11b").setInteractive();
    var imagemcq11c = this.add.image(x1, y2, "cardmcq11c").setInteractive();
    var imagemcq11d = this.add.image(x2, y2, "cardmcq11d").setInteractive();
    this.input.setDraggable(imagemcq11a);
    this.input.setDraggable(imagemcq11b);
    this.input.setDraggable(imagemcq11c);
    this.input.setDraggable(imagemcq11d);
    imagemcq11a.setScale(0.5, 0.5);
    imagemcq11b.setScale(0.5, 0.5);
    imagemcq11c.setScale(0.5, 0.5);
    imagemcq11d.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      imagemcq11a.setVisible(false);
      imagemcq11b.setVisible(false);
      imagemcq11c.setVisible(false);
      imagemcq11d.setVisible(false);

      if (gameObject == imagemcq11d) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
        text3.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question13 extends Phaser.Scene {
  constructor() {
    super({ key: "question13" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq12a", "game2/image/UP/12A.png");
    this.load.image("cardmcq12b", "game2/image/new/7B.png");
    this.load.image("cardmcq12c", "game2/image/UP/12C.png");
    this.load.image("cardmcq12d", "game2/image/UP/12D.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "Which of the following is/are a form of WANT(S)?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(650, 450, "Answer: All of the above", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text3 = this.add.text(
      650,
      505,
      "These items are something that are not essential in one’s life.",
      { fontFamily: "Roboto", fill: "black" }
    );

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text3.setTint(0x000000);
    text3.setFontSize(35);
    text2.setVisible(false);
    text3.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question14"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var imagemcq12a = this.add.image(x1, y1, "cardmcq12a").setInteractive();
    var imagemcq12b = this.add.image(x2, y1, "cardmcq12b").setInteractive();
    var imagemcq12c = this.add.image(x1, y2, "cardmcq12c").setInteractive();
    var imagemcq12d = this.add.image(x2, y2, "cardmcq12d").setInteractive();
    this.input.setDraggable(imagemcq12a);
    this.input.setDraggable(imagemcq12b);
    this.input.setDraggable(imagemcq12c);
    this.input.setDraggable(imagemcq12d);
    imagemcq12a.setScale(0.5, 0.5);
    imagemcq12b.setScale(0.5, 0.5);
    imagemcq12c.setScale(0.5, 0.5);
    imagemcq12d.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      imagemcq12a.setVisible(false);
      imagemcq12b.setVisible(false);
      imagemcq12c.setVisible(false);
      imagemcq12d.setVisible(false);

      if (gameObject == imagemcq12d) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
        text3.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question14 extends Phaser.Scene {
  constructor() {
    super({ key: "question14" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq13a", "game2/image/UP/13A.png");
    this.load.image("cardmcq13b", "game2/image/UP/13B.png");
    this.load.image("cardmcq13c", "game2/image/UP/13C.png");
    this.load.image("cardmcq13d", "game2/image/UP/13D.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(475, 245, "When you use a debit card, you?", {
      fontFamily: "Roboto",
      fill: "black",
    });

    const text2 = this.add.text(650, 450, "Answer: Buy now, pay now", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text3 = this.add.text(
      650,
      505,
      "When you use a debit card, you are making payments",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text4 = this.add.text(
      650,
      555,
      "from your bank account and are instantly deducted",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text5 = this.add.text(650, 605, "from your account.", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text3.setTint(0x000000);
    text3.setFontSize(35);
    text4.setTint(0x000000);
    text4.setFontSize(35);
    text5.setTint(0x000000);
    text5.setFontSize(35);
    text2.setVisible(false);
    text3.setVisible(false);
    text4.setVisible(false);
    text5.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      his.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question15"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var imagemcq13a = this.add.image(x1, y1, "cardmcq13a").setInteractive();
    var imagemcq13b = this.add.image(x2, y1, "cardmcq13b").setInteractive();
    var imagemcq13c = this.add.image(x1, y2, "cardmcq13c").setInteractive();
    var imagemcq13d = this.add.image(x2, y2, "cardmcq13d").setInteractive();
    this.input.setDraggable(imagemcq13a);
    this.input.setDraggable(imagemcq13b);
    this.input.setDraggable(imagemcq13c);
    this.input.setDraggable(imagemcq13d);
    imagemcq13a.setScale(0.5, 0.5);
    imagemcq13b.setScale(0.5, 0.5);
    imagemcq13c.setScale(0.5, 0.5);
    imagemcq13d.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      imagemcq13a.setVisible(false);
      imagemcq13b.setVisible(false);
      imagemcq13c.setVisible(false);
      imagemcq13d.setVisible(false);

      if (gameObject == imagemcq13b) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.25;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question15 extends Phaser.Scene {
  constructor() {
    super({ key: "question15" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq15a", "game2/image/new/9A.png");
    this.load.image("cardmcq15b", "game2/image/new/9B.png");
    this.load.image("cardmcq15c", "game2/image/new/9C.png");
    this.load.image("cardmcq15d", "game2/image/new/9D.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(475, 245, "What are the 3R's?", {
      fontFamily: "Roboto",
      fill: "black",
    });

    const text2 = this.add.text(650, 450, "Answer: Reduce, Reuse, Recycle.", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text2.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question16"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var cardmcq15a = this.add.image(x1, y1, "cardmcq15a").setInteractive();
    var cardmcq15b = this.add.image(x2, y1, "cardmcq15b").setInteractive();
    var cardmcq15c = this.add.image(x1, y2, "cardmcq15c").setInteractive();
    var cardmcq15d = this.add.image(x2, y2, "cardmcq15d").setInteractive();
    this.input.setDraggable(cardmcq15a);
    this.input.setDraggable(cardmcq15b);
    this.input.setDraggable(cardmcq15c);
    this.input.setDraggable(cardmcq15d);
    cardmcq15a.setScale(0.5, 0.5);
    cardmcq15b.setScale(0.5, 0.5);
    cardmcq15c.setScale(0.5, 0.5);
    cardmcq15d.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      cardmcq15a.setVisible(false);
      cardmcq15b.setVisible(false);
      cardmcq15c.setVisible(false);
      cardmcq15d.setVisible(false);

      if (gameObject == cardmcq15b) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 1;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question16 extends Phaser.Scene {
  constructor() {
    super({ key: "question16" });
  }
  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq10A", "game2/image/new/10A.png");
    this.load.image("cardmcq10B", "game2/image/new/10B.png");
    this.load.image("cardmcq10C", "game2/image/new/10C.png");
    this.load.image("cardmcq10D", "game2/image/new/10D.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(475, 245, "Global warming is described as?", {
      fontFamily: "Roboto",
      fill: "black",
    });

    const text2 = this.add.text(
      650,
      450,
      "Answer: Gradual rise in Earth's temperature",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text3 = this.add.text(650, 500, "caused by human activities.", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text2.setVisible(false);
    text3.setTint(0x000000);
    text3.setFontSize(35);
    text3.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question17"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var cardmcq10A = this.add.image(x1, y1, "cardmcq10A").setInteractive();
    var cardmcq10B = this.add.image(x2, y1, "cardmcq10B").setInteractive();
    var cardmcq10C = this.add.image(x1, y2, "cardmcq10C").setInteractive();
    var cardmcq10D = this.add.image(x2, y2, "cardmcq10D").setInteractive();
    this.input.setDraggable(cardmcq10A);
    this.input.setDraggable(cardmcq10B);
    this.input.setDraggable(cardmcq10C);
    this.input.setDraggable(cardmcq10D);
    cardmcq10A.setScale(0.5, 0.5);
    cardmcq10B.setScale(0.5, 0.5);
    cardmcq10C.setScale(0.5, 0.5);
    cardmcq10D.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      cardmcq10A.setVisible(false);
      cardmcq10B.setVisible(false);
      cardmcq10C.setVisible(false);
      cardmcq10D.setVisible(false);

      if (gameObject == cardmcq10A) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 1;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
        text3.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question17 extends Phaser.Scene {
  constructor() {
    super({ key: "question17" });
  }
  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq12A", "game2/image/new/12A.png");
    this.load.image("cardmcq12B", "game2/image/new/12B.png");
    this.load.image("cardmcq12C", "game2/image/new/12C.png");
    this.load.image("cardmcq12D", "game2/image/new/12D.png");
    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(475, 245, "How can one reduce food waste?", {
      fontFamily: "Roboto",
      fill: "black",
    });

    const text2 = this.add.text(650, 450, "Answer: All of the above.", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text2.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question18"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var cardmcq12A = this.add.image(x1, y1, "cardmcq12A").setInteractive();
    var cardmcq12B = this.add.image(x2, y1, "cardmcq12B").setInteractive();
    var cardmcq12C = this.add.image(x1, y2, "cardmcq12C").setInteractive();
    var cardmcq12D = this.add.image(x2, y2, "cardmcq12D").setInteractive();
    this.input.setDraggable(cardmcq12A);
    this.input.setDraggable(cardmcq12B);
    this.input.setDraggable(cardmcq12C);
    this.input.setDraggable(cardmcq12D);
    cardmcq12A.setScale(0.5, 0.5);
    cardmcq12B.setScale(0.5, 0.5);
    cardmcq12C.setScale(0.5, 0.5);
    cardmcq12D.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      cardmcq12A.setVisible(false);
      cardmcq12B.setVisible(false);
      cardmcq12C.setVisible(false);
      cardmcq12D.setVisible(false);

      if (gameObject == cardmcq12D) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 1;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question18 extends Phaser.Scene {
  constructor() {
    super({ key: "question18" });
  }
  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq16A", "game2/image/new/16A.png");
    this.load.image("cardmcq16B", "game2/image/new/16B.png");
    this.load.image("cardmcq16C", "game2/image/new/16C.png");

    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "Which of the following is the most eco-friendly option?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(650, 450, "Answer: Bicycles and walking.", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text2.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question19"));

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

    var x1 = 880;
    var x2 = 1280;
    var x3 = 1080;
    var y1 = 500;
    var y2 = 680;

    var cardmcq16A = this.add.image(x1, y1, "cardmcq16A").setInteractive();
    var cardmcq16B = this.add.image(x2, y1, "cardmcq16B").setInteractive();
    var cardmcq16C = this.add.image(x3, y2, "cardmcq16C").setInteractive();

    this.input.setDraggable(cardmcq16A);
    this.input.setDraggable(cardmcq16B);
    this.input.setDraggable(cardmcq16C);

    cardmcq16A.setScale(0.5, 0.5);
    cardmcq16B.setScale(0.5, 0.5);
    cardmcq16C.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      cardmcq16A.setVisible(false);
      cardmcq16B.setVisible(false);
      cardmcq16C.setVisible(false);

      if (gameObject == cardmcq16B) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 1;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

class question19 extends Phaser.Scene {
  constructor() {
    super({ key: "question19" });
  }
  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/background_empty.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");

    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq20A", "game2/image/new/20A.png");
    this.load.image("cardmcq20B", "game2/image/new/20B.png");
    this.load.image("cardmcq20C", "game2/image/new/20C.png");
    this.load.image("cardmcq20D", "game2/image/new/20D.png");
    this.load.image("word", "game2/image/new/dragcorrect-answerjar.png");

    this.load.image("jarmcq", "game2/image/new/moneyjar_only.png");
    this.load.image("jarmcqc", "game2/image/jar_mcq_correct.png");
    this.load.image("jarmcqw", "game2/image/jar_mcq_wrong.png");
  }

  create() {
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1600, 140, "money");
    let name = this.add.sprite(10, 80, "name");

    let word = this.add.sprite(380, 780, "word");
    let jarmcq = this.add.sprite(450, 550, "jarmcq");
    let jarmcqc = this.add.sprite(430, 500, "jarmcqc").setDepth(1);
    jarmcqc.setVisible(false);
    let jarmcqw = this.add.sprite(430, 500, "jarmcqw").setDepth(1);
    jarmcqw.setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    jarmcq.setOrigin(0, 0);
    jarmcq.setScale(0.7, 0.7);
    jarmcqc.setOrigin(-0.1, -0.2);
    jarmcqc.setScale(0.6, 0.6);
    jarmcqw.setOrigin(-0.1, -0.2);
    jarmcqw.setScale(0.6, 0.6);
    word.setOrigin(0, 0);
    word.setScale(0.75, 0.75);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 100, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1700, 160, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    const text1 = this.add.text(
      475,
      245,
      "Which of the following(s) are ways to save money?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(650, 450, "Answer: All of the above.", {
      fontFamily: "Roboto",
      fill: "black",
    });

    text1.setTint(0x000000);
    text1.setFontSize(35);
    text2.setTint(0x000000);
    text2.setFontSize(35);
    text2.setVisible(false);

    //-------------------------- BACK BUTTON------------------------------
    let spritepausebtn = this.add.sprite(100, 770, "backbtn").setInteractive();
    spritepausebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritepausebtn.on("pointerout", function (event) {
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objupper.html";
      }
    });

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => this.scene.start("question2"));

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

    var x1 = 880;
    var x2 = 1280;
    var y1 = 500;
    var y2 = 680;

    var cardmcq20A = this.add.image(x1, y1, "cardmcq20A").setInteractive();
    var cardmcq20B = this.add.image(x2, y1, "cardmcq20B").setInteractive();
    var cardmcq20C = this.add.image(x1, y2, "cardmcq20C").setInteractive();
    var cardmcq20D = this.add.image(x2, y2, "cardmcq20D").setInteractive();
    this.input.setDraggable(cardmcq20A);
    this.input.setDraggable(cardmcq20B);
    this.input.setDraggable(cardmcq20C);
    this.input.setDraggable(cardmcq20D);
    cardmcq20A.setScale(0.5, 0.5);
    cardmcq20B.setScale(0.5, 0.5);
    cardmcq20C.setScale(0.5, 0.5);
    cardmcq20D.setScale(0.5, 0.5);

    var zone = this.add.zone(535, 680, 150, 180).setRectangleDropZone(150, 180);

    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(
      zone.x - zone.input.hitArea.width / 2,
      zone.y - zone.input.hitArea.height / 2,
      zone.input.hitArea.width,
      zone.input.hitArea.height
    );
    graphics.setVisible(false);

    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });

    // /Here to center///
    this.input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;

      cardmcq20A.setVisible(false);
      cardmcq20B.setVisible(false);
      cardmcq20C.setVisible(false);
      cardmcq20D.setVisible(false);

      if (gameObject == cardmcq20D) {
        correctans++;
        localStorage.setItem("ca", correctans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) + 1;
        localStorage.setItem(i, newcoin);
        jarmcqc.setVisible(true);

        leader(correctans);
      } else {
        wrongans++;
        localStorage.setItem("wa", wrongans);
        var i = 0;
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        jarmcqw.setVisible(true);
        text2.setVisible(true);
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );
    });
  }
}

let config = {
  type: Phaser.Auto,
  height: 930,
  width: 1920,
  scene: [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
    question13,
    question14,
    question15,
    question16,
    question17,
    question18,
    question19,
  ],
  parent: "canvas",
};

let game = new Phaser.Game(config);
