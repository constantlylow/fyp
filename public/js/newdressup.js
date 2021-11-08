let gameScene = new Phaser.Scene("Game");

// display of outfit on smiley
const priceBgs = [
  "SLICES/Slice_bonusround/U1.png",
  "SLICES/Slice_bonusround/U2.png",
  "SLICES/Slice_bonusround/U3.png",
  "SLICES/Slice_bonusround/U4.png",
  "SLICES/Slice_bonusround/A1.jpeg",
  "SLICES/Slice_bonusround/A2.png",
  "SLICES/Slice_bonusround/A3.png",
  "SLICES/Slice_bonusround/A4.png",
  "SLICES/Slice_bonusround/A5.png",
  "SLICES/Slice_bonusround/A6.png",
  "SLICES/Slice_bonusround/A7.png",
  "SLICES/Slice_bonusround/S1.png",
  "SLICES/Slice_bonusround/S2.png",
  "SLICES/Slice_bonusround/S4.png",
  "SLICES/Slice_bonusround/S8.png",
  "SLICES/Slice_bonusround/S9.png",
  "SLICES/Slice_bonusround/S11.png",
  "SLICES/Slice_bonusround/Z1.jpeg",
  "SLICES/Slice_bonusround/Z2.jpeg",
  "SLICES/Slice_bonusround/Z11.png",
  "SLICES/Slice_bonusround/Z8.png",
  "SLICES/Slice_bonusround/A8.png",
  "SLICES/Slice_bonusround/H9.png",
  "SLICES/Slice_bonusround/U5.png",
  "SLICES/Slice_bonusround/U6.png",
  "SLICES/Slice_bonusround/U7.png",
  "SLICES/Slice_bonusround/A9.png",
  "SLICES/Slice_bonusround/Z9.png",
  "SLICES/Slice_bonusround/Z10.png",
  "SLICES/Slice_bonusround/U8.png",
  "SLICES/Slice_bonusround/A10.png",
  "SLICES/Slice_bonusround/U9.png",
  "SLICES/Slice_bonusround/S13.png",
  "SLICES/Slice_bonusround/U10.png",
  "SLICES/Slice_bonusround/A11.png",
  "SLICES/Slice_bonusround/U11.png",
  "SLICES/Slice_bonusround/A12.png",
  "SLICES/Slice_bonusround/U20.png",
  "SLICES/Slice_bonusround/U13.png",
  "SLICES/Slice_bonusround/O13.png",
  "SLICES/Slice_bonusround/Z12.png",
  "SLICES/Slice_bonusround/Z13.png",
  "SLICES/Slice_bonusround/O14.png",
  "SLICES/Slice_bonusround/O16.png",
  "SLICES/Slice_bonusround/O15.png",
  "SLICES/Slice_bonusround/O17.png",
  "SLICES/Slice_bonusround/Z16.png",
  "SLICES/Slice_bonusround/Z14.png",
  "SLICES/Slice_bonusround/Z15.png",
  "SLICES/Slice_bonusround/Z17.png",
  "SLICES/Slice_bonusround/S14.png",
  "SLICES/Slice_bonusround/S17.png",
  "SLICES/Slice_bonusround/S18.png",
  "SLICES/Slice_bonusround/S19.png",
];

