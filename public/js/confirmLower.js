let gameScene = new Phaser.Scene("Game");

// display of outfit on smiley
const priceBgs = [
  "SLICES/Slice_bonusround/T1.jpeg",
  "SLICES/Slice_bonusround/T2.jpeg",
  "SLICES/Slice_bonusround/T3.jpeg",
  "SLICES/Slice_bonusround/T4.jpeg",
  "SLICES/Slice_bonusround/T6.jpeg",
  "SLICES/Slice_bonusround/T7.jpeg",
  "SLICES/Slice_bonusround/T8.jpeg",
  "SLICES/Slice_bonusround/T9.jpeg",
  "SLICES/Slice_bonusround/T10.jpeg",
  "SLICES/Slice_bonusround/T11.jpeg",
  "SLICES/Slice_bonusround/P1.jpeg",
  "SLICES/Slice_bonusround/P2.jpeg",
  "SLICES/Slice_bonusround/P3.jpeg",
  "SLICES/Slice_bonusround/P4.jpeg",
  "SLICES/Slice_bonusround/P5.jpeg",
  "SLICES/Slice_bonusround/P6.jpeg",
  "SLICES/Slice_bonusround/P7.jpeg",
  "SLICES/Slice_bonusround/P8.jpeg",
  "SLICES/Slice_bonusround/H2.jpeg",
  "SLICES/Slice_bonusround/H3.jpeg",
  "SLICES/Slice_bonusround/H4.jpeg",
  "SLICES/Slice_bonusround/H5.jpeg",
  "SLICES/Slice_bonusround/H6.jpeg",
  "SLICES/Slice_bonusround/H7.jpeg",
  "SLICES/Slice_bonusround/H8.jpeg",
  "SLICES/Slice_bonusround/O1.jpeg",
  "SLICES/Slice_bonusround/O2.jpeg",
  "SLICES/Slice_bonusround/O3.jpeg",
  "SLICES/Slice_bonusround/O4.jpeg",
  "SLICES/Slice_bonusround/O7.jpeg",
  "SLICES/Slice_bonusround/O8.jpeg",
  "SLICES/Slice_bonusround/O9.jpeg",
  "SLICES/Slice_bonusround/T12.png",
  "SLICES/Slice_bonusround/S14.png",
    "SLICES/Slice_bonusround/S1.jpeg",
    "SLICES/Slice_bonusround/T13.png",
    "SLICES/Slice_bonusround/P9.png",
    "SLICES/Slice_bonusround/O10.png",
    "SLICES/Slice_bonusround/P10.png",
    "SLICES/Slice_bonusround/T14.png",
];

const topsImages = [
  {
    costUrl: "T1",
    cost: 1.0,
    src: "SLICES/upperpri/1top.png",
    x: 90,
    y: 50,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "T2",
    cost: 1.0,
    src: "SLICES/upperpri/2top.png",
    x: 90,
    y: 40,
    scaleX: 0.52,
    scaleY: 0.52,
  },
  {
    costUrl: "T3",
    cost: 1.0,
    src: "SLICES/upperpri/3top.png",
    x: 90,
    y: 36,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "T4",
    cost: 1.0,
    src: "SLICES/upperpri/5top.png",
    x: 90,
    y: 45,
    scaleX: 0.55,
    scaleY: 0.55,
  },
  {
    costUrl: "T6",
    cost: 1.0,
    src: "SLICES/lowerpri/1top.png",
    x: 93,
    y: 46,
    scaleX: 0.55,
    scaleY: 0.55,
  },
  {
    costUrl: "T7",
    cost: 1.0,
    src: "SLICES/lowerpri/7top.png",
    x: 90,
    y: 40,
    scaleX: 0.55,
    scaleY: 0.55,
  },
  {
    costUrl: "T8",
    cost: 1.0,
    src: "SLICES/lowerpri/3top.png",
    x: 90,
    y: 55,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "T9",
    cost: 1.0,
    src: "SLICES/lowerpri/8top.png",
    x: 93,
    y: 40,
    scaleX: 0.55,
    scaleY: 0.55,
  },
  {
    costUrl: "T10",
    cost: 1.0,
    src: "SLICES/lowerpri/9top.png",
    x: 90,
    y: 40,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "T11",
    cost: 1.0,
    src: "SLICES/lowerpri/10top.png",
    x: 90,
    y: 39,
    scaleX: 0.5,
    scaleY: 0.5,
  },
    {
    costUrl: "T12",
    cost: 1.0,
    src: "SLICES/lowerpri/11top.png",
    x: 90,
    y: 39,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "T13",
    cost: 1.0,
    src: "SLICES/lowerpri/12top.png",
    x: 90,
    y: 47,
    scaleX: 0.5,
    scaleY: 0.5,
  },
    {
    costUrl: "T14",
    cost: 1.0,
    src: "SLICES/lowerpri/13top.png",
    x: 90,
    y: 45,
    scaleX: 0.5,
    scaleY: 0.5,
  },
];

