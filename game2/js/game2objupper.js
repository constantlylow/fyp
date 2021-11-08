function ques() {
  location.replace("./game2upper.html");
}

class objective extends Phaser.Scene {
  constructor() {
    super({ key: "objective" });
  }

  preload() {
    this.load.image("header1", "game2/image/header.png");
    this.load.image("background1", "game2/image/ql.png");
    this.load.image("name1", "game2/image/btn_holder_name.png");
    this.load.image("money1", "game2/image/btn_holder_coin.png");
    this.load.image("start1", "game2/image/new_bttn-start.png");
    this.load.image("cancel1", "game2/image/btn_close.png");
    this.load.audio("backgroundmusic", "game2/audio/game2.mp3");
    //this.load.spritesheet('squ1','game2/image/Sprite_Thinking_Animation.png', {frameWidth: 640, frameHeight: 480});
  }

  create() {
    // create a bg sprite
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
    let bg1 = this.add.sprite(0, 0, "background1");
    let hd1 = this.add.sprite(0, 0, "header1");
    let money1 = this.add.sprite(1630, 100, "money1");
    let name1 = this.add.sprite(50, 100, "name1");

    //change the origin to the top-left corner
    bg1.setPosition(1920 / 2, 900 / 2);
    bg1.setScale(1, 1);

    hd1.setOrigin(0, 0);
    money1.setOrigin(0, 0);
    name1.setOrigin(0, 0);

    //place sprite in the center
    // let gameW = this.sys.game.config.width;
    // let gameH = this.sys.game.config.height;
    // bg.setPosition(gameW, gameH);

    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(130, 120, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1720, 120, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    let sprites1 = this.add.sprite(1800, 800, "start1").setInteractive();
    sprites1.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    sprites1.on("pointerout", function (event) {
      this.clearTint();
    });
    sprites1.on("pointerdown", () => ques());

    let spritecb1 = this.add.sprite(1820, 35, "cancel1").setInteractive();
    spritecb1.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spritecb1.on("pointerout", function (event) {
      this.clearTint();
    });
    spritecb1.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "end.html";
      }
    });
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
    // let squ1 = this.add.sprite(310, 540, 'squ1', 0);
    // squ1.setScale(1.3, 1.3);
    // this.anims.create({
    //     key:'walk',
    //     repeat: -1,
    //     frameRate: 45,
    //     frames: this.anims.generateFrameNames('squ1', {start: 1, end: 69})
    // });
    // squ1.play('walk');
  }
}

class summary extends Phaser.Scene {
  constructor() {
    super({ key: "summary" });
  }

  preload() {
    this.load.image("header2", "game2/image/header.png");
    this.load.image("background_s", "game2/image/quizzles_learninchkpt.jpeg");
    this.load.image("name2", "game2/image/btn_holder_name.png");
    this.load.image("money2", "game2/image/btn_holder_coin.png");
    this.load.image("rbtn2", "game2/image/new_bttn-next.png");
    this.load.image("cancel2", "game2/image/btn_close.png");
    //this.load.image('white', 'game2/image/placeholder_checkpoint.png');
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");
    this.load.audio("backgroundmusic", "game2/audio/game2.mp3");
  }

  create() {

    // create a bg sprite
    let bg_s = this.add.sprite(0, 0, "background_s");
    let hd2 = this.add.sprite(0, 0, "header2");
    let money2 = this.add.sprite(1630, 100, "money2");
    let name2 = this.add.sprite(50, 100, "name2");
    //let white = this.add.sprite(330,330, 'white');

    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(130, 120, playername, {
      font: "32px Arial",
      fill: "white",
    });
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1720, 120, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });

    //change the origin to the top-left corner
    bg_s.setPosition(1920 / 2, 900 / 2);
    bg_s.setScale(1, 1);

    hd2.setOrigin(0, 0);
    money2.setOrigin(0, 0);
    name2.setOrigin(0, 0);
    //white.setOrigin(0,0);

    //place sprite in the center
    // let gameW = this.sys.game.config.width;
    // let gameH = this.sys.game.config.height;
    // bg.setPosition(gameW, gameH);

    // const text1 = this.add.text(400, 370, 'Spend Wisely' ,{ fontFamily: 'Roboto', fill: 'black', });
    // const text2 = this.add.text(400, 480, '1. Description of Spend Wisely',{ fontFamily: 'Roboto', fill: 'black', });
    // const text3 = this.add.text(400, 560, '2. Importance to achieve Spend Wisely',{ fontFamily: 'Roboto', fill: 'black', });
    // const text4 = this.add.text(400, 640, '3. Ways to achieve Spend Wisely ',{ fontFamily: 'Roboto', fill: 'black', });
    // const text5 = this.add.text(400, 720, '4. Learn to apply to our lives',{ fontFamily: 'Roboto', fill: 'black', });

    // text1.setTint(0x000000);
    // text1.setFontSize(50);
    // text2.setTint(0x000000);
    // text2.setFontSize(30);
    // text3.setTint(0x000000);
    // text3.setFontSize(30);
    // text4.setTint(0x000000);
    // text4.setFontSize(30);
    // text5.setTint(0x000000);
    // text5.setFontSize(30);

    let spriterb2 = this.add.sprite(1840, 760, "rbtn2").setInteractive();
    spriterb2.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb2.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb2.on("pointerdown", () => this.scene.start("objective"));

    let spritecb2 = this.add.sprite(1820, 35, "cancel2").setInteractive();
    spritecb2.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spritecb2.on("pointerout", function (event) {
      this.clearTint();
    });
    spritecb2.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "end.html";
      }
    });
  }
}

let config = {
  type: Phaser.Auto,
  height: 930,
  width: 1921,
  scene: [summary, objective],
  parent: "canvas",
};

let game = new Phaser.Game(config);
