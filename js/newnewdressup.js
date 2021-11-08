let gameScene = new Phaser.Scene("Game");

// display of outfit on smiley
const priceBgs = [
  "SLICES/Slice_bonusround/T1.png",
  "SLICES/Slice_bonusround/T3.png",
  "SLICES/Slice_bonusround/T4.png",
  "SLICES/Slice_bonusround/T6.png",
  "SLICES/Slice_bonusround/T7.png",
  "SLICES/Slice_bonusround/T8.png",
  "SLICES/Slice_bonusround/T9.png",
  "SLICES/Slice_bonusround/T10.png",
  "SLICES/Slice_bonusround/T11.png",
  "SLICES/Slice_bonusround/P1.jpeg",
  "SLICES/Slice_bonusround/P2.png",
  "SLICES/Slice_bonusround/P3.png",
  "SLICES/Slice_bonusround/P4.png",
  "SLICES/Slice_bonusround/P5.png",
  "SLICES/Slice_bonusround/P6.png",
  "SLICES/Slice_bonusround/P7.png",
  "SLICES/Slice_bonusround/P8.png",
  "SLICES/Slice_bonusround/H2.png",
  "SLICES/Slice_bonusround/H3.png",
  "SLICES/Slice_bonusround/H4.png",
  "SLICES/Slice_bonusround/H5.png",
  "SLICES/Slice_bonusround/H6.png",
  "SLICES/Slice_bonusround/H7.png",
  "SLICES/Slice_bonusround/H8.png",
  "SLICES/Slice_bonusround/O1.png",
  "SLICES/Slice_bonusround/O2.png",
  "SLICES/Slice_bonusround/O3.png",
  "SLICES/Slice_bonusround/O4.png",
  "SLICES/Slice_bonusround/O7.png",
  "SLICES/Slice_bonusround/O8.png",
  "SLICES/Slice_bonusround/O9.png",
  "SLICES/Slice_bonusround/T12.png",
  "SLICES/Slice_bonusround/S14.png",
  "SLICES/Slice_bonusround/S15.png",
  "SLICES/Slice_bonusround/S16.png",
  "SLICES/Slice_bonusround/T13.png",
  "SLICES/Slice_bonusround/P9.png",
  "SLICES/Slice_bonusround/O10.png",
  "SLICES/Slice_bonusround/P10.png",
  "SLICES/Slice_bonusround/T14.png",
  "SLICES/Slice_bonusround/S1.png",
  "SLICES/Slice_bonusround/S2.png",
  "SLICES/Slice_bonusround/S4.png",
  "SLICES/Slice_bonusround/S17.png",
  "SLICES/Slice_bonusround/S18.png",
  "SLICES/Slice_bonusround/S19.png",
];

const topsImages = [
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
    costUrl: "T12",
    cost: 1.0,
    src: "SLICES/lowerpri/11top.png",
    x: 90,
    y: 39,
    scaleX: 0.5,
    scaleY: 0.5,
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
    costUrl: "T14",
    cost: 1.0,
    src: "SLICES/lowerpri/13top.png",
    x: 90,
    y: 45,
    scaleX: 0.5,
    scaleY: 0.5,
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
    costUrl: "T11",
    cost: 1.0,
    src: "SLICES/lowerpri/10top.png",
    x: 90,
    y: 39,
    scaleX: 0.5,
    scaleY: 0.5,
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
    costUrl: "T4",
    cost: 1.0,
    src: "SLICES/upperpri/5top.png",
    x: 90,
    y: 45,
    scaleX: 0.55,
    scaleY: 0.55,
  },
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
    costUrl: "T3",
    cost: 1.0,
    src: "SLICES/upperpri/3top.png",
    x: 90,
    y: 36,
    scaleX: 0.5,
    scaleY: 0.5,
  },

];

const pantsImages = [
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
    costUrl: "P7",
    cost: 1.0,
    src: "SLICES/lowerpri/8pants.png",
    x: 77,
    y: 113,
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
    costUrl: "P10",
    cost: 1.0,
    src: "SLICES/lowerpri/11pants.png",
    x: 85,
    y: 108,
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
    costUrl: "P8",
    cost: 1.0,
    src: "SLICES/lowerpri/9pants.png",
    x: 77,
    y: 112,
    scaleX: 0.5,
    scaleY: 0.5,
  },


];

const othersImages = [
  {
    costUrl: "O10",
    cost: 1.0,
    src: "SLICES/lowerpri/7a.png",
    x: 220,
    y: 20,
    scaleX: 0.51,
    scaleY: 0.51,
  },
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
    costUrl: "O4",
    cost: 1.0,
    src: "SLICES/lowerpri/4accessories_b.png",
    x: 220,
    y: 0,
    scaleX: 0.6,
    scaleY: 0.6,
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
    costUrl: "O3",
    cost: 1.0,
    src: "SLICES/upperpri/4accesories-b.png",
    x: 220,
    y: 80,
    scaleX: 0.8,
    scaleY: 0.8,
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
    costUrl: "O2",
    cost: 1.0,
    src: "SLICES/upperpri/3accessories.png",
    x: 220,
    y: 50,
    scaleX: 0.7,
    scaleY: 0.7,
  },
];

