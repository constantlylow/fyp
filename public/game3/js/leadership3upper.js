function next() {
  location.replace("./bonusroundUpper.html");
}

class leadership extends Phaser.Scene {
  constructor() {
    super({ key: "leadership" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background3", "SLICES/Games3_completepg.jpg");
    this.load.image("cancel", "game2/image/btn_close.png");
    //this.load.image('homebtn','SLICES/btn_home.png');
    this.load.image("rbtn", "game2/image/new_bttn-next.png");

    //this.load.spritesheet("squ1", "game3/image/book_animation.png", {
    //frameWidth: 640,
    //frameHeight: 480,
    //});
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
    let hd = this.add.sprite(1921 / 2, 40, "header");
    localStorage.setItem("wc", localStorage.getItem(0));

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

    //let squ3 = this.add.sprite(400, 510, "squ1", 0);
    //squ3.setScale(1.2, 1.2);
    //this.anims.create({
    //key: "book",
    //repeat: -1,
    //frameRate: 45,
    //frames: this.anims.generateFrameNames("squ1", { start: 1, end: 74 }),
    //});
    //squ3.play("book");

//    var time = localStorage.getItem("time");
//    time = time.replaceAll("sec", "");
//    var number = Number(time);
//    var sec = "sec";
    var i = 0;
    var playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1050, 418, playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "black",});
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