const topsImages = [
  {
    costUrl: "U10",
    cost: 1.0,
    src: "SLICES/upperpri/sm1.png",
    x: 91,
    y: 40,
    scaleX: 0.54,
    scaleY: 0.54,
  },
  {
    costUrl: "U20",
    cost: 1.0,
    src: "SLICES/upperpri/smartshirt.png",
    x: 91,
    y: 38,
    scaleX: 0.51,
    scaleY: 0.51,
  },
    {
    costUrl: "U4",
    cost: 1.0,
    src: "SLICES/upperpri/7top.png",
    x: 90,
    y: 40,
    scaleX: 0.55,
    scaleY: 0.55,
  },
  {
    costUrl: "U1",
    cost: 1.0,
    src: "SLICES/upperpri/2top.png",
    x: 90,
    y: 40,
    scaleX: 0.55,
    scaleY: 0.55,
  },
  {
    costUrl: "U2",
    cost: 1.0,
    src: "SLICES/upperpri/4top.png",
    x: 90,
    y: 53,
    scaleX: 0.45,
    scaleY: 0.45,
  },
  {
    costUrl: "U3",
    cost: 1.0,
    src: "SLICES/upperpri/6top.png",
    x: 90,
    y: 53,
    scaleX: 0.45,
    scaleY: 0.45,
  },
  {
    costUrl: "U7",
    cost: 1.0,
    src: "SLICES/upperpri/architect.png",
    x: 90,
    y: 35,
    scaleX: 0.52,
    scaleY: 0.52,
  },
  {
    costUrl: "U6",
    cost: 1.0,
    src: "SLICES/upperpri/cheftop.png",
    x: 90,
    y: 55,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "U5",
    cost: 1.0,
    src: "SLICES/upperpri/firefighter.png",
    x: 90,
    y: 55,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "U8",
    cost: 1.0,
    src: "SLICES/upperpri/s1.png",
    x: 91,
    y: 55,
    scaleX: 0.52,
    scaleY: 0.52,
  },
    {
    costUrl: "U9",
    cost: 1.0,
    src: "SLICES/upperpri/doctor1.png",
    x: 91,
    y: 55,
    scaleX: 0.52,
    scaleY: 0.52,
  },
    {
    costUrl: "U11",
    cost: 1.0,
    src: "SLICES/upperpri/l1.png",
    x: 91,
    y: 45,
    scaleX: 0.5,
    scaleY: 0.5,
  },
];

const pantsImages = [
  {
    costUrl: "A9",
    cost: 1.0,
    src: "SLICES/upperpri/sm2.png",
    x: 88,
    y: 93,
    scaleX: 0.51,
    scaleY: 0.51,
  },
  {
    costUrl: "U13",
    cost: 1.0,
    src: "SLICES/upperpri/h2.png",
    x: 78,
    y: 108,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "A3",
    cost: 1.0,
    src: "SLICES/upperpri/3pant.png",
    x: 77,
    y: 112,
    scaleX: 0.51,
    scaleY: 0.51,
  },
  {
    costUrl: "A6",
    cost: 1.0,
    src: "SLICES/upperpri/7pant.png",
    x: 84,
    y: 95,
    scaleX: 0.51,
    scaleY: 0.51,
  },
  {
    costUrl: "A4",
    cost: 1.0,
    src: "SLICES/upperpri/4pant.png",
    x: 81,
    y: 102,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "A2",
    cost: 1.0,
    src: "SLICES/upperpri/6pant.png",
    x: 85,
    y: 94,
    scaleX: 0.51,
    scaleY: 0.51,
  },
  {
    costUrl: "A11",
    cost: 1.0,
    src: "SLICES/upperpri/architect4.png",
    x: 85,
    y: 90,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "A12",
    cost: 1.0,
    src: "SLICES/upperpri/l2.png",
    x: 78,
    y: 106,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "A8",
    cost: 1.0,
    src: "SLICES/upperpri/firepants.png",
    x: 75,
    y: 110,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "A7",
    cost: 1.0,
    src: "SLICES/upperpri/2pant.png",
    x: 77,
    y: 112,
    scaleX: 0.51,
    scaleY: 0.51,
  },
  {
    costUrl: "A5",
    cost: 1.0,
    src: "SLICES/upperpri/5pant.png",
    x: 81,
    y: 95,
    scaleX: 0.51,
    scaleY: 0.51,
  },
];