const hatsImages = [

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
    costUrl: "H2",
    cost: 1.0,
    src: "SLICES/upperpri/4accesories-a.png",
    x: 80,
    y: -80,
    scaleX: 0.65,
    scaleY: 0.65,
  },
  {
    costUrl: "H8",
    cost: 1.0,
    src: "SLICES/lowerpri/6h.png",
    x: 110,
    y: -130,
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
    costUrl: "S15",
    cost: 1.0,
    src: "SLICES/lowerpri/bedroomslippers.png",
    x: 79,
    y: 145,
    scaleX: 0.52,
    scaleY: 0.52,
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
    costUrl: "S16",
    cost: 1.0,
    src: "SLICES/lowerpri/cow_slipons.png",
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

    for (let i = 0; i < topsImages.length; i++) {
      this.load.image("topImage" + i, topsImages[i].src);
    }
    for (let i = 0; i < othersImages.length; i++) {
      this.load.image("othersImage" + i, othersImages[i].src);
    }
    for (let i = 0; i < hatsImages.length; i++) {
      this.load.image("hatsImage" + i, hatsImages[i].src);}
    for (let i = 0; i < shoesImages.length; i++) {
      this.load.image("shoesImage" + i, shoesImages[i].src);
    }
    for (let i = 0; i < priceBgs.length; i++) {
      this.load.image(priceBgs[i].split("/")[2].split(".")[0], priceBgs[i]);
    }

    this.load.image(
      "dressupbackground",
      "SLICES/SLICEsmileydressup/background.png"
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
    let playercoin = Number(localStorage.getItem(i));
    let spritecoin = this.add.text(1680, 155, "$" + playercoin.toFixed(2), {
      font: "32px Arial",
      fill: "white",
    });
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
                    return;
                }}
            else if (localStorage.getItem("pantsmoney") != 0) {
                if (newCost > localStorage.getItem("pantsmoney")) {
                    var changeneed = newCost - localStorage.getItem("pantsmoney");
                    if (changeneed > playercoin) {
                    return;}
                    }
                }
        localStorage.setItem("pantsmoney", newCost);
        }
        if (filter == "Hats") {
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
      var ogmoney = localStorage.getItem("0");
      var totalcost = localStorage.getItem("costs");
      localStorage.setItem("0", Number(ogmoney-totalcost));
      box.visible = true;
        window.location.href = "confirmLower.html" }
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
        spritecoin.setText("$" + playercoin.toFixed(2));
        if (filter == "Top") {
        localStorage.setItem("topmoney", 0);}
        if (filter == "Pants") {
        localStorage.setItem("pantsmoney", 0);}
        if (filter == "Hats") {
        localStorage.setItem("hatmoney", 0);}
        if (filter == "Shoes") {
        localStorage.setItem("shoesmoney", newCost);
        }
        if (filter == "Others") {
            localStorage.setItem("othermoney", 0);
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
    case "T1":
      return 8.5;
    case "T3":
      return 9.0;
    case "T4":
      return 8.5;
    case "T6":
      return 5.5;
    case "T7":
      return 4.5;
    case "T8":
      return 6.0;
    case "T9":
      return 6.0;
    case "T10":
      return 6.5;
    case "T11":
      return 5.5;
    case "P2":
      return 1.5;
    case "P3":
      return 1.5;
    case "P4":
      return 2;
    case "P5":
      return 2;
    case "P6":
      return 2.0;
    case "P7":
      return 1.0;
    case "P8":
      return 2.5;
    case "P9":
      return 1;
      case "P10":
      return 1.5;
    case "H2":
      return 3.0;
    case "H3":
      return 3.5;
    case "H4":
      return 1.5;
    case "H5":
      return 2;
    case "H6":
      return 2.5;
    case "H7":
      return 3;
    case "H8":
      return 3.5;
    case "O1":
      return 4.5;
    case "O2":
      return 7.5;
    case "O3":
      return 6.5;
    case "O4":
      return 5;
    case "O7":
      return 7;
    case "O8":
      return 3.5;
    case "O9":
      return 6;
    case "T12":
      return 3.5;
      case "S14":
      return 1.5;
      case "S15":
      return 1.5;
      case "S16":
      return 2;
      case "T13":
      return 3.5;
      case "O10":
      return 3.5;
      case "T14":
      return 4.5;
      case "S1":
      return 1.5;
    case "S2":
      return 2;
    case "S4":
      return 2;
      case "S17":
      return 3;
      case "S18":
      return 4;
      case "S19":
      return 4;
    case "none":
        return 0.0;
    default:
      return 1.0;
  }
};
var config = {
  type: Phaser.AUTO, //Phaser will decide to use webgl if available or canvas
  width: 1900,
  height: 950,
  scene: [SceneA],
  pixelArt: false,
  parent: "canvas",
};

var game = new Phaser.Game(config);
