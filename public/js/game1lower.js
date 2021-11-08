//create a new scene (place where the action takes place characters etc.)
let gameScene = new Phaser.Scene("Game");
var correctcount = 0;
var wrongcount = 0;
localStorage.setItem("cc", correctcount);
localStorage.setItem("wc", wrongcount);
// var links = ['sceneC1', 'sceneC2', 'sceneC3', 'sceneC4', 'sceneC5', 'sceneC6', 'sceneC7', 'sceneC8', 'sceneC9', 'sceneC10', 'sceneC11', 'sceneC12', 'sceneC13', 'sceneC14', 'sceneC15', 'sceneC16', 'sceneC17', 'sceneC18', 'sceneC19', 'sceneC20', 'sceneC21', 'sceneC22', 'sceneC23', 'sceneC24', 'sceneC25'];
// function untitledFunction() {
//       // Chooses a random link:
//       var i = Math.floor(Math.random() * links.length);
//       // Directs the browser to the chosen target:
//       innerHTMLDocument.showSceneNamed(links[i], innerHTMLDocument.kSceneTransitionCrossfade, 1.1);
//       return false;
//
//     }
//       untitledFunction();

var timer = document.getElementById("countup-wrapper");
timer.style.display = "none";
var spritecoin = document.getElementById("coin-wrapper");
spritecoin.style.display = "none";

//-----------LOWER PRI  GAME 1 LEARNING POINTS-----------------------------
class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "sceneA" });
  }
  preload() {
    this.load.image("game1lesson", "SLICES/GAME 1/game1-learningpt.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("nextbtn", "SLICES/NEW buttons size/new_bttn-next.png");
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");
  }
  create() {
    //create sprite
    localStorage.setItem(2, 0);
    localStorage.setItem(1, 0);
    let bg = this.add.sprite(0, 0, "game1lesson");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 170, "nameholder");
    let coinholder = this.add.sprite(1700, 170, "coinholder");

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);

    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 155, playername, {
      font: "30px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1680, 155, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
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
      } else {
      }
    });

    //--------------------------NEXT BUTTON------------------------------
    let spritenextbtn = this.add.sprite(1850, 800, "nextbtn").setInteractive();
    spritenextbtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritenextbtn.on("pointerout", function (event) {
      this.clearTint();
    });
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneB"));
  }
}

