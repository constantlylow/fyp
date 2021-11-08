function next() {
  location.replace("./game3objlower.html");
}

class leadership extends Phaser.Scene {
  constructor() {
    super({ key: "leadership" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background3", "SLICES/game1background_yourscore.png");
    this.load.image("cancel", "game2/image/btn_close.png");

    this.load.image("rbtn", "game2/image/new_bttn-next.png");
    //this.load.image("dics2", "SLICES/dics2.png");

    //this.load.spritesheet(
    //"squ3",
    //"game2/image/Action_Sprite_Trophy_Animation.png",
    //{ frameWidth: 640, frameHeight: 480 }
    //);
    this.load.audio("backgroundmusic", "game2/audio/highscoremusic.mp3");
  }

  create() {
    this.sound.pauseOnBlur = false;
    this.sound.play("backgroundmusic", {
      volume: 0.5,
      autoplay: true,
      allowMultiple: false,
      detune: 100,
    });
    // create a bg sprite
    let bg3 = this.add.sprite(1921 / 2, 430, "background3");
    //let dics2 = this.add.sprite(480, 540, "dics2");
    let hd = this.add.sprite(1921 / 2, 40, "header");

    // let sprites = this.add.sprite(1070, 800, 'start').setInteractive();
    // sprites.on('pointerover', function (event) {
    //     this.setTint(0xffae42);
    // });
    // sprites.on('pointerout', function (event) {
    //     this.clearTint();
    // });
    // sprites.on('pointerdown', () => ques());

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

    let spriterb = this.add.sprite(1840, 760, "rbtn").setInteractive();
    spriterb.on("pointerover", function (event) {
      this.setTint(0xffae42);
    });
    spriterb.on("pointerout", function (event) {
      this.clearTint();
    });
    spriterb.on("pointerdown", () => next());

    //let squ3 = this.add.sprite(400, 520, "squ3", 0);
    //squ3.setScale(1, 1);
    // this.anims.create({
    //key: "tro",
    //repeat: -1,
    // frameRate: 45,
    //frames: this.anims.generateFrameNames("squ3", { start: 1, end: 70 }),
    //});
    //squ3.play("tro");

    var c = 1;
    var correctqn = Number(localStorage.getItem(c));
    var w = 2;
    var wrongqn = Number(localStorage.getItem(w));
    let spritecorrectans = this.add
      .text(1080, 370, correctqn + " question(s)", {
        font: "32px Arial",
        fill: "black",
      })
      .setDepth(1);
    let spritewrongans = this.add
      .text(1080, 530, wrongqn + " question(s)", {
        font: "32px Arial",
        fill: "black",
      })
      .setDepth(1);
    var i = 0;
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1130, 683, playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "black",
    });
    }
}

let config = {
  type: Phaser.Auto,
  width: 1920,
  height: 950,
  scene: [leadership],
  parent: "canvas",
};

let game = new Phaser.Game(config);