const hatsImages = [
  {
    costUrl: "S8",
    cost: 1.0,
    src: "SLICES/upperpri/8s.png",
    x: 90,
    y: -70,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "O15",
    cost: 1.0,
    src: "SLICES/upperpri/sm4.png",
    x: 90,
    y: -70,
    scaleX: 0.51,
    scaleY: 0.51,
  },
  {
    costUrl: "O16",
    cost: 1.0,
    src: "SLICES/upperpri/h3.png",
    x: 90,
    y: -70,
    scaleX: 0.51,
    scaleY: 0.51,
  },
  {
    costUrl: "Z9",
    cost: 1.0,
    src: "SLICES/upperpri/architect3.png",
    x: 83,
    y: -140,
    scaleX: 0.4,
    scaleY: 0.4,
  },
  {
    costUrl: "Z8",
    cost: 1.0,
    src: "SLICES/upperpri/chefhat.png",
    x: 76,
    y: -160,
    scaleX: 0.4,
    scaleY: 0.4,
  },
    {
    costUrl: "H9",
    cost: 1.0,
    src: "SLICES/upperpri/firehelmet.png",
    x: 88,
    y: -70,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "O13",
    cost: 1.0,
    src: "SLICES/upperpri/s3.png",
    x: 90,
    y: -80,
    scaleX: 0.51,
    scaleY: 0.51,
  },
  {
    costUrl: "O14",
    cost: 1.0,
    src: "SLICES/upperpri/doctor2.png",
    x: 90,
    y: -70,
    scaleX: 0.51,
    scaleY: 0.51,
  },
  {
    costUrl: "O17",
    cost: 1.0,
    src: "SLICES/upperpri/l3.png",
    x: -17,
    y: 36,
    scaleX: 0.51,
    scaleY: 0.51,
  },

];

