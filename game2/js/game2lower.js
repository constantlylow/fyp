var correctans = 0;
var wrongans = 0;
localStorage.setItem("ca", correctans);
localStorage.setItem("wa", wrongans);

function leader(cans) {
  if (cans === 4) {
    extra();
    window.location.href = "game2ResultLower.html";
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
    localStorage.setItem(2, 0);
    localStorage.setItem(1, 0);
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");
    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("card1", "game2/image/coin_true.png");
    this.load.image("card2", "game2/image/coin_false.png");


    this.load.image("backbtn", "SLICES/new_bttn-previous.png");

    this.load.audio("backgroundmusic", "game2/audio/game2.mp3");
  }

  create() {
  localStorage.setItem("click", 0);
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

    let backbtn = this.add.sprite(500, 500, "backbtn");
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(940, 640, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);


    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);


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
      465,
      245,
      "It is wise to spend more time to compare prices of the item",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text2 = this.add.text(465, 295, "you want to buy.", {
      fontFamily: "Roboto",
      fill: "black",
    });

    const text3 = this.add.text(640, 460, "Answer: True", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text4 = this.add.text(
      640,
      515,
      "You should always start early as possible as the prices ",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text5 = this.add.text(
      640,
      565,
      "of the bonds or stocks may change in the future.",
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
    text5.setTint(0x000000);
    text5.setFontSize(35);
    text3.setVisible(false);
    text4.setVisible(false);
    text5.setVisible(false);

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
        window.location.href = "game2objlower.html";
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

    var x1 = 900;
    var x2 = 1200;
    var y1 = 600;

    var image1 = this.add.image(x1, y1, "card1").setInteractive();
    var image2 = this.add.image(x2, y1, "card2").setInteractive();
    image1.setScale(0.8, 0.8);
    image2.setScale(0.8, 0.8);


// ---------- WRONG--------------
    image2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image2.on("pointerout", function (event) {
      this.clearTint();
    });
    image2.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
        image1.setVisible(false);
        image2.setVisible(false);
        cross.setVisible(true);
    }});

// -----------CORRECT------------
    image1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image1.on("pointerout", function (event) {
      this.clearTint();
    });
    image1.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

class question2 extends Phaser.Scene {
  constructor() {
    super({ key: "question2" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("card1", "game2/image/coin_true.png");
    this.load.image("card2", "game2/image/coin_false.png");
  }

  create() {
  localStorage.setItem("click",0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(940, 640, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);


    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);

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
      465,
      245,
      "POSB is an example of a bank in Singapore.",
      {
        fontFamily: "Roboto",
        fill: "black",
      }
    );

    const text3 = this.add.text(650, 500, "Answer: True", {
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
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objlower.html";
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

    var x1 = 900;
    var x2 = 1200;
    var y1 = 600;

    var image1 = this.add.image(x1, y1, "card1").setInteractive();
    var image2 = this.add.image(x2, y1, "card2").setInteractive();
    image1.setScale(0.8, 0.8);
    image2.setScale(0.8, 0.8);

   // ---------- WRONG--------------
    image2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image2.on("pointerout", function (event) {
      this.clearTint();
    });
    image2.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text3.setVisible(true);
        image1.setVisible(false);
        image2.setVisible(false);
        cross.setVisible(true);
    }});

// -----------CORRECT------------
    image1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image1.on("pointerout", function (event) {
      this.clearTint();
    });
    image1.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

class question3 extends Phaser.Scene {
  constructor() {
    super({ key: "question3" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");

    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("card1", "game2/image/coin_true.png");
    this.load.image("card2", "game2/image/coin_false.png");
  }

  create() {
    localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(1250, 640, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);


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
      465,
      245,
      "It is ok to buy everything that I want.",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(650, 460, "Answer: False", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text3 = this.add.text(
      650,
      515,
      "It is not okay to buy whatever you want because they",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text4 = this.add.text(650, 565, "are not necessary in life.", {
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
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objlower.html";
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

    var x1 = 900;
    var x2 = 1200;
    var y1 = 600;

    var image1 = this.add.image(x1, y1, "card1").setInteractive();
    var image2 = this.add.image(x2, y1, "card2").setInteractive();
    image1.setScale(0.8, 0.8);
    image2.setScale(0.8, 0.8);

// ---------- WRONG--------------
    image1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image1.on("pointerout", function (event) {
      this.clearTint();
    });
    image1.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text3.setVisible(true);
        text2.setVisible(true);
        text4.setVisible(true);
        image1.setVisible(false);
        image2.setVisible(false);
        cross.setVisible(true);
    }});

// -----------CORRECT------------
    image2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image2.on("pointerout", function (event) {
      this.clearTint();
    });
    image2.on("pointerdown", function () {
        if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

class question4 extends Phaser.Scene {
  constructor() {
    super({ key: "question4" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq2a", "game2/image/LP/2A.png");
    this.load.image("cardmcq2b", "game2/image/LP/2B.png");
    this.load.image("cardmcq2c", "game2/image/LP/2C.png");

    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
  }

  create() {
    localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(1450, 560, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);
    name.setOrigin(0, 0);

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

    const text1 = this.add.text(465, 245, "How do you define a Need?", {
      fontFamily: "Roboto",
      fill: "black",
    });

    const text2 = this.add.text(
      650,
      460,
      "Answer: A Need is something you have to have, something",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text3 = this.add.text(650, 515, "you cannot do without.", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text4 = this.add.text(
      650,
      565,
      "A NEED is something that is essential or very important",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text5 = this.add.text(650, 615, "rather than just desirable.", {
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
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objlower.html";
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
    var x3 = 1080;
    var y1 = 500;
    var y2 = 680;

    var imagemcq2a = this.add.image(x1, y1, "cardmcq2a").setInteractive();
    var imagemcq2b = this.add.image(x2, y1, "cardmcq2b").setInteractive();
    var imagemcq2c = this.add.image(x3, y2, "cardmcq2c").setInteractive();
    imagemcq2a.setScale(0.5, 0.5);
    imagemcq2b.setScale(0.5, 0.5);
    imagemcq2c.setScale(0.5, 0.5);

// -----------CORRECT------------
    imagemcq2b.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq2b.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq2b.on("pointerdown", function () {
        if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});


// ---------- WRONG--------------
    imagemcq2a.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq2a.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq2a.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
        imagemcq2c.setVisible(false);
        imagemcq2a.setVisible(false);
        imagemcq2b.setVisible(false);
        cross.setVisible(true);
    }});

// ---------- WRONG--------------
    imagemcq2c.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq2c.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq2c.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);

        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
        imagemcq2c.setVisible(false);
        imagemcq2a.setVisible(false);
        imagemcq2b.setVisible(false);
        cross.setVisible(true);
    }});
    };
}

class question5 extends Phaser.Scene {
  constructor() {
    super({ key: "question5" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("card1", "game2/image/coin_true.png");
    this.load.image("card2", "game2/image/coin_false.png");
  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(940, 640, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);


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
      465,
      245,
      "It is my responsibility to plan my spending such",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text2 = this.add.text(
      465,
      295,
      " that my allowance will be sufficient.",
      {
        fontFamily: "Roboto",
        fill: "black",
      }
    );

    const text3 = this.add.text(650, 460, "Answer: True", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text4 = this.add.text(
      650,
      515,
      "Always have a plan on how to spend your allowance",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text5 = this.add.text(
      650,
      565,
      "and make sure not to use future money.",
      {
        fontFamily: "Roboto",
        fill: "black",
      }
    );

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
    text3.setVisible(false);
    text4.setVisible(false);
    text5.setVisible(false);

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
        window.location.href = "game2objlower.html";
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

    var image1 = this.add.image(x1, y1, "card1").setInteractive();
    var image2 = this.add.image(x2, y1, "card2").setInteractive();
    image1.setScale(0.8, 0.8);
    image2.setScale(0.8, 0.8);
// ---------- WRONG--------------
    image2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image2.on("pointerout", function (event) {
      this.clearTint();
    });
    image2.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
        image1.setVisible(false);
        image2.setVisible(false);
        cross.setVisible(true);
    }});

// -----------CORRECT------------
    image1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image1.on("pointerout", function (event) {
      this.clearTint();
    });
    image1.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
};
}

class question6 extends Phaser.Scene {
  constructor() {
    super({ key: "question6" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("cardmcq3a", "game2/image/LP/3A.png");
    this.load.image("cardmcq3b", "game2/image/LP/3B.png");
    this.load.image("cardmcq3c", "game2/image/LP/3C.png");
  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(1020, 560, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);


    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);


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
      465,
      245,
      "Why is it important to save money?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(
      650,
      460,
      "Answer: So you have money in times of emergency.",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text3 = this.add.text(
      650,
      515,
      "Saving money is important because it helps protect you",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text4 = this.add.text(
      650,
      565,
      "in the event of a financial emergency like large",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text5 = this.add.text(650, 605, "purchase or debts.", {
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
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objlower.html";
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
    var x3 = 1080;
    var y1 = 500;
    var y2 = 680;

    var imagemcq3a = this.add.image(x1, y1, "cardmcq3a").setInteractive();
    var imagemcq3b = this.add.image(x2, y1, "cardmcq3b").setInteractive();
    var imagemcq3c = this.add.image(x3, y2, "cardmcq3c").setInteractive();
    imagemcq3a.setScale(0.5, 0.5);
    imagemcq3b.setScale(0.5, 0.5);
    imagemcq3c.setScale(0.5, 0.5);

    // -----------CORRECT------------
    imagemcq3a.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq3a.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq3a.on("pointerdown", function () {
        if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});


// ---------- WRONG--------------
    imagemcq3b.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq3b.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq3b.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
        imagemcq3a.setVisible(false);
      imagemcq3b.setVisible(false);
      imagemcq3c.setVisible(false);
      cross.setVisible(true);
    }});

// ---------- WRONG--------------
    imagemcq3c.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq3c.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq3c.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);

        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
        imagemcq3a.setVisible(false);
      imagemcq3b.setVisible(false);
      imagemcq3c.setVisible(false);
      cross.setVisible(true);
    }});
    };
}

class question7 extends Phaser.Scene {
  constructor() {
    super({ key: "question7" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");

    this.load.image("card1", "game2/image/coin_true.png");
    this.load.image("card2", "game2/image/coin_false.png");

  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(1250, 640, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);


    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);

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
      465,
      245,
      "When shopping, a Want should take priority over a Need.",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(650, 460, "Answer: False", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text3 = this.add.text(
      650,
      515,
      "WANT should not take priority over NEED as a WANT is",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text4 = this.add.text(
      650,
      565,
      "something that you can do absolutely without.",
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
    text2.setVisible(false);
    text3.setVisible(false);
    text4.setVisible(false);

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
        window.location.href = "game2objlower.html";
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
    image1.setScale(0.8, 0.8);
    image2.setScale(0.8, 0.8);

// ---------- WRONG--------------
    image1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image1.on("pointerout", function (event) {
      this.clearTint();
    });
    image1.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);

        text3.setVisible(true);
        text2.setVisible(true);
        text4.setVisible(true);
        image1.setVisible(false);
        image2.setVisible(false);
        cross.setVisible(true);
    }});

// -----------CORRECT------------
    image2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image2.on("pointerout", function (event) {
      this.clearTint();
    });
    image2.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}


class question8 extends Phaser.Scene {
  constructor() {
    super({ key: "question8" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq4a", "game2/image/LP/4A.png");
    this.load.image("cardmcq4b", "game2/image/LP/4B.png");
    this.load.image("cardmcq4c", "game2/image/LP/4C.png");
  }

  create() {
    localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(1440, 560, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);

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
      465,
      245,
      "If there is an item you really want",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text2 = this.add.text(
      465,
      295,
      "but cannot afford it, what should you do?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text3 = this.add.text(
      650,
      460,
      "Answer: Have a budget plan to save up money to buy it.",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text4 = this.add.text(
      650,
      515,
      "The item is a WANT and it is not a necessity.",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text5 = this.add.text(
      650,
      565,
      "So you should have a plan to save the money to buy it.",
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
    text5.setTint(0x000000);
    text5.setFontSize(35);
    text3.setVisible(false);
    text4.setVisible(false);
    text5.setVisible(false);

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
        window.location.href = "game2objlower.html";
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
    var x3 = 1080;
    var y1 = 500;
    var y2 = 680;

    var imagemcq4a = this.add.image(x1, y1, "cardmcq4a").setInteractive();
    var imagemcq4b = this.add.image(x2, y1, "cardmcq4b").setInteractive();
    var imagemcq4c = this.add.image(x3, y2, "cardmcq4c").setInteractive();
    imagemcq4a.setScale(0.5, 0.5);
    imagemcq4b.setScale(0.5, 0.5);
    imagemcq4c.setScale(0.5, 0.5);


    // -----------CORRECT------------
    imagemcq4b.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq4b.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq4b.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});


// ---------- WRONG--------------
    imagemcq4a.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq4a.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq4a.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
      imagemcq4a.setVisible(false);
      imagemcq4b.setVisible(false);
      imagemcq4c.setVisible(false);
      cross.setVisible(true);
    }});

// ---------- WRONG--------------
    imagemcq4c.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq4c.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq4c.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
      imagemcq4a.setVisible(false);
      imagemcq4b.setVisible(false);
      imagemcq4c.setVisible(false);
      cross.setVisible(true);
    }});
    };
}

class question9 extends Phaser.Scene {
  constructor() {
    super({ key: "question9" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq9a", "game2/image/new/9A.png");
    this.load.image("cardmcq9b", "game2/image/new/9B.png");
    this.load.image("cardmcq9c", "game2/image/new/9C.png");
    this.load.image("cardmcq9d", "game2/image/new/9D.png");
  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(1440, 560, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);



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

    const text1 = this.add.text(465, 245, "What are the 3R's?", {
      fontFamily: "Roboto",
      fill: "black",
    });

    const text2 = this.add.text(650, 460, "Answer: Reduce, Reuse, Recycle.", {
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
        window.location.href = "game2objlower.html";
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

    var imagemcq9a = this.add.image(x1, y1, "cardmcq9a").setInteractive();
    var imagemcq9b = this.add.image(x2, y1, "cardmcq9b").setInteractive();
    var imagemcq9c = this.add.image(x1, y2, "cardmcq9c").setInteractive();
    var imagemcq9d = this.add.image(x2, y2, "cardmcq9d").setInteractive();
    imagemcq9a.setScale(0.5, 0.5);
    imagemcq9b.setScale(0.5, 0.5);
    imagemcq9c.setScale(0.5, 0.5);
    imagemcq9d.setScale(0.5, 0.5);

    // ---------- WRONG--------------
    imagemcq9a.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq9a.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq9a.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
      imagemcq9a.setVisible(false);
      imagemcq9b.setVisible(false);
      imagemcq9c.setVisible(false);
      imagemcq9d.setVisible(false);
      cross.setVisible(true);
    }});

    // ---------- WRONG--------------
    imagemcq9c.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq9c.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq9c.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
      imagemcq9a.setVisible(false);
      imagemcq9b.setVisible(false);
      imagemcq9c.setVisible(false);
      imagemcq9d.setVisible(false);
      cross.setVisible(true);
    }});

// ---------- WRONG--------------
    imagemcq9d.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq9d.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq9d.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
      imagemcq9a.setVisible(false);
      imagemcq9b.setVisible(false);
      imagemcq9c.setVisible(false);
      imagemcq9d.setVisible(false);
      cross.setVisible(true);
    }});

// -----------CORRECT------------
    imagemcq9b.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq9b.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq9b.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

class question10 extends Phaser.Scene {
  constructor() {
    super({ key: "question10" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq5a", "game2/image/coin_true.png");
    this.load.image("cardmcq5b", "game2/image/coin_false.png");
  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(940, 640, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);
    name.setOrigin(0, 0);


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
      465,
      245,
      "When building a budget, you should put in",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text2 = this.add.text(
      465,
      295,
      "a portion of your income into it on a regular basis.",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text3 = this.add.text(650, 460, "Answer: True", {
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
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objlower.html";
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
    var x2 = 1200;
    var y1 = 600;

    var imagemcq5a = this.add.image(x1, y1, "cardmcq5a").setInteractive();
    var imagemcq5b = this.add.image(x2, y1, "cardmcq5b").setInteractive();
    imagemcq5a.setScale(0.8, 0.8);
    imagemcq5b.setScale(0.8, 0.8);

   // ---------- WRONG--------------
    imagemcq5b.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq5b.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq5b.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        imagemcq5a.setVisible(false);
      imagemcq5b.setVisible(false);
      cross.setVisible(true);
    }});

// -----------CORRECT------------
    imagemcq5a.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq5a.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq5a.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

class question11 extends Phaser.Scene {
  constructor() {
    super({ key: "question11" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("card1", "game2/image/coin_true.png");
    this.load.image("card2", "game2/image/coin_false.png");
  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(1250, 640, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);


    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);


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
      465,
      245,
      "When I overspend, it is ok to ask my parents for more money.",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(650, 460, "Answer: False", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text3 = this.add.text(
      650,
      515,
      "It is not okay to ask your parents for more money if you overspend.",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text4 = this.add.text(
      650,
      565,
      "As it is your responsibility to make sure that you do not overspend,",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text5 = this.add.text(
      650,
      615,
      "and you should not ask for future money.",
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
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objlower.html";
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

    var x1 = 900;
    var x2 = 1200;
    var y1 = 600;

    var image1 = this.add.image(x1, y1, "card1").setInteractive();
    var image2 = this.add.image(x2, y1, "card2").setInteractive();
    image1.setScale(0.8, 0.8);
    image2.setScale(0.8, 0.8);

   // ---------- WRONG--------------
    image1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image1.on("pointerout", function (event) {
      this.clearTint();
    });
    image1.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
        image1.setVisible(false);
      image2.setVisible(false);
      cross.setVisible(true);
    }});

// -----------CORRECT------------
    image2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image2.on("pointerout", function (event) {
      this.clearTint();
    });
    image2.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

class question12 extends Phaser.Scene {
  constructor() {
    super({ key: "question12" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq6a", "game2/image/LP/6A.png");
    this.load.image("cardmcq6b", "game2/image/LP/6B.png");
  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(1070, 670, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);


    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);


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
      465,
      245,
      'The saying "Money does not grow on trees" means?',
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(
      650,
      460,
      "Answer: It is not easy to get money. We have to work hard",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text3 = this.add.text(
      650,
      515,
      "to make money. We can't just walk around and pick it like",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text4 = this.add.text(
      650,
      565,
      "fruit from the trees. Money is not easily obtained",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text5 = this.add.text(
      650,
      615,
      "so you should be careful about how much money you spend.",
      {
        fontFamily: "Roboto",
        fill: "black",
      }
    );

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
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objlower.html";
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
    var x2 = 1380;
    var y1 = 600;

    var imagemcq6a = this.add.image(x1, y1, "cardmcq6a").setInteractive();
    var imagemcq6b = this.add.image(x2, y1, "cardmcq6b").setInteractive();
    imagemcq6a.setScale(0.5, 0.5);
    imagemcq6b.setScale(0.5, 0.5);
// ---------- WRONG--------------
    imagemcq6b.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq6b.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq6b.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
        imagemcq6a.setVisible(false);
        imagemcq6b.setVisible(false);
        cross.setVisible(true);
    }});

// -----------CORRECT------------
    imagemcq6a.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq6a.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq6a.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

class question13 extends Phaser.Scene {
  constructor() {
    super({ key: "question13" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("card1", "game2/image/coin_true.png");
    this.load.image("card2", "game2/image/coin_false.png");

  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");

    let tick = this.add.sprite(940, 640, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);
    name.setOrigin(0, 0);

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
      465,
      245,
      "One should have a savings plan for an item he/she wants to buy.",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text3 = this.add.text(650, 460, "Answer: True", {
      fontFamily: "Roboto",
      fill: "black",
    });
    const text4 = this.add.text(
      650,
      515,
      "You definitely need a saving plan as you may never know",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text5 = this.add.text(
      650,
      565,
      "when you will need the money in times of emergency.",
      { fontFamily: "Roboto", fill: "black" }
    );

    text1.setTint(0x000000);
    text1.setFontSize(35);

    text3.setTint(0x000000);
    text3.setFontSize(35);
    text4.setTint(0x000000);
    text4.setFontSize(35);
    text5.setTint(0x000000);
    text5.setFontSize(35);
    text3.setVisible(false);
    text4.setVisible(false);
    text5.setVisible(false);

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
        window.location.href = "game2objlower.html";
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

    var x1 = 900;
    var x2 = 1200;
    var y1 = 600;

    var image1 = this.add.image(x1, y1, "card1").setInteractive();
    var image2 = this.add.image(x2, y1, "card2").setInteractive();
    image1.setScale(0.8, 0.8);
    image2.setScale(0.8, 0.8);

    // ---------- WRONG--------------
    image2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image2.on("pointerout", function (event) {
      this.clearTint();
    });
    image2.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text3.setVisible(true);
        text4.setVisible(true);
        text5.setVisible(true);
        image1.setVisible(false);
      image2.setVisible(false);
      cross.setVisible(true);
    }});

// -----------CORRECT------------
    image1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    image1.on("pointerout", function (event) {
      this.clearTint();
    });
    image1.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

class question14 extends Phaser.Scene {
  constructor() {
    super({ key: "question14" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq7a", "game2/image/LP/7A.png");
    this.load.image("cardmcq7b", "game2/image/LP/7B.png");
    this.load.image("cardmcq7c", "game2/image/LP/7C.png");
    this.load.image("cardmcq7d", "game2/image/LP/7D.png");

  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");

    let tick = this.add.sprite(1440, 740, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);

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

    const text1 = this.add.text(465, 245, "The best spending choice is...", {
      fontFamily: "Roboto",
      fill: "black",
    });

    const text2 = this.add.text(
      650,
      460,
      "Answer: To compare prices before deciding on what to buy.",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text3 = this.add.text(
      650,
      515,
      "Always compare the prices of the items that you are",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text4 = this.add.text(
      650,
      565,
      "going to buy as there may be cheaper options.",
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
    text2.setVisible(false);
    text3.setVisible(false);
    text4.setVisible(false);

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
        window.location.href = "game2objlower.html";
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

    var imagemcq7a = this.add.image(x1, y1, "cardmcq7a").setInteractive();
    var imagemcq7b = this.add.image(x2, y1, "cardmcq7b").setInteractive();
    var imagemcq7c = this.add.image(x1, y2, "cardmcq7c").setInteractive();
    var imagemcq7d = this.add.image(x2, y2, "cardmcq7d").setInteractive();
    imagemcq7a.setScale(0.5, 0.5);
    imagemcq7b.setScale(0.5, 0.5);
    imagemcq7c.setScale(0.5, 0.5);
    imagemcq7d.setScale(0.5, 0.5);

    // ---------- WRONG--------------
    imagemcq7a.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq7a.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq7a.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
      imagemcq7a.setVisible(false);
      imagemcq7b.setVisible(false);
      imagemcq7c.setVisible(false);
      imagemcq7d.setVisible(false);
      cross.setVisible(true);
    }});

    // ---------- WRONG--------------
    imagemcq7b.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq7b.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq7b.on("pointerdown", function () {
   if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
      imagemcq7a.setVisible(false);
      imagemcq7b.setVisible(false);
      imagemcq7c.setVisible(false);
      imagemcq7d.setVisible(false);
      cross.setVisible(true);
    }});

// ---------- WRONG--------------
    imagemcq7c.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq7c.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq7c.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        imagemcq7a.setVisible(false);
      imagemcq7b.setVisible(false);
      imagemcq7c.setVisible(false);
      imagemcq7d.setVisible(false);
      cross.setVisible(true);
    }});

// -----------CORRECT------------
    imagemcq7d.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq7d.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq7d.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

class question15 extends Phaser.Scene {
  constructor() {
    super({ key: "question15" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");

    this.load.image("cardmcq14a", "game2/image/new/14A.png");
    this.load.image("cardmcq14b", "game2/image/new/14B.png");
    this.load.image("cardmcq14c", "game2/image/new/14C.png");

  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");

    let tick = this.add.sprite(940, 560, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);


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
      465,
      245,
      "The allocation of Spend, Save and Share in Money Jar is?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(
      650,
      460,
      "Answer: Spend 70%, Save 20%, Give 10% ",
      { fontFamily: "Roboto", fill: "black" }
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
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objlower.html";
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

    var x1 = 830;
    var x2 = 1330;
    var x3 = 1080;
    var y1 = 500;
    var y2 = 680;

    var cardmcq14a = this.add.image(x1, y1, "cardmcq14a").setInteractive();
    var cardmcq14b = this.add.image(x2, y1, "cardmcq14b").setInteractive();
    var cardmcq14c = this.add.image(x3, y2, "cardmcq14c").setInteractive();
    cardmcq14a.setScale(0.5, 0.5);
    cardmcq14b.setScale(0.5, 0.5);
    cardmcq14c.setScale(0.5, 0.5);

    // ---------- WRONG--------------
    cardmcq14c.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    cardmcq14c.on("pointerout", function (event) {
      this.clearTint();
    });
    cardmcq14c.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
      cardmcq14a.setVisible(false);
      cardmcq14b.setVisible(false);
      cardmcq14c.setVisible(false);
      cross.setVisible(true);
    }});

// ---------- WRONG--------------
    cardmcq14b.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    cardmcq14b.on("pointerout", function (event) {
      this.clearTint();
    });
    cardmcq14b.on("pointerdown", function () {
   if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
      cardmcq14a.setVisible(false);
      cardmcq14b.setVisible(false);
      cardmcq14c.setVisible(false);
      cross.setVisible(true);
    }});

// -----------CORRECT------------
    cardmcq14a.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    cardmcq14a.on("pointerout", function (event) {
      this.clearTint();
    });
    cardmcq14a.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

class question16 extends Phaser.Scene {
  constructor() {
    super({ key: "question16" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");

    this.load.image("card1", "game2/image/coin_false.png");
    this.load.image("card2", "game2/image/coin_true.png");
  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(940, 640, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);



    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);


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
      465,
      245,
      "Reusable bags can be used many times, reducing amount",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text2 = this.add.text(465, 295, "of single bag which use resources and also cause pollution.", {
      fontFamily: "Roboto",
      fill: "black",
    });

    const text3 = this.add.text(650, 460, "Answer: True", {
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
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objlower.html";
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

    var x1 = 900;
    var x2 = 1200;
    var y1 = 600;

    var card1 = this.add.image(x1, y1, "card1").setInteractive();
    var card2 = this.add.image(x2, y1, "card2").setInteractive();
    card1.setScale(0.8, 0.8);
    card2.setScale(0.8, 0.8);

    // ---------- WRONG--------------
    card2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card2.on("pointerout", function (event) {
      this.clearTint();
    });
    card2.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text3.setVisible(true);
        card1.setVisible(false);
      card2.setVisible(false);
      cross.setVisible(true);
    }});

// -----------CORRECT------------
    card1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card1.on("pointerout", function (event) {
      this.clearTint();
    });
    card1.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

class question17 extends Phaser.Scene {
  constructor() {
    super({ key: "question17" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq10a", "game2/image/LP/10A.png");
    this.load.image("cardmcq10b", "game2/image/LP/10B.png");
    this.load.image("cardmcq10c", "game2/image/LP/10C.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(1020, 570, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);


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
      465,
      245,
      "What is the benefit of putting your money in a bank?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(
      650,
      460,
      "Answer: You can earn extra money from the bank in",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text3 = this.add.text(650, 515, "the form of interest.", {
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
      this.clearTint();
    });
    spritepausebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game2objlower.html";
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
    var x3 = 1080;
    var y1 = 500;
    var y2 = 680;

    var imagemcq10a = this.add.image(x1, y1, "cardmcq10a").setInteractive();
    var imagemcq10b = this.add.image(x2, y1, "cardmcq10b").setInteractive();
    var imagemcq10c = this.add.image(x3, y2, "cardmcq10c").setInteractive();
    imagemcq10a.setScale(0.5, 0.5);
    imagemcq10b.setScale(0.5, 0.5);
    imagemcq10c.setScale(0.5, 0.5);

    // -----------CORRECT------------
    imagemcq10a.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq10a.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq10a.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});


// ---------- WRONG--------------
    imagemcq10b.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq10b.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq10b.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        imagemcq10a.setVisible(false);
      imagemcq10b.setVisible(false);
      imagemcq10c.setVisible(false);
      cross.setVisible(true);
    }});

// ---------- WRONG--------------
    imagemcq10c.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq10c.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq10c.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        imagemcq10a.setVisible(false);
      imagemcq10b.setVisible(false);
      imagemcq10c.setVisible(false);
      cross.setVisible(true);
    }});
    };
}

class question18 extends Phaser.Scene {
  constructor() {
    super({ key: "question18" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq11a", "game2/image/LP/11A.png");
    this.load.image("cardmcq11b", "game2/image/LP/11B.png");
    this.load.image("cardmcq11c", "game2/image/LP/11C.png");
    this.load.image("cardmcq11d", "game2/image/LP/11D.png");

    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(1020, 550, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);


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
      465,
      245,
      "One of the best ways to grow my savings is?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(
      650,
      460,
      "Answer: Save my money in a bank and earn interest",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text3 = this.add.text(
      650,
      515,
      "To grow money, the best way is to save money and",
      { fontFamily: "Roboto", fill: "black" }
    );
    const text4 = this.add.text(
      650,
      565,
      "earn interest by putting the money in the bank.",
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
    text2.setVisible(false);
    text3.setVisible(false);
    text4.setVisible(false);

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
        window.location.href = "game2objlower.html";
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
    var y1 = 500;
    var y2 = 680;

    var imagemcq11a = this.add.image(x1, y1, "cardmcq11a").setInteractive();
    var imagemcq11b = this.add.image(x2, y1, "cardmcq11b").setInteractive();
    var imagemcq11c = this.add.image(x1, y2, "cardmcq11c").setInteractive();
    var imagemcq11d = this.add.image(x2, y2, "cardmcq11d").setInteractive();
    imagemcq11a.setScale(0.5, 0.5);
    imagemcq11b.setScale(0.5, 0.5);
    imagemcq11c.setScale(0.5, 0.5);
    imagemcq11d.setScale(0.5, 0.5);

    // ---------- WRONG--------------
    imagemcq11d.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq11d.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq11d.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
      imagemcq11a.setVisible(false);
      imagemcq11b.setVisible(false);
      imagemcq11c.setVisible(false);
      imagemcq11d.setVisible(false);
      cross.setVisible(true);
    }});

    // ---------- WRONG--------------
    imagemcq11c.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq11c.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq11c.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
      imagemcq11a.setVisible(false);
      imagemcq11b.setVisible(false);
      imagemcq11c.setVisible(false);
      imagemcq11d.setVisible(false);
      cross.setVisible(true);
    }});

// ---------- WRONG--------------
    imagemcq11b.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq11b.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq11b.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        text3.setVisible(true);
        text4.setVisible(true);
        imagemcq11a.setVisible(false);
      imagemcq11b.setVisible(false);
      imagemcq11c.setVisible(false);
      imagemcq11d.setVisible(false);
      cross.setVisible(true);
    }});

// -----------CORRECT------------
    imagemcq11a.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    imagemcq11a.on("pointerout", function (event) {
      this.clearTint();
    });
    imagemcq11a.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

class question19 extends Phaser.Scene {
  constructor() {
    super({ key: "question19" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game2/image/game2_background.jpeg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("cross", "SLICES/wrong.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("cardmcq20a", "game2/image/new/20A.png");
    this.load.image("cardmcq20b", "game2/image/new/20B.png");
    this.load.image("cardmcq20c", "game2/image/new/20C.png");
    this.load.image("cardmcq20d", "game2/image/new/20D.png");

  }

  create() {
  localStorage.setItem("click", 0);
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1620, 140, "money");
    let name = this.add.sprite(10, 80, "name");
    let tick = this.add.sprite(1420, 740, "tick")
    .setDepth(11)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let cross = this.add.sprite(440, 700, "cross")
    .setDepth(10)
    .setScale(0.6, 0.6)
    .setVisible(false);

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 920 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);



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
      465,
      245,
      "Which of the following(s) are ways to save money?",
      { fontFamily: "Roboto", fill: "black" }
    );

    const text2 = this.add.text(650, 460, "Answer: All of the above.", {
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
        window.location.href = "game2objlower.html";
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

    var cardmcq20a = this.add.image(x1, y1, "cardmcq20a").setInteractive();
    var cardmcq20b = this.add.image(x2, y1, "cardmcq20b").setInteractive();
    var cardmcq20c = this.add.image(x1, y2, "cardmcq20c").setInteractive();
    var cardmcq20d = this.add.image(x2, y2, "cardmcq20d").setInteractive();
    cardmcq20a.setScale(0.5, 0.5);
    cardmcq20b.setScale(0.5, 0.5);
    cardmcq20c.setScale(0.5, 0.5);
    cardmcq20d.setScale(0.5, 0.5);

        // ---------- WRONG--------------
    cardmcq20a.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    cardmcq20a.on("pointerout", function (event) {
      this.clearTint();
    });
    cardmcq20a.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
      cardmcq20a.setVisible(false);
      cardmcq20b.setVisible(false);
      cardmcq20c.setVisible(false);
      cardmcq20d.setVisible(false);
      cross.setVisible(true);
    }});

    // ---------- WRONG--------------
    cardmcq20b.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    cardmcq20b.on("pointerout", function (event) {
      this.clearTint();
    });
    cardmcq20b.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
      cardmcq20a.setVisible(false);
      cardmcq20b.setVisible(false);
      cardmcq20c.setVisible(false);
      cardmcq20d.setVisible(false);
      cross.setVisible(true);
    }});

// ---------- WRONG--------------
    cardmcq20c.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    cardmcq20c.on("pointerout", function (event) {
      this.clearTint();
    });
    cardmcq20c.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
        localStorage.setItem("click", 1);
        var newcoin = Number(localStorage.getItem(i)) - 0.5;
        localStorage.setItem(i, newcoin);
        var w = 2;
        var wrongqn = Number(localStorage.getItem(w)) + 1;
        localStorage.setItem(w, wrongqn);
        text2.setVisible(true);
        cardmcq20a.setVisible(false);
      cardmcq20b.setVisible(false);
      cardmcq20c.setVisible(false);
      cardmcq20d.setVisible(false);
      cross.setVisible(true);
    }});

// -----------CORRECT------------
    cardmcq20d.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    cardmcq20d.on("pointerout", function (event) {
      this.clearTint();
    });
    cardmcq20d.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      var i = 0;
      var c = 1;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
       tick.setVisible(true);
    }});
    };
}

let config = {
  type: Phaser.Auto,
  height: 930,
  width: 1921,
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