// let gameScene = new Phaser.Scene('Game');
//
// //-----------HIGHSCORE GAME PAGE-----------------------------
// class SceneA extends Phaser.Scene{
//   constructor ()
//     {
//         super({ key: 'sceneA' });
//     }
//
//     preload ()
//     {
//       this.load.image('leaderbackground','SLICES/placeholder_leaderboard.png');
//       this.load.image('top','SLICES/taskbar.png');
//       this.load.image('cross','SLICES/btn_close.png');
//       this.load.image('homebtn','SLICES/btn_home.png');
//       this.load.image('nextbtn','SLICES/btn_next.png');
//       this.load.image('dics2','SLICES/dics2.png');
//       this.load.image('leaders','SLICES/placeholder_leaderboard_names.png');
//       this.load.image('time','SLICES/placeholder_leaderboard_timer.png');
//       this.load.audio('highscoremusic', 'SLICES/highscoremusic.mp3');
//       this.load.spritesheet('playertrophy','SLICES/TrophyAnimation.png', {frameWidth: 6000/5, frameHeight: 14400/15});
//
//     }
//
//     create ()
//     {
//       this.sound.pauseOnBlur = false;
//       this.sound.play('highscoremusic', {
//         volume: 0.1,
//         loop: false,
//         autoplay: true,
//         allowMultiple: false,
//         detune: 100
//       });
//       //create sprite
//       let bg = this.add.sprite(1921/2, 430, 'leaderbackground');
//       // let player = this.add.sprite(600, 550, 'playertrophy');
//       let top = this.add.sprite(1921/2, 50, 'top');
//       let leaders = this.add.sprite(1100, 550, 'leaders').setDepth(1);
//       let dics2 = this.add.sprite(600, 580, 'dics2');
//       let time1 = this.add.sprite(1350, 365, 'time').setDepth(1);
//       let time2 = this.add.sprite(1350, 485, 'time').setDepth(1);
//       let time3 = this.add.sprite(1350, 605, 'time').setDepth(1);
//       let time4 = this.add.sprite(1350, 725, 'time').setDepth(1);
//
//
//       const playertrophy = this.add.sprite(500, 500, 'playertrophy');
//       this.anims.create({
//         key:'walk',
//         repeat: -1,
//         frameRate: 50,
//         frames: this.anims.generateFrameNames('playertrophy', {start: 1, end: 70})
//       });
//
//       playertrophy.play('walk');
//
//
//       //place sprite in the center
//       bg.setScale(1, 0.89);
//       playertrophy.setScale(0.6, 0.6);
//       leaders.setScale(0.9, 0.9);
//
//       let gameW = this.sys.game.config.width;
//       let gameH = this.sys.game.config.height;
//
//       console.log(gameW, gameH);
//       let spritecorrectans1 = this.add.text(1000, 350, "john", { font: '32px Arial', fill: 'white', }).setDepth(1);
//       let spritecorrectans2 = this.add.text(1000, 470, "Mary", { font: '32px Arial', fill: 'white', }).setDepth(1);
//       let spritecorrectans3 = this.add.text(1000, 590, "sinsian", { font: '32px Arial', fill: 'white', }).setDepth(1);
//       let spritecorrectans4 = this.add.text(1000, 710, "rouyi", { font: '32px Arial', fill: 'white', }).setDepth(1);
//
//       //--------------------------CROSS BUTTON------------------------------
//       let spritecross = this.add.sprite(1800, 50, 'cross').setInteractive();
//       spritecross.on('pointerover', function (event) {
//           this.setTint(0xffae00);
//       });
//
//       spritecross.on('pointerout', function (event) {
//           this.clearTint();
//       });
//
//       spritecross.on('pointerdown', function () {
//         window.open('https://www.google.com/', '_self');
//       });
//
//       //--------------------------HOME BUTTON------------------------------
//       let spritehomebtn = this.add.sprite(1700, 50, 'homebtn').setInteractive();
//       spritehomebtn.on('pointerover', function (event) {
//           this.setTint(0xffae00);
//       });
//
//       spritehomebtn.on('pointerout', function (event) {
//           this.clearTint();
//       });
//
//       spritehomebtn.on('pointerdown', function () {
//         window.location.href="index.html";
//       });
//
//       //--------------------------NEXT BUTTON------------------------------
//       let spritenextbtn = this.add.sprite(1800, 770, 'nextbtn').setInteractive();
//       spritenextbtn.on('pointerover', function (event) {
//           this.setTint(0xffae00);
//       });
//
//       spritenextbtn.on('pointerout', function (event) {
//           this.clearTint();
//       });
//
//       spritenextbtn.on('pointerdown', () =>{
//         window.location.href = "choosegame.html";
//       });
//     };
//
// }
//
// var config = {
//   type: Phaser.AUTO, //Phaser will decide to use webgl if available or canvas
//   width: 1900,
//   height: 950,
//   scene: [SceneA],
//   pixelArt: false, parent: "canvas",
//
// };
//
// var game = new Phaser.Game(config);