const othersImages = [
  {
    costUrl: "S11",
    cost: 1.0,
    src: "SLICES/upperpri/11s.png",
    x: 90,
    y: 10,
    scaleX: 0.4,
    scaleY: 0.4,
  },
  {
    costUrl: "S9",
    cost: 1.0,
    src: "SLICES/upperpri/9s.png",
    x: 90,
    y: 10,
    scaleX: 0.4,
    scaleY: 0.4,
  },
  {
    costUrl: "Z17",
    cost: 1.0,
    src: "SLICES/upperpri/s7.png",
    x: 16,
    y: 0,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "Z14",
    cost: 1.0,
    src: "SLICES/upperpri/sm5.png",
    x: 90,
    y: 10,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "Z11",
    cost: 1.0,
    src: "SLICES/upperpri/o8.png",
    x: 190,
    y: -30,
    scaleX: 0.4,
    scaleY: 0.4,
  },
  {
    costUrl: "Z16",
    cost: 1.0,
    src: "SLICES/upperpri/o9.png",
    x: 220,
    y: -30,
    scaleX: 0.5,
    scaleY: 0.5,
  },
    {
    costUrl: "Z10",
    cost: 1.0,
    src: "SLICES/upperpri/architect2.png",
    x: 100,
    y: -40,
    scaleX: 0.47,
    scaleY: 0.47,
  },
  {
    costUrl: "Z12",
    cost: 1.0,
    src: "SLICES/upperpri/s4.png",
    x: 100,
    y: -20,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "Z13",
    cost: 1.0,
    src: "SLICES/upperpri/doctor3.png",
    x: 88,
    y: -35,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "Z15",
    cost: 1.0,
    src: "SLICES/upperpri/o10.png",
    x: 205,
    y: -35,
    scaleX: 0.6,
    scaleY: 0.6,
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
  {
    costUrl: "S2",
    cost: 1.0,
    src: "SLICES/upperpri/2s.png",
    x: 75,
    y: 145,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "S4",
    cost: 1.0,
    src: "SLICES/upperpri/3s.png",
    x: 75,
    y: 145,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  {
    costUrl: "S17",
    cost: 1.0,
    src: "SLICES/lowerpri/hightop-sneakers.png",
    x: 77,
    y: 135,
    scaleX: 0.5,
    scaleY: 0.5,
  },
    {
    costUrl: "S13",
    cost: 1.0,
    src: "SLICES/upperpri/sm3.png",
    x: 77,
    y: 145,
    scaleX: 0.54,
    scaleY: 0.54,
  },
  {
    costUrl: "S18",
    cost: 1.0,
    src: "SLICES/lowerpri/hikingboots.png",
    x: 71,
    y: 135,
    scaleX: 0.47,
    scaleY: 0.5,
  },
    {
    costUrl: "S19",
    cost: 1.0,
    src: "SLICES/lowerpri/safetyboots.png",
    x: 75,
    y: 135,
    scaleX: 0.5,
    scaleY: 0.5,
  },
];
localStorage.setItem("wa", 0);
localStorage.setItem("ca", 0);
localStorage.setItem("1", 0);



//-----------SUMMARY PAGE-----------------------------
localStorage.setItem("costs", 0);
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
    for (let i = 0; i < pantsImages.length; i++) {
      this.load.image("pantsImage" + i, pantsImages[i].src);
    }
    for (let i = 0; i < hatsImages.length; i++) {
      this.load.image("hatsImage" + i, hatsImages[i].src);
    }
    for (let i = 0; i < topsImages.length; i++) {
      this.load.image("topImage" + i, topsImages[i].src);
    }
    for (let i = 0; i < othersImages.length; i++) {
      this.load.image("othersImage" + i, othersImages[i].src);
    }
    for (let i = 0; i < shoesImages.length; i++) {
      this.load.image("shoesImage" + i, shoesImages[i].src);
    }
    for (let i = 0; i < priceBgs.length; i++) {
      this.load.image(priceBgs[i].split("/")[2].split(".")[0], priceBgs[i]);
    }

    this.load.image(
      "dressupbackground",
      "SLICES/dressup-bgrd_upper.jpg"
    );

    this.load.image("placeholder", "SLICES/SLICEsmileydressup/placeholder.png");
    this.load.image("top", "SLICES/taskbar.png");
    this.load.image("cross", "SLICES/btn_close.png");
    this.load.image("template", "SLICES/dressup_label.png");
    this.load.image("hatsButton", "SLICES/bttn_head.png");
    this.load.image("nameholder", "SLICES/btn_holder_name.png");
    this.load.image("coinholder", "SLICES/btn_holder_coin.png");
    this.load.image("othersButton", "SLICES/bttn_accessories.png");
    this.load.image("topButton", "SLICES/bttn_tops.png");
    this.load.image("pantsButton", "SLICES/bttn_bottoms.png");
    this.load.image("shoesButton", "SLICES/bttn_shoes.png");
    this.load.image("player", "SLICES/smiley.png");
    this.load.image("printbtn", "SLICES/new_print.png");
    this.load.image("removebtn", "SLICES/removeselection_1.png");
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");

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
    localStorage.setItem("topmoney", 0);
    localStorage.setItem("pantsmoney", 0);
    localStorage.setItem("hatmoney", 0);
    localStorage.setItem("othermoney", 0);
    localStorage.setItem("shoesmoney", 0);
    localStorage.setItem("cc", localStorage.getItem("wc"));
    localStorage.setItem(0, localStorage.getItem("wc"));

    let bg = this.add.sprite(1920 / 2, 430, "dressupbackground");
    let top = this.add.sprite(1920 / 2, 30, "top").setDepth(11);
    let box = this.add.sprite(310, 500, "template").setDepth(9);
    box.visible = false;
            box.setScale(100, 150);
        box.setPosition(280, 320);

    let nameholder = this.add.sprite(250, 170, "nameholder");
    let placeholder = this.add
      .sprite(905, 360, "placeholder")
      .setScale(0.7, 0.5);
    let player = this.add
      .sprite(0, 0, "player")
      .setScale(0.5, 0.5)
      .setDataEnabled();
    let playerContainer = this.add.container(230, 510).setDepth(10);
    let i = 0;
    let playername = sessionStorage.getItem(i);
    let spritename = this.add.text(150, 150, playername, {
      font: "32px Arial",
      fill: "white",
    });
    let coinholder = this.add.sprite(1700, 170, "coinholder");
    let playercoin = Number(localStorage.getItem("wc"));
    let spritecoin = this.add.text(1680, 155, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });
    localStorage.setItem("cc", localStorage.getItem(0));
        let newplaceholder = this.add.sprite(1000, 500, "newplaceholder").setDepth(13)
      .setScale(1, 1);
      newplaceholder.visible = false;

    //let printButton = this.add
    //.text(400, 25, "Print mascot", {
    //font: "19px Arial",
    //fill: "white",
    //})
    //.setInteractive()
    //.setDepth(12);

    let printConfirmButton = this.add
      .text(600, 300,"Confirm Mascot", {
        font: "30px Arial",
        fill: "black",
      })
      .setInteractive()
      .setDepth(13);
    printConfirmButton.visible = false;

    let filter = "";
    let printState = 1;

    player.data.set("name", "player");
    playerContainer.add([player]);

    var tabs = this.rexUI.add
      .tabs({
        x: 1103,
        y: 450,
        panel: this.rexUI.add.gridTable({
          x: 1103,
          y: 450,
          width: 1000,
          height: 540,
          scrollMode: 0,
          background: placeholder,
          table: {
            cellWidth: 300,
            cellHeight: 300,
            columns: 3,
            mask: {
              padding: 2,
            },
            reuseCellContainer: true,
          },
          slider: {
            track: this.rexUI.add.roundRectangle(0, 0, 20, 10, 10, 0x737373),
            thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 13, 0xbcbcbc),
          },
          space: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
            table: 10,
          },
          createCellContainerCallback: function (cell, cellContainer) {
            var scene = cell.scene,
              width = cell.width,
              height = cell.height,
              item = cell.item,
              index = cell.index;
            cellContainer = CreateCellContainer(scene, item, index).setOrigin(
              0
            );
            cellContainer.setMinSize(width, height); // Size might changed in this demo
            return cellContainer;
          },
        }),
        topButtons: [
          CreateButton(this, "Top"),
          CreateButton(this, "Pants"),
          CreateButton(this, "Hats"),
          CreateButton(this, "Shoes"),
          CreateButton(this, "Others"),
        ],

        space: {
          topButtonsOffset: 20,
        },
      })
      .layout();
    tabs.on(
      "button.click",
      function (button, groupName, index) {
        filter = button.text;

        if (this._prevTypeButton) {
          this._prevTypeButton.getElement("background").setTint(0xcfe2f3);
        }
        button.getElement("background").clearTint();
        this._prevTypeButton = button;

        let items = GetImagesForFilter(this._prevTypeButton.text).map(
          (item, index) => {
            return {
              src: item.src,
              costUrl: item.costUrl,
              cost: item.cost,
              key: this._prevTypeButton.text,
              index,
              x: item.x,
              y: item.y,
              scaleX: item.scaleX,
              scaleY: item.scaleY,
            };
          }
        );
        this.getElement("panel").setItems(items).scrollToTop();
      },
      tabs
    );

    // when shirt is on mascot//
    tabs.getElement("panel").on(
      "cell.down",
      function (cellContainer, cellIndex, pointer) {
      console.log(playercoin);
        const name = filter.toLowerCase() + "Image" + cellIndex;
        localStorage.setItem("wa", name);
        let itemToRemove;
        for (let i = 0; i < playerContainer.length; i++) {
          const containerItem = playerContainer.list[i];
          if (containerItem.data.get("name") === filter.toLowerCase()) {
            itemToRemove = containerItem;
            itemToRemove.cost = containerItem.data.get("cost");
            break;
          }
        }
        const costUrl = cellContainer.data.get("costUrl");
        const newCost = GetCostFromUrl(costUrl);
        if (filter == "Top") {
        localStorage.setItem(0, localStorage.getItem("0") - newCost);
            if (localStorage.getItem("topmoney") == 0) {
                if (playercoin - newCost < 0) {
                    return;
                }}
            else if (localStorage.getItem("topmoney") != 0) {
                if (newCost > localStorage.getItem("topmoney")) {
                    var changeneed = newCost - localStorage.getItem("topmoney");
                    if (changeneed > playercoin) {
                    return;}
                    }
                }
        localStorage.setItem("topmoney", newCost);
        }
        if (filter == "Pants") {
            if (localStorage.getItem("pantsmoney") == 0) {
                if (playercoin - newCost < 0) {
                    return;}
                else {
                        localStorage.setItem(0, localStorage.getItem("0") - newCost);}
                }
            else if (localStorage.getItem("pantsmoney") != 0) {
                if (newCost > localStorage.getItem("pantsmoney")) {
                    var changeneed = newCost - localStorage.getItem("pantsmoney");
                    console.log(changeneed);
                    if (changeneed > playercoin) {
                    return;}
                    else {
                        localStorage.setItem(0, localStorage.getItem("0") - changeneed);}
                }
                    }

        localStorage.setItem("pantsmoney", newCost);
        }
        if (filter == "Hats") {
        localStorage.setItem(0, localStorage.getItem("0") - newCost);
            if (localStorage.getItem("hatmoney") == 0) {
                if (playercoin - newCost < 0) {
                    return;
                }}
            else if (localStorage.getItem("hatmoney") != 0) {
                if (newCost > localStorage.getItem("hatmoney")) {
                    var changeneed = newCost - localStorage.getItem("hatmoney");
                    if (changeneed > playercoin) {
                    return;}
                    }
                }
        localStorage.setItem("hatmoney", newCost);
        }
        if (filter == "Shoes") {
        localStorage.setItem(0, localStorage.getItem("0") - newCost);
            if (localStorage.getItem("shoesmoney") == 0) {
                if (playercoin - newCost < 0) {
                    return;
                }}
            else if (localStorage.getItem("shoesmoney") != 0) {
                if (newCost > localStorage.getItem("shoesmoney")) {
                    var changeneed = newCost - localStorage.getItem("shoesmoney");
                    if (changeneed > playercoin) {
                    return;}
                    }
                }
        localStorage.setItem("shoesmoney", newCost);
        }
        if (filter == "Others") {
        localStorage.setItem(0, localStorage.getItem("0") - newCost);
            if (localStorage.getItem("othermoney") == 0) {
                if (playercoin - newCost < 0) {
                console.log("broke");
                    return;
                }}
            else if (localStorage.getItem("othermoney") != 0) {
                if (newCost > localStorage.getItem("othermoney")) {
                    var changeneed = newCost - localStorage.getItem("othermoney");
                    if (changeneed > playercoin) {
                    return;}
                    }
                }
            localStorage.setItem("othermoney", newCost);
        }

        console.log(playercoin);

        if (itemToRemove) {
          playerContainer.remove(itemToRemove);
          itemToRemove.destroy();
          playercoin += itemToRemove.cost;
          var ogcost = Number(localStorage.getItem("costs"));
            localStorage.setItem("costs", ogcost - itemToRemove.cost);
            console.log(itemToRemove.cost);
          spritecoin.setText("$" + playercoin.toFixed(2));
        }

        const x = cellContainer.data.get("x");
        const y = cellContainer.data.get("y");
        const scaleX = cellContainer.data.get("scaleX");
        const scaleY = cellContainer.data.get("scaleY");

        let itemImage = this.add
          .image(x, y, name)
          .setScale(scaleX, scaleY)
          .setDataEnabled();
        itemImage.data.set("name", filter.toLowerCase());

        itemImage.data.set("cost", newCost);
        playerContainer.add([itemImage]);
        playercoin -= newCost;
        var ogcost = Number(localStorage.getItem("costs"));
        localStorage.setItem("costs", ogcost + newCost);
        console.log(newCost);
        console.log(playercoin);
        spritecoin.setText("$" + playercoin.toFixed(2));
        if (filter == "Top") {
        localStorage.setItem("topmoney", newCost);
        }
        if (filter == "Pants") {
        localStorage.setItem("pantsmoney", newCost);
        }
        if (filter == "Head") {
        localStorage.setItem("hatmoney", newCost);
        }
        if (filter == "Shoes") {
        localStorage.setItem("shoesmoney", newCost);
        }
        if (filter == "Others") {
            localStorage.setItem("othermoney", newCost);
        }
      },
      this
    );

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

    //--------------------------PRINT BUTTON------------------------------
    let spriteprint = this.add.sprite(1700, 800, "printbtn").setInteractive();
    spriteprint.on("pointerover", function (event) {
      this.setTint(0xffe4b5);
    });

    spriteprint.on("pointerout", function (event) {
      this.clearTint();
    });

    spriteprint.on("pointerdown", function () {
      if (printState === 1) {
      localStorage.setItem("cc", localStorage.getItem(0));
      var ogmoney = localStorage.getItem("0");
      var totalcost = localStorage.getItem("costs");
      localStorage.setItem("0", Number(ogmoney-totalcost));
      box.visible = true;
        window.location.href = "confirmUpper.html" }
        function exportCanvasAsPNG(dataUrl) {

          var imgUrl = dataUrl;
          localStorage.setItem("mascot", imgUrl);
          printState = 2;
        }
        game.renderer.snapshotArea(30, 290, 520, 400, function (image) {
          exportCanvasAsPNG(image.src);
        });
      }
    );

    //--------------------------REMOVE BUTTON------------------------------
    let spriteremove = this.add.sprite(1740, 730, "removebtn").setInteractive();
    spriteremove.on("pointerover", function (event) {
      this.setTint(0xffe4b5);
    });

    spriteremove.on("pointerout", function (event) {
      this.clearTint();
    });

    spriteremove.on("pointerdown", function () {
        let itemToRemove;
        for (let i = 0; i < playerContainer.length; i++) {
          const containerItem = playerContainer.list[i];
          if (containerItem.data.get("name") === filter.toLowerCase()) {
            itemToRemove = containerItem;
            itemToRemove.cost = containerItem.data.get("cost");
            break;
          }}
        playerContainer.remove(itemToRemove);
        itemToRemove.destroy();
        playercoin += itemToRemove.cost;
        localStorage.setItem(0,  playercoin);
        spritecoin.setText("$" + playercoin.toFixed(2));
        if (filter == "Top") {
        localStorage.setItem("topmoney", 0);
        localStorage.setItem("costs", localStorage.getItem("costs") - itemToRemove.cost);}
        if (filter == "Pants") {
        localStorage.setItem("pantsmoney", 0);
        localStorage.setItem("costs", localStorage.getItem("costs") - itemToRemove.cost);}
        if (filter == "Hats") {
        localStorage.setItem("hatmoney", 0);
        localStorage.setItem("costs", localStorage.getItem("costs") - itemToRemove.cost);}
        if (filter == "Others") {
            localStorage.setItem("othermoney", 0);
            localStorage.setItem("costs", localStorage.getItem("costs") - itemToRemove.cost);}
        if (filter == "Shoes") {
            localStorage.setItem("shoesmoney", 0);
            localStorage.setItem("costs", localStorage.getItem("costs") - itemToRemove.cost);}
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

    AddButtonTint([spritecross, spriteprint, spriteunmute]);
  }
}
var CreateButton = function (scene, key) {
  return scene.rexUI.add.label({
    width: 100,
    height: 100,
    text: scene.add.text(0, 0, key, {
      fontSize: "18pt",
      color: "transparent",
    }),
    background: scene.add
      .sprite(0, 0, key.toLowerCase() + "Button")
      // .setScale(0.1, 0.09)
      .setTint(0xcfe2f3)
      .setInteractive(),
    space: {
      left: 10,
    },
  });
};