const pantsImages = [
  {
    costUrl: "P1",
    cost: 1.0,
    src: "SLICES/lowerpri/7pants.png",
    x: 77,
    y: 112,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "P2",
    cost: 1.0,
    src: "SLICES/lowerpri/2pants.png",
    x: 83,
    y: 112,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "P3",
    cost: 1.0,
    src: "SLICES/lowerpri/3pants.png",
    x: 75,
    y: 119,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "P4",
    cost: 1.0,
    src: "SLICES/lowerpri/4pants.png",
    x: 70,
    y: 120,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "P5",
    cost: 1.0,
    src: "SLICES/lowerpri/5pants.png",
    x: 77,
    y: 113,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "P6",
    cost: 1.0,
    src: "SLICES/lowerpri/6pants.png",
    x: 77,
    y: 112,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "P7",
    cost: 1.0,
    src: "SLICES/lowerpri/8pants.png",
    x: 77,
    y: 113,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "P8",
    cost: 1.0,
    src: "SLICES/lowerpri/9pants.png",
    x: 77,
    y: 112,
    scaleX: 0.5,
    scaleY: 0.5,
  },
    {
    costUrl: "P9",
    cost: 1.0,
    src: "SLICES/lowerpri/10pants.png",
    x: 85,
    y: 95,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "P10",
    cost: 1.0,
    src: "SLICES/lowerpri/11pants.png",
    x: 85,
    y: 108,
    scaleX: 0.5,
    scaleY: 0.5,
  },
];

const othersImages = [
  {
    costUrl: "O1",
    cost: 1.0,
    src: "SLICES/upperpri/2accesories-b.png",
    x: 220,
    y: 70,
    scaleX: 0.6,
    scaleY: 0.6,
  },
  {
    costUrl: "O2",
    cost: 1.0,
    src: "SLICES/upperpri/3accessories.png",
    x: 220,
    y: 50,
    scaleX: 0.7,
    scaleY: 0.7,
  },
  {
    costUrl: "O3",
    cost: 1.0,
    src: "SLICES/upperpri/4accesories-b.png",
    x: 220,
    y: 80,
    scaleX: 0.8,
    scaleY: 0.8,
  },
  {
    costUrl: "O4",
    cost: 1.0,
    src: "SLICES/lowerpri/4accessories_b.png",
    x: 220,
    y: 0,
    scaleX: 0.6,
    scaleY: 0.6,
  },
  {
    costUrl: "O7",
    cost: 1.0,
    src: "SLICES/lowerpri/5a.png",
    x: 220,
    y: -20,
    scaleX: 0.51,
    scaleY: 0.51,
  },
  {
    costUrl: "O9",
    cost: 1.0,
    src: "SLICES/lowerpri/6A.png",
    x: 70,
    y: -70,
    scaleX: 0.51,
    scaleY: 0.51,
  },
    {
    costUrl: "O10",
    cost: 1.0,
    src: "SLICES/lowerpri/7a.png",
    x: 200,
    y: 20,
    scaleX: 0.51,
    scaleY: 0.51,
  },
];