//-----------LOWER PRI GAME 1 INTRO PAGE-----------------------------
class SceneB extends Phaser.Scene {
  constructor() {
    super({ key: "sceneB" });
  }
  preload() {
    this.load.image("game1background", "SLICES/GAME 1/needandwant.jpg");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("startbtn", "SLICES/NEW buttons size/new_bttn-start.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timer", "SLICES/btn_time.png");
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");
    this.load.audio("backgroundmusic", "SLICES/Game1-new.mp3");
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
    let bg = this.add.sprite(0, 0, "game1background");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 170, "nameholder");
    let timer = this.add.sprite(1700, 280, "timer");
    let coinholder = this.add.sprite(1700, 170, "coinholder");

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    timer.setScale(0.55, 0.55);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 155, playername, {
      font: "30px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1680, 155, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });
    console.log(gameW, gameH);
    // SELECT Name FROM Player_Table
    // ORDER BY rowid DESC
    // LIMIT 1;
    // this.add.text(820, 78, 'Hello, '+ name, { font: '18px Arial', fill: 'black', });
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

    //--------------------------START BUTTON------------------------------
    let spritestartbtn = this.add
      .sprite(1800, 795, "startbtn")
      .setInteractive();
    spritestartbtn.on("pointerover", function (event) {
      this.setTint(0xffe599);
    });
    spritestartbtn.on("pointerout", function (event) {
      this.clearTint();
    });
    spritestartbtn.on("pointerdown", () => this.scene.start("sceneC1"));

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

//-----------LOWER GAME QUESTION 1-----------------------------
localStorage.setItem("click", 0);
class SceneC1 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC1" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");
    //this.load.image('pausebtn','SLICES/btn_pause.png');
    this.load.image("nextbtn", "SLICES/btn_next.png");
    //this.load.image('homebtn','SLICES/btn_home.png');
    //this.load.image('lowerpri','SLICES/btn_lowerp.png');
    this.load.image("needplaceholder", "SLICES/placeholder_need.png");
    this.load.image("lowerqn1need", "SLICES/lowerqn1need.png");
    this.load.image("lowerqn1want", "SLICES/lowerqn1want.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
  }
  create() {
    //create sprite
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");

    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");
    //let lowerpri = this.add.sprite(400, 180, 'lowerpri');
    let needplaceholder = this.add.sprite(1921 / 2, 500, "needplaceholder");
    let correctans = this.add.sprite(850, 620, "correctans").setDepth(1).setScale(0.6, 0.6);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(1250, 620, "wrongans").setDepth(1).setScale(0.6, 0.6);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    needplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);

    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });

    function startCountdown(seconds) {
      let counter = seconds;
      timer.style.display = "flex";
      spritecoin.style.display = "flex";
      const interval = setInterval(() => {
        console.log(counter);
        counter--;
        document.getElementById("countup").innerHTML = counter + " sec"
        let ccounter = Number(localStorage.getItem(0));
        document.getElementById("coin").innerHTML = "$" + ccounter.toFixed(2);
        if (counter <= 0) {
          clearInterval(interval);
          console.log("Ding!");
          window.location.href = "game1ResultLower.html";
        }
      }, 1000);
    }
    startCountdown(60);



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

    //--------------------------HOME BUTTON------------------------------
    //et spritehomebtn = this.add.sprite(1700, 50, 'homebtn').setInteractive();
    //spritehomebtn.on('pointerover', function (event) {
    //this.setTint(0xffae00);
    //});
    //spritehomebtn.on('pointerout', function (event) {
    //this.clearTint();
    //});
    //spritehomebtn.on('pointerdown', function () {
    //window.location.href="game1lower.html";
    //});

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC2"));

    //--------------------------QN 1 NEED BUTTON CORRECT------------------------------
    let spriteneed1 = this.add
      .sprite(750, 550, "lowerqn1need")
      .setInteractive();
    spriteneed1.setScale(0.65, 0.65);
    spriteneed1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed1.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed1.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});

    //--------------------------QN 1 WANT BUTTON WRONG------------------------------
    let spritewant1 = this.add
      .sprite(1150, 550, "lowerqn1want")
      .setInteractive();
    spritewant1.setScale(0.65, 0.65);
    spritewant1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant1.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant1.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 2-----------------------------