var CreateCellContainer = function (scene, item, index) {
  const label = scene.rexUI.add.label({
    width: 180,
    height: 180,
    orientation: 1,
    background: scene.add.image(0, 0, item.costUrl),
    icon: CreateIcon(scene, item.key, index),
    text: CreateText(scene),
    space: {
      icon: 10,
      left: 0,
      top: 15,
    },
  });
  label.setDataEnabled();
  label.data.set("x", item.x);
  label.data.set("y", item.y);
  label.data.set("scaleX", item.scaleX);
  label.data.set("scaleY", item.scaleY);
  label.data.set("costUrl", item.costUrl);
  return label;
};

var CreateShape = function (scene, fillColor, strokeColor) {
  return scene.rexUI.add
    .roundRectangle(0, 0, 20, 20, 0, fillColor)
    .setStrokeStyle(2, strokeColor);
};

var CreateIcon = function (scene, key, index) {
  return scene.add
    .sprite(0, 0, key.toLowerCase() + "Image" + index)
    .setScale(0.5, 0.5);
};

var CreateText = function (scene) {
  return scene.rexUI
    .wrapExpandText(
      scene.add.text(0, 0, "", {
        fontSize: "14pt",
        padding: 10,
      })
    )
    .setColor(0x123456);
};

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
  case "Shoes":
      items = shoesImages;
      break;
    case "Others":
      items = othersImages;
      break;
  }
  return items;
};