const hatsImages = [
    {
    costUrl: "H2",
    cost: 1.0,
    src: "SLICES/upperpri/4accesories-a.png",
    x: 80,
    y: -80,
    scaleX: 0.65,
    scaleY: 0.65,
  },
  {
    costUrl: "H3",
    cost: 1.0,
    src: "SLICES/upperpri/5accessories.png",
    x: 85,
    y: -70,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "H4",
    cost: 1.0,
    src: "SLICES/lowerpri/2h.png",
    x: 85,
    y: -120,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "H5",
    cost: 1.0,
    src: "SLICES/lowerpri/3h.png",
    x: 90,
    y: -120,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "H6",
    cost: 1.0,
    src: "SLICES/lowerpri/4h.png",
    x: 85,
    y: -180,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "H7",
    cost: 1.0,
    src: "SLICES/lowerpri/5h.png",
    x: 85,
    y: -170,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "H8",
    cost: 1.0,
    src: "SLICES/lowerpri/6H.png",
    x: 100,
    y: -120,
    scaleX: 0.5,
    scaleY: 0.5,
  },
    {
    costUrl: "O8",
    cost: 1.0,
    src: "SLICES/lowerpri/2a.png",
    x: 90,
    y: -60,
    scaleX: 0.51,
    scaleY: 0.51,
  },
];
const shoesImages = [
 {
    costUrl: "S14",
    cost: 1.0,
    src: "SLICES/lowerpri/1s.png",
    x: 75,
    y: 140,
    scaleX: 0.5,
    scaleY: 0.5,
  },
   {
    costUrl: "S1",
    cost: 1.0,
    src: "SLICES/upperpri/1s.png",
    x: 75,
    y: 140,
    scaleX: 0.5,
    scaleY: 0.5,
  },
];