class SceneC2 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC2" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");
    //this.load.image('pausebtn','SLICES/btn_pause.png');
    this.load.image("nextbtn", "SLICES/btn_next.png");
    //this.load.image('homebtn','SLICES/btn_home.png');
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("wantplaceholder", "SLICES/placeholder_want.png");
    this.load.image("lowerqn2need", "SLICES/lowerqn2need.png");
    this.load.image("lowerqn2want", "SLICES/GAME 1/vrgame.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let wantplaceholder = this.add.sprite(1921 / 2, 500, "wantplaceholder");
    let correctans = this.add.sprite(1250, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(850, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    wantplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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

    //--------------------------HOME BUTTON------------------------------
    //let spritehomebtn = this.add.sprite(1700, 50, 'homebtn').setInteractive();
    //spritehomebtn.on('pointerover', function (event) {
    //this.setTint(0xffae00);
    //});
    //spritehomebtn.on('pointerout', function (event) {
    //this.clearTint();
    //});
    //spritehomebtn.on('pointerdown', function () {
    //window.location.href="game1lower.html";
    //});

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC3"));

    //--------------------------QN 2 NEED BUTTON WRONG------------------------------
    let spriteneed2 = this.add
      .sprite(750, 550, "lowerqn2need")
      .setInteractive();
    spriteneed2.setScale(0.65, 0.65);
    spriteneed2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed2.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed2.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});

    //--------------------------QN 2 WANT BUTTON CORRECT------------------------------
    let spritewant2 = this.add
      .sprite(1150, 550, "lowerqn2want")
      .setInteractive();
    spritewant2.setScale(0.65, 0.65);
    spritewant2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant2.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant2.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 3-----------------------------
class SceneC3 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC3" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");

    this.load.image("nextbtn", "SLICES/btn_next.png");

    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("wantplaceholder", "SLICES/placeholder_want.png");
    this.load.image("lowerqn3need", "SLICES/GAME 1/qn3.png");
    this.load.image("lowerqn3want", "SLICES/GAME 1/sweets.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let wantplaceholder = this.add.sprite(1921 / 2, 500, "wantplaceholder");
    let correctans = this.add.sprite(1250, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(850, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    wantplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC4"));

    //--------------------------QN 3 NEED BUTTON WRONG------------------------------
    let spriteneed3 = this.add
      .sprite(750, 550, "lowerqn3need")
      .setInteractive();
    spriteneed3.setScale(0.65, 0.65);
    spriteneed3.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed3.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed3.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});

    //--------------------------QN 3 WANT BUTTON CORRECT------------------------------
    let spritewant3 = this.add
      .sprite(1150, 550, "lowerqn3want")
      .setInteractive();
    spritewant3.setScale(0.65, 0.65);
    spritewant3.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant3.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant3.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 4-----------------------------
class SceneC4 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC4" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");

    this.load.image("nextbtn", "SLICES/btn_next.png");

    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("needplaceholder", "SLICES/placeholder_need.png");
    this.load.image("lowerqn4need", "SLICES/lowerqn4need.png");
    this.load.image("lowerqn4want", "SLICES/GAME 1/qn4.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let needplaceholder = this.add.sprite(1921 / 2, 500, "needplaceholder");
    let correctans = this.add.sprite(850, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(1250, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    needplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC5"));

    //--------------------------QN 4 NEED BUTTON CORRECT------------------------------
    let spriteneed4 = this.add
      .sprite(750, 550, "lowerqn4need")
      .setInteractive();
    spriteneed4.setScale(0.65, 0.65);
    spriteneed4.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed4.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed4.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});

    //--------------------------QN 4 WANT BUTTON WRONG------------------------------
    let spritewant4 = this.add
      .sprite(1150, 545, "lowerqn4want")
      .setInteractive();
    spritewant4.setScale(0.65, 0.65);
    spritewant4.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant4.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant4.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 5-----------------------------
class SceneC5 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC5" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("nextbtn", "SLICES/btn_next.png");

    this.load.image("needplaceholder", "SLICES/placeholder_need.png");
    this.load.image("lowerqn5need", "SLICES/lowerqn5need.png");
    this.load.image("lowerqn5want", "SLICES/GAME 1/qn5.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let needplaceholder = this.add.sprite(1921 / 2, 500, "needplaceholder");
    let correctans = this.add.sprite(850, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(1250, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    needplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC7"));

    //--------------------------QN 5 NEED BUTTON CORRECT------------------------------
    let spriteneed5 = this.add
      .sprite(750, 550, "lowerqn5need")
      .setInteractive();
    spriteneed5.setScale(0.65, 0.65);
    spriteneed5.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed5.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed5.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});

    //--------------------------QN 5 WANT BUTTON WRONG------------------------------
    let spritewant5 = this.add
      .sprite(1150, 550, "lowerqn5want")
      .setInteractive();
    spritewant5.setScale(0.64, 0.64);
    spritewant5.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant5.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant5.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});
  }
}