var GetCostFromUrl = function (costUrl) {
  switch (costUrl) {
    case "U1":
      return 6.05;
    case "U2":
      return 7.25;
    case "U3":
      return 7.85;
    case "U4":
      return 5.85;
    case "A1":
      return 2.0;
    case "A2":
      return 2.55;
    case "A3":
      return 1.85;
    case "A4":
      return 2.25;
    case "A5":
      return 3.55;
    case "A6":
      return 2.05;
    case "A7":
      return 3.25;
    case "S1":
      return 1.5;
    case "S2":
      return 2;
    case "S4":
      return 2;
    case "S8":
      return 1.05;
    case "O15":
      return 1.25;
    case "S9":
      return 1.25;
    case "S11":
      return 1.25;
    case "Z8":
      return 3.55;
    case "A8":
      return 3.05;
    case "U5":
      return 8.85;
  case "U6":
      return 8.55;
  case "H9":
      return 3.85;
  case "U7":
      return 8.05;
    case "A9":
      return 1.55;
    case "Z9":
      return 3.05;
    case "Z10":
      return 5;
    case "U8":
      return 9.25;
    case "A10":
      return 1.05;
    case "U9":
      return 9.55;
  case "S13":
      return 4;
   case "U10":
      return 5.05;
  case "A11":
      return 2.85;
  case "Z17":
      return 2.5;
    case "Z16":
      return 4.85;
    case "Z14":
      return 2.5;
  case "U11":
      return 11.5;
  case "A12":
      return 3.05;
  case "U20":
      return 5.05;
  case "U13":
      return 1.55;
  case "Z11":
      return 3.55;
  case "Z12":
      return 6.5;
  case "O13":
      return 4.25;
      case "O14":
      return 4.55;
      case "O16":
      return 2.5;
  case "O17":
      return 4.85;
      case "Z13":
      return 6.85;
      case "Z15":
      return 7.5;
      case "S14":
      return 1.5;
      case "S17":
      return 3;
      case "S18":
      return 4;
      case "S19":
      return 4;
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
