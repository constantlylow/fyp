function instr() {
  location.replace("./game3objupper.html");
}

class question extends Phaser.Scene {
  constructor() {
    super({ key: "question" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game3/image/background_sustain.png");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("lbtn", "game2/image/btn_back.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    // this.load.image('pause', 'game2/image/btn_pause.png');
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("homebtn", "SLICES/new_bttn-previous.png");
    //this.load.image('whiteboard', 'game3/image/placeholder_checkpoint.jpg');
    this.load.audio("backgroundmusic", "game3/audio/game3.mp3");
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

    // create a bg sprite
    let bg_e = this.add.sprite(0, 0, "background_ampty");
    let hd = this.add.sprite(0, 0, "header");
    let money = this.add.sprite(1630, 100, "money");
    let name = this.add.sprite(50, 100, "name");
    var playercoin = Number(localStorage.getItem(0));
    let spritecoin = this.add.text(1720, 120, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });
    //let whiteboard = this.add.sprite(354,232, 'whiteboard');

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 860 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    //whiteboard.setOrigin(0,0);
    //whiteboard.setScale(0.62,0.54);

    var i = 0;
    var playername = sessionStorage.getItem(i);
    let spritename = this.add.text(130, 120, playername, {
      font: "32px Arial",
      fill: "white",
    });
    // var playercoin = Number(localStorage.getItem(i));
    // let spritecoin = this.add.text(1720, 160, "$"+playercoin.toFixed(2), { font: '32px Arial', fill: 'white', });

    //--------------------------HOME BUTTON------------------------------
    let spritehomebtn = this.add.sprite(100, 800, "homebtn").setInteractive();
    spritehomebtn.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });

    spritehomebtn.on("pointerout", function (event) {
      this.clearTint();
    });

    spritehomebtn.on("pointerdown", function (event) {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game3objupper.html";
      }
    });

    // let spritelb = this.add.sprite(80, 760, 'lbtn').setInteractive();
    // spritelb.on('pointerover', function (event) {
    //     this.setTint(0xffae42);
    // });
    // spritelb.on('pointerout', function (event) {
    //     this.clearTint();
    // });
    // spritelb.on('pointerdown', () => instr());

    // let spriterb = this.add.sprite(1840, 760, 'rbtn').setInteractive();
    // spriterb.on('pointerover', function (event) {
    //     this.setTint(0xffae42);
    // });
    // spriterb.on('pointerout', function (event) {
    //     this.clearTint();
    // });
    // spriterb.on('pointerdown', () => next());

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
    // let spritert = this.add.sprite(80, 180, 'pause').setInteractive();
    // spritert.on('pointerover', function (event) {
    //     this.setTint(0xffae42);
    // });
    // spritert.on('pointerout', function (event) {
    //     this.clearTint();
    // });
    // spritert.on('pointerdown', () => timing());
  }
}

let config = {
  type: Phaser.Auto,
  height: 930,
  width: 1920,
  scene: [question],
  parent: "canvas",
};

let game = new Phaser.Game(config);