//-----------LOWER GAME QUESTION 7-----------------------------
class SceneC7 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC7" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("nextbtn", "SLICES/btn_next.png");

    this.load.image("wantplaceholder", "SLICES/placeholder_want.png");
    this.load.image("lowerqn7need", "SLICES/lowerqn7need.png");
    this.load.image("lowerqn7want", "SLICES/lowerqn7want.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let wantplaceholder = this.add.sprite(1921 / 2, 500, "wantplaceholder");
    let correctans = this.add.sprite(1250, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(850, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    wantplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC8"));

    //--------------------------QN 7 NEED BUTTON WRONG------------------------------
    let spriteneed7 = this.add
      .sprite(750, 550, "lowerqn7need")
      .setInteractive();
    spriteneed7.setScale(0.65, 0.65);
    spriteneed7.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed7.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed7.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});

    //--------------------------QN 7 WANT BUTTON CORRECT------------------------------
    let spritewant7 = this.add
      .sprite(1150, 550, "lowerqn7want")
      .setInteractive();
    spritewant7.setScale(0.65, 0.65);
    spritewant7.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant7.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant7.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 8-----------------------------
class SceneC8 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC8" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("nextbtn", "SLICES/btn_next.png");

    this.load.image("needplaceholder", "SLICES/placeholder_need.png");
    this.load.image("lowerqn8need", "SLICES/lowerqn8need.png");
    this.load.image("lowerqn8want", "SLICES/lowerqn8want.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let needplaceholder = this.add.sprite(1921 / 2, 500, "needplaceholder");
    let correctans = this.add.sprite(850, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(1250, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    needplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC9"));

    //--------------------------QN 8 NEED BUTTON CORRECT------------------------------
    let spriteneed8 = this.add
      .sprite(750, 550, "lowerqn8need")
      .setInteractive();
    spriteneed8.setScale(0.65, 0.65);
    spriteneed8.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed8.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed8.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});

    //--------------------------QN 8 WANT BUTTON------------------------------
    let spritewant8 = this.add
      .sprite(1150, 550, "lowerqn8want")
      .setInteractive();
    spritewant8.setScale(0.65, 0.65);
    spritewant8.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant8.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant8.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 9-----------------------------
class SceneC9 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC9" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("nextbtn", "SLICES/btn_next.png");

    this.load.image("needplaceholder", "SLICES/placeholder_need.png");
    this.load.image("lowerqn9need", "SLICES/lowerqn9need-new.png");
    this.load.image("lowerqn9want", "SLICES/lowerqn9want-new.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let needplaceholder = this.add.sprite(1921 / 2, 500, "needplaceholder");
    let correctans = this.add.sprite(850, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(1250, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    needplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC10"));

    //--------------------------QN 9 NEED BUTTON CORRECT------------------------------
    let spriteneed9 = this.add
      .sprite(750, 550, "lowerqn9need")
      .setInteractive();
    spriteneed9.setScale(0.65, 0.65);
    spriteneed9.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed9.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed9.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});

    //--------------------------QN 9 WANT BUTTON------------------------------
    let spritewant9 = this.add
      .sprite(1150, 550, "lowerqn9want")
      .setInteractive();
    spritewant9.setScale(0.65, 0.65);
    spritewant9.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant9.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant9.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 10-----------------------------
class SceneC10 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC10" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("nextbtn", "SLICES/btn_next.png");

    this.load.image("wantplaceholder", "SLICES/placeholder_want.png");
    this.load.image("lowerqn10need", "SLICES/lowerqn10need.png");
    this.load.image("lowerqn10want", "SLICES/lowerqn10want-new.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let wantplaceholder = this.add.sprite(1921 / 2, 500, "wantplaceholder");
    let correctans = this.add.sprite(1250, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(850, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    wantplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC11"));

    //--------------------------QN 10 NEED BUTTON WRONG------------------------------
    let spriteneed10 = this.add
      .sprite(750, 550, "lowerqn10need")
      .setInteractive();
    spriteneed10.setScale(0.65, 0.65);
    spriteneed10.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed10.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed10.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});

    //--------------------------QN 10 WANT BUTTON CORRECT------------------------------
    let spritewant10 = this.add
      .sprite(1150, 550, "lowerqn10want")
      .setInteractive();
    spritewant10.setScale(0.65, 0.65);
    spritewant10.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant10.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant10.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 11-----------------------------
class SceneC11 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC11" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("nextbtn", "SLICES/btn_next.png");

    this.load.image("needplaceholder", "SLICES/placeholder_need.png");
    this.load.image("lowerqn11need", "SLICES/lowerqn11need.png");
    this.load.image("lowerqn11want", "SLICES/lowerqn11want.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let needplaceholder = this.add.sprite(1921 / 2, 500, "needplaceholder");
    let correctans = this.add.sprite(850, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(1250, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    needplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC12"));

    //--------------------------QN 11 NEED BUTTON CORRECT------------------------------
    let spriteneed11 = this.add
      .sprite(750, 550, "lowerqn11need")
      .setInteractive();
    spriteneed11.setScale(0.65, 0.65);
    spriteneed11.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed11.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed11.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});

    //--------------------------QN 11 WANT BUTTON WANT------------------------------
    let spritewant11 = this.add
      .sprite(1150, 550, "lowerqn11want")
      .setInteractive();
    spritewant11.setScale(0.65, 0.65);
    spritewant11.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant11.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant11.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 12-----------------------------
class SceneC12 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC12" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");

    this.load.image("nextbtn", "SLICES/btn_next.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("wantplaceholder", "SLICES/placeholder_want.png");
    this.load.image("lowerqn12need", "SLICES/lowerqn12need.png");
    this.load.image("lowerqn12want", "SLICES/lowerqn12want.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let wantplaceholder = this.add.sprite(1921 / 2, 500, "wantplaceholder");
    let correctans = this.add.sprite(1250, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(850, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    wantplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC13"));

    //--------------------------QN 12 NEED BUTTON WRONG------------------------------
    let spriteneed12 = this.add
      .sprite(750, 550, "lowerqn12need")
      .setInteractive();
    spriteneed12.setScale(0.65, 0.65);
    spriteneed12.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed12.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed12.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});

    //--------------------------QN 12 WANT BUTTON CORRECT------------------------------
    let spritewant12 = this.add
      .sprite(1150, 550, "lowerqn12want")
      .setInteractive();
    spritewant12.setScale(0.65, 0.65);
    spritewant12.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant12.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant12.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 13-----------------------------
class SceneC13 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC13" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");

    this.load.image("nextbtn", "SLICES/btn_next.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("wantplaceholder", "SLICES/placeholder_want.png");
    this.load.image("lowerqn13need", "SLICES/lowerqn13need.png");
    this.load.image("lowerqn13want", "SLICES/lowerqn13want.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
  localStorage.setItem("click", 0);
    //create sprite
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let wantplaceholder = this.add.sprite(1921 / 2, 500, "wantplaceholder");
    let correctans = this.add.sprite(1250, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(850, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    wantplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });
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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC14"));

    //--------------------------QN 13 NEED BUTTON WRONG------------------------------
    let spriteneed13 = this.add
      .sprite(750, 550, "lowerqn13need")
      .setInteractive();
    spriteneed13.setScale(0.65, 0.65);
    spriteneed13.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed13.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed13.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});

    //--------------------------QN 13 WANT BUTTON CORRECT------------------------------
    let spritewant13 = this.add
      .sprite(1150, 550, "lowerqn13want")
      .setInteractive();
    spritewant13.setScale(0.65, 0.65);
    spritewant13.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant13.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant13.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 14-----------------------------
class SceneC14 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC14" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");

    this.load.image("nextbtn", "SLICES/btn_next.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("wantplaceholder", "SLICES/placeholder_want.png");
    this.load.image("lowerqn14need", "SLICES/GAME 1/qn14a.png");
    this.load.image("lowerqn14want", "SLICES/GAME 1/qn14.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let wantplaceholder = this.add.sprite(1921 / 2, 500, "wantplaceholder");
    let correctans = this.add.sprite(1250, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(850, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    wantplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC15"));

    //--------------------------QN 14 NEED BUTTON WRONG------------------------------
    let spriteneed14 = this.add
      .sprite(750, 550, "lowerqn14need")
      .setInteractive();
    spriteneed14.setScale(0.65, 0.65);
    spriteneed14.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed14.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed14.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});
    //--------------------------QN 14 WANT BUTTON CORRECT------------------------------
    let spritewant14 = this.add
      .sprite(1150, 550, "lowerqn14want")
      .setInteractive();
    spritewant14.setScale(0.65, 0.65);
    spritewant14.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant14.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant14.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 15-----------------------------
class SceneC15 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC15" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");

    this.load.image("nextbtn", "SLICES/btn_next.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("needplaceholder", "SLICES/placeholder_need.png");
    this.load.image("lowerqn15need", "SLICES/lowerqn15need-new.png");
    this.load.image("lowerqn15want", "SLICES/lowerqn15want.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let needplaceholder = this.add.sprite(1921 / 2, 500, "needplaceholder");
    let correctans = this.add.sprite(850, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(1250, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    needplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC16"));

    //--------------------------QN 15 NEED BUTTON CORRECT------------------------------
    let spriteneed15 = this.add
      .sprite(750, 550, "lowerqn15need")
      .setInteractive();
    spriteneed15.setScale(0.65, 0.65);
    spriteneed15.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed15.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed15.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});
    //--------------------------QN 15 WANT BUTTON WRONG------------------------------
    let spritewant15 = this.add
      .sprite(1150, 550, "lowerqn15want")
      .setInteractive();
    spritewant15.setScale(0.65, 0.65);
    spritewant15.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant15.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant15.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 16-----------------------------
class SceneC16 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC16" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");

    this.load.image("nextbtn", "SLICES/btn_next.png");

    this.load.image("wantplaceholder", "SLICES/placeholder_want.png");
    this.load.image("lowerqn16need", "SLICES/GAME 1/qn16.png");
    this.load.image("lowerqn16want", "SLICES/GAME 1/qn16a.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let wantplaceholder = this.add.sprite(1921 / 2, 500, "wantplaceholder");
    let correctans = this.add.sprite(1250, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(850, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    wantplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC17"));

    //--------------------------QN 16 NEED BUTTON WRONG------------------------------
    let spriteneed16 = this.add
      .sprite(750, 550, "lowerqn16need")
      .setInteractive();
    spriteneed16.setScale(0.65, 0.65);
    spriteneed16.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed16.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed16.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});

    //--------------------------QN 16 WANT BUTTON CORRECT------------------------------
    let spritewant16 = this.add
      .sprite(1150, 550, "lowerqn16want")
      .setInteractive();
    spritewant16.setScale(0.65, 0.65);
    spritewant16.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant16.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant16.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});
  }
}

//-----------LOWER GAME QUESTION 17-----------------------------
class SceneC17 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC17" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("nextbtn", "SLICES/btn_next.png");

    this.load.image("wantplaceholder", "SLICES/placeholder_want.png");
    this.load.image("lowerqn17need", "SLICES/lowerqn17need.png");
    this.load.image("lowerqn17want", "SLICES/lowerqn17want.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let wantplaceholder = this.add.sprite(1921 / 2, 500, "wantplaceholder");
    let correctans = this.add.sprite(1250, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(850, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    wantplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC18"));

    //--------------------------QN 17 NEED BUTTON WRONG------------------------------
    let spriteneed17 = this.add
      .sprite(750, 550, "lowerqn17need")
      .setInteractive();
    spriteneed17.setScale(0.65, 0.65);
    spriteneed17.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed17.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed17.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});

    //--------------------------QN 17 WANT BUTTON CORRECT------------------------------
    let spritewant17 = this.add
      .sprite(1150, 550, "lowerqn17want")
      .setInteractive();
    spritewant17.setScale(0.65, 0.65);
    spritewant17.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant17.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant17.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 18-----------------------------
class SceneC18 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC18" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("nextbtn", "SLICES/btn_next.png");

    this.load.image("needplaceholder", "SLICES/placeholder_need.png");
    this.load.image("lowerqn18need", "SLICES/lowerqn18need.png");
    this.load.image("lowerqn18want", "SLICES/lowerqn18want.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let needplaceholder = this.add.sprite(1921 / 2, 500, "needplaceholder");
    let correctans = this.add.sprite(850, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(1250, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    needplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC19"));

    //--------------------------QN 18 NEED BUTTON CORRECT------------------------------
    let spriteneed18 = this.add
      .sprite(750, 530, "lowerqn18need")
      .setInteractive();
    spriteneed18.setScale(0.6, 0.6);
    spriteneed18.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed18.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed18.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});

    //--------------------------QN 18 WANT BUTTON------------------------------
    let spritewant18 = this.add
      .sprite(1150, 540, "lowerqn18want")
      .setInteractive();
    spritewant18.setScale(0.6, 0.6);
    spritewant18.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant18.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant18.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 19-----------------------------
class SceneC19 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC19" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("nextbtn", "SLICES/btn_next.png");

    this.load.image("needplaceholder", "SLICES/placeholder_need.png");
    this.load.image("lowerqn19need", "SLICES/lowerqn19need.png");
    this.load.image("lowerqn19want", "SLICES/lowerqn19want.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }
  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let needplaceholder = this.add.sprite(1921 / 2, 500, "needplaceholder");
    let correctans = this.add.sprite(850, 620, "correctans").setScale(0.6, 0.6).setDepth(1);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(1250, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    needplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC20"));

    //--------------------------QN 19 NEED BUTTON CORRECT------------------------------
    let spriteneed19 = this.add
      .sprite(750, 550, "lowerqn19need")
      .setInteractive();
    spriteneed19.setScale(0.65, 0.65);
    spriteneed19.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed19.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed19.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});

    //--------------------------QN 19 WANT BUTTON WRONG------------------------------
    let spritewant19 = this.add
      .sprite(1150, 550, "lowerqn19want")
      .setInteractive();
    spritewant19.setScale(0.65, 0.65);
    spritewant19.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant19.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant19.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});
  }
}
//-----------LOWER GAME QUESTION 20-----------------------------
class SceneC20 extends Phaser.Scene {
  constructor() {
    super({ key: "sceneC20" });
  }
  preload() {
    this.load.image("qnbackground", "SLICES/2background.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("timeholder", "SLICES/btn_holder_timer.png");

    this.load.image("nextbtn", "SLICES/btn_next.png");
    this.load.image("backbtn", "SLICES/new_bttn-previous.png");
    this.load.image("wantplaceholder", "SLICES/placeholder_want.png");
    this.load.image("lowerqn20need", "SLICES/lowerqn20need.png");
    this.load.image("lowerqn20want", "SLICES/lowerqn20want.png");
    this.load.image("correctans", "SLICES/correct.png");
    this.load.image("wrongans", "SLICES/wrong.png");
  }

  create() {
    //create sprite
    localStorage.setItem("click", 0);
    let bg = this.add.sprite(0, 0, "qnbackground");
    let top = this.add.sprite(1921 / 2, 30, "top");
    let nameholder = this.add.sprite(200, 180, "nameholder");
    // let timeholder = this.add.sprite(1725, 400, "timeholder");
    //let coinholder = this.add.sprite(1700, 180, "coinholder");

    let wantplaceholder = this.add.sprite(1921 / 2, 500, "wantplaceholder");
    let correctans = this.add.sprite(1250, 620, "correctans").setDepth(1).setScale(0.6, 0.6);
    correctans.setVisible(false);
    let wrongans = this.add.sprite(850, 620, "wrongans").setScale(0.6, 0.6).setDepth(1);
    wrongans.setVisible(false);

    //place sprite in the center
    bg.setPosition(1921 / 2, 850 / 2);
    wantplaceholder.setScale(0.8, 0.8);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    console.log(gameW, gameH);
    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(100, 160, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 165, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });

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
        window.location.href = "game1lower.html";
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
    spritenextbtn.on("pointerdown", () => this.scene.start("sceneC2"));

    //--------------------------QN 20 NEED BUTTON WRONG------------------------------
    let spriteneed20 = this.add
      .sprite(750, 550, "lowerqn20need")
      .setInteractive();
    spriteneed20.setScale(0.65, 0.65);
    spriteneed20.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spriteneed20.on("pointerout", function (event) {
      this.clearTint();
    });
    spriteneed20.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      wrongans.setVisible(true);
      correctans.setVisible(true);
      var newcoin = Number(localStorage.getItem(i)) - 0.5;
      localStorage.setItem(i, newcoin);
      var w = 2;
      var wrongqn = Number(localStorage.getItem(w)) + 1;
      localStorage.setItem(w, wrongqn);
      localStorage.setItem("click", 1);
    }else{
    wrongans.setVisible(true);
      correctans.setVisible(true);
    }});

    //--------------------------QN 20 WANT BUTTON CORRECT------------------------------
    let spritewant20 = this.add
      .sprite(1150, 550, "lowerqn20want")
      .setInteractive();
    spritewant20.setScale(0.65, 0.65);
    spritewant20.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    spritewant20.on("pointerout", function (event) {
      this.clearTint();
    });
    spritewant20.on("pointerdown", function () {
    if (localStorage.getItem("click") == 0) {
      localStorage.setItem("click", 1);
      correctans.setVisible(true);
      var i = 0;
      var newcoin = Number(localStorage.getItem(i)) + 1;
      localStorage.setItem(i, newcoin);
      var c = 1;
      var correctqn = Number(localStorage.getItem(c)) + 1;
      localStorage.setItem(c, correctqn);
    }else {
        correctans.setVisible(true);
    }});
  }
}

var config = {
  type: Phaser.AUTO, //Phaser will decide to use webgl if available or canvas
  width: 1920,
  height: 950,
  scene: [
    SceneA,
    SceneB,
    SceneC1,
    SceneC2,
    SceneC3,
    SceneC4,
    SceneC5,

    SceneC7,
    SceneC8,
    SceneC9,
    SceneC10,
    SceneC11,
    SceneC12,
    SceneC13,
    SceneC14,
    SceneC15,
    SceneC16,
    SceneC17,
    SceneC18,
    SceneC19,
    SceneC20,
  ],
  pixelArt: false,
  parent: "canvas",
};

var game = new Phaser.Game(config);