//-----------SUMMARY PAGE-----------------------------
class SceneA extends Phaser.Scene {
  constructor() {
    super({ key: "sceneA" });
  }
  preload() {
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
    for (let i = 0; i < hatsImages.length; i++) {
      this.load.image("hatsImage" + i, hatsImages[i].src);
    }
    for (let i = 0; i < pantsImages.length; i++) {
      this.load.image("pantsImage" + i, pantsImages[i].src);
    }
    for (let i = 0; i < topsImages.length; i++) {
      this.load.image("topImage" + i, topsImages[i].src);
    }
    for (let i = 0; i < othersImages.length; i++) {
      this.load.image("othersImage" + i, othersImages[i].src);
    }
    for (let i = 0; i < priceBgs.length; i++) {
      this.load.image(priceBgs[i].split("/")[2].split(".")[0], priceBgs[i]);
    }

    this.load.image("dressupbackground", "SLICES/white.jpg");

    this.load.image("placeholder", "SLICES/SLICEsmileydressup/alert_box.png");
    this.load.image("top", "game2/image/header.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("template", "SLICES/dressup_label.png");
    this.load.image("startbtn", "SLICES/new_bttn-exit.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("hatsButton", "SLICES/new_bttn-xtra.png");
    this.load.image("othersButton", "SLICES/btn_others.png");
    this.load.image("topButton", "SLICES/new_bttn-tops.png");
    this.load.image("pantsButton", "SLICES/new_bttn-bottoms.png");
    this.load.image("printbtn", "SLICES/new_print.png");
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");
    this.load.image("return", "SLICES/bttn_no.png");
    this.load.image("confirm", "SLICES/bttn_yes.png")
    this.load.audio("backgroundmusic", "SLICES/New music.mp3");
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
    let bg = this.add.sprite(1920 / 2, 430, "dressupbackground");
    let top = this.add.sprite(1920 / 2, 30, "top").setDepth(11);

        const text165 = this.add.text(
    1700,
      900,
"Powered by SQKII",
      { fontFamily: "Roboto", fill: "black" , fontSize: "24px"}
    ).setDepth(11);

    let box = this.add
      .sprite(310, 500, "template")
      .setScale(0.5, 0.5)
      .setDepth(9);
    box.visible = false;
    let nameholder = this.add.sprite(250, 170, "nameholder");
    let placeholder = this.add
      .sprite(1000, 500, "placeholder")
      .setScale(1, 1);
    let player = this.add
      .sprite(0, 0, "player")
      .setScale(0.5, 0.5)
      .setDataEnabled();
    let reject = this.add
    .sprite(1130,600, "return")
    .setInteractive()
    .setScale(1,1);


    //--------------------------CONFIRM PRINT BUTTON------------------------------
    let confirmprint = this.add
    .sprite(870,600, "confirm")
    .setInteractive()
    .setScale(1,1)
    .setDepth(10);
    confirmprint.on("pointerover", function (event) {
      this.setTint(0xffe4b5);
    });

    confirmprint.on("pointerout", function (event) {
      this.clearTint();
    });

    confirmprint.on("pointerdown", function () {
      window.location.href = "snapshot.html";
        });

    reject.on("pointerdown", function () {
          var addback = Number(localStorage.getItem("topmoney") + localStorage.getItem("pantsmoney") +localStorage.getItem("othermoney") + localStorage.getItem("shoesmoney") + localStorage.getItem("hatmoney"));
          var ogmoney = Number(localStorage.getItem("cc"));
          localStorage.setItem("0", ogmoney + addback);
          window.location.href = "smileydressup.html";
        });


    let playerContainer = this.add.container(230, 510).setDepth(10);
    let i = 0;
    let playername = sessionStorage.getItem(i);
    let spritename = this.add.text(150, 150, playername, {
      font: "30px Arial",
      fill: "white",
    });
//    let coinholder = this.add.sprite(1700, 170, "coinholder");
//    let playercoin = Number(localStorage.getItem(i));
//    let spritecoin = this.add.text(1680, 155, "$" + playercoin.toFixed(2), {
//      font: "32px Arial",
//      fill: "white",
//    });
    //let printButton = this.add
    //.text(400, 25, "Print mascot", {
    //font: "19px Arial",
    //fill: "white",
    //})
    //.setInteractive()
    //.setDepth(12);


    let filter = "";
    let printState = 1;

    player.data.set("name", "player");
    playerContainer.add([player]);








    //--------------------------CROSS BUTTON------------------------------
    let spritecross = this.add
      .sprite(1830, 30, "cross")
      .setInteractive()
      .setDepth(12);
    spritecross.on("pointerover", function (event) {
      this.setTint(0xf0f8ff);
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



    //--------------------------MUTE BUTTON------------------------------
    let spriteunmute = this.add
      .sprite(1760, 35, "unmutebtn")
      .setInteractive()
      .setScale(0.4, 0.4)
      .setDepth(12);

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

    AddButtonTint([spritecross, spriteunmute]);
  }
}




var AddButtonTint = function (buttons) {
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.setInteractive();
    button.on("pointerover", function (event) {
      this.setTint(0xf0f8ff);
    });

    button.on("pointerout", function (event) {
      this.clearTint();
    });
  }
};

/*tab filter */
var GetImagesForFilter = function (filter) {
  let items = [];
  switch (filter) {
    case "Top":
      items = topsImages;
      break;
    case "Pants":
      items = pantsImages;
      break;
    case "Hats":
      items = hatsImages;
      break;
    case "Others":
      items = othersImages;
      break;
  }
  return items;
};

var GetCostFromUrl = function (costUrl) {
  switch (costUrl) {
    case "T1":
      return 15.0;
    case "U1":
      return 8.2;
    case "T3":
      return 12.0;
    case "T4":
      return 15.0;
    case "U2":
      return 9.0;
    case "U3":
      return 10.0;
    case "U4":
      return 6.5;
    case "A1":
      return 2.0;
    case "A2":
      return 2.5;
    case "A3":
      return 2.3;
    case "A4":
      return 2.7;
    case "A5":
      return 2.5;
    case "A6":
      return 2.3;
    case "A7":
      return 2.1;
    case "S1":
      return 1.0;
    case "S2":
      return 2.6;
    case "S3":
      return 2.4;
    case "S4":
      return 2.9;
    case "S8":
      return 1.0;
    case "S9":
      return 1.0;
    case "S11":
      return 1.0;
    case "Z1":
      return 20.0;
    case "Z2":
      return 15.0;
    case "Z3":
      return 10.0;
    case "Z4":
      return 20.0;
    case "Z5":
      return 20.0;
    case "Z6":
      return 20.0;
    case "Z7":
      return 10.0;
    case "O8":
      return 2.0;
    case "none":
        return 0;
    default:
      return 1.0;
  }
};

var config = {
  type: Phaser.AUTO, //Phaser will decide to use webgl if available or canvas
  width: 1920,
  height: 950,
  scene: [SceneA],
  pixelArt: false,
  parent: "canvas",
};

var game = new Phaser.Game(config);
