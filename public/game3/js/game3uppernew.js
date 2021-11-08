function instr() {
  location.replace("./game3objlower.html");
}

class question1 extends Phaser.Scene {
  constructor() {
    super({ key: "question1" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game3/image/background_sustain.jpg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("lbtn", "game2/image/btn_back.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    // this.load.image('pause', 'game2/image/btn_pause.png');
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("homebtn", "SLICES/new_bttn-previous.png");
    //this.load.image('whiteboard', 'game3/image/placeholder_checkpoint.jpg');
    this.load.image("mutebtn", "SLICES/bttn_mute.png");
    this.load.image("unmutebtn", "SLICES/bttn_unmute.png");
    this.load.audio("backgroundmusic", "game3/audio/game3.mp3");
    this.load.image("card1-1", "game3/image/game3_flipcards/upperpri_question-answer/01q.png");
    this.load.image("card1-2","game3/image/game3_flipcards/upperpri_question-answer/01a.png");
    this.load.image("card2-1", "game3/image/game3_flipcards/upperpri_question-answer/10q.png");
    this.load.image("card3-22", "game3/image/game3_flipcards/upperpri_question-answer/upp_a2.png");
    this.load.image("card3-11", "game3/image/game3_flipcards/upperpri_question-answer/upp_q2.png");
    this.load.image("card3-1", "game3/image/game3_flipcards/upperpri_question-answer/19q.png");
    this.load.image("card4-1", "game3/image/game3_flipcards/upperpri_question-answer/02q.png");
    this.load.image("card5-1", "game3/image/game3_flipcards/upperpri_question-answer/05q.png");
    this.load.image("card2-2", "game3/image/game3_flipcards/upperpri_question-answer/10a.png");
    this.load.image("card4-2", "game3/image/game3_flipcards/upperpri_question-answer/02a.png");
    this.load.image("card5-2", "game3/image/game3_flipcards/upperpri_question-answer/05a.png");
    this.load.image("card3-2", "game3/image/game3_flipcards/upperpri_question-answer/19a.png");
    this.load.image("card2-2", "game3/image/game3_flipcards/upperpri_question-answer/lp02a.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("card1-22", "game3/image/game3_flipcards/upperpri_question-answer/upp_a18.png");
    this.load.image("card1-11", "game3/image/game3_flipcards/upperpri_question-answer/upp_q18.png");
    this.load.image("card2-11", "game3/image/game3_flipcards/upperpri_question-answer/upp_q11.png");
    this.load.image("card2-22", "game3/image/game3_flipcards/upperpri_question-answer/upp_a11.png");
    this.load.image("card4-22", "game3/image/game3_flipcards/upperpri_question-answer/upp_a17.png");
    this.load.image("card4-11", "game3/image/game3_flipcards/upperpri_question-answer/upp_q17.png");
    this.load.image("card5-11", "game3/image/game3_flipcards/upperpri_question-answer/upp_q14.png");
    this.load.image("card5-22", "game3/image/game3_flipcards/upperpri_question-answer/upp_a14.png");
  }

  create() {
  localStorage.setItem(1, 0);
  localStorage.setItem(2, 0);
  localStorage.setItem("ca", 0);
  localStorage.setItem("wa", 0);
  localStorage.setItem("cc", 0);
  localStorage.setItem("wc", 0);
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

    let tick1 = this.add.sprite(420, 340, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick11 = this.add.sprite(1200, 670, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick2 = this.add.sprite(680, 340, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick31 = this.add.sprite(1460, 670, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick3 = this.add.sprite(940, 340, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick21 = this.add.sprite(940, 670, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick4 = this.add.sprite(1200, 340, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick41 = this.add.sprite(420, 670, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick5 = this.add.sprite(1460, 340, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick51 = this.add.sprite(680, 670, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);

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

    //---------first card (QUESTION 1)------------
var card1_1 = this.add.sprite(420,340, "card1-1")
    .setScale(0.75, 0.75)
    .setInteractive();

    card1_1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card1_1.on("pointerout", function (event) {
      this.clearTint();
    });
    card1_1.on("pointerdown", function() {
        card2_11.setVisible(false);
        card3_11.setVisible(false);
        card4_11.setVisible(false);
        card5_11.setVisible(false);
        localStorage.setItem(1, "card1_1");
        card1_11.setVisible(true);
        if (localStorage.getItem(2) == "card1_2") {
            tick1.setVisible(true);
            tick11.setVisible(true);
            card1_11.setVisible(false);
            card1_22.setVisible(false);
            localStorage.setItem("wa", (localStorage.getItem("wa")+1));
            if (localStorage.getItem("wa") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            card1_11.setVisible(false);
            card2_22.setVisible(false);
            card3_22.setVisible(false);
            card4_22.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });
    //----------------- wip----------
    var card1_11 = this.add.sprite(420,340, "card1-11")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card1_11.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card1_11.on("pointerout", function (event) {
      this.clearTint();
    });
    card1_11.on("pointerdown", function() {
        localStorage.setItem(1, "card1_1");
        if (localStorage.getItem(2) == "card1_2") {
            card1_11.setVisible(false);
            card1_22.setVisible(false);
            tick1.setVisible(true);
            tick11.setVisible(true);
            localStorage.setItem("wa", (localStorage.getItem("wa")+1));
            if (localStorage.getItem("wa") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });


    //---------second card (QUESTION 3)------------
    var card3_1 = this.add.sprite(680,340, "card3-1")
    .setScale(0.75, 0.75)
    .setInteractive();

    card3_1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card3_1.on("pointerout", function (event) {
      this.clearTint();
    });
    card3_1.on("pointerdown", function() {
        card2_11.setVisible(false);
        card1_11.setVisible(false);
        card4_11.setVisible(false);
        card5_11.setVisible(false);
        localStorage.setItem(1, "card3_1");
        card3_11.setVisible(true);
        if (localStorage.getItem(2) == "card3_2") {
            tick2.setVisible(true);
            tick21.setVisible(true);
            card3_11.setVisible(false);
            card3_22.setVisible(false);
            localStorage.setItem("ca", (localStorage.getItem("ca")+1));
            if (localStorage.getItem("ca") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            card3_11.setVisible(false);
            card2_22.setVisible(false);
            card1_22.setVisible(false);
            card4_22.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    var card3_11 = this.add.sprite(680,340, "card3-11")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card3_11.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card3_11.on("pointerout", function (event) {
      this.clearTint();
    });
    card3_11.on("pointerdown", function() {
        localStorage.setItem(1, "card3_1");
        if (localStorage.getItem(2) == "card3_2") {
            card3_11.setVisible(false);
            card3_22.setVisible(false);
            tick2.setVisible(true);
            tick21.setVisible(true);
            localStorage.setItem("ca", (localStorage.getItem("ca")+1));
            if (localStorage.getItem("ca") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------third card (QUESTION 2)------------
    var card2_1 = this.add.sprite(940,340, "card2-1")
    .setScale(0.75, 0.75)
    .setInteractive();

    card2_1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card2_1.on("pointerout", function (event) {
      this.clearTint();
    });
    card2_1.on("pointerdown", function() {
        card1_11.setVisible(false);
        card3_11.setVisible(false);
        card4_11.setVisible(false);
        card5_11.setVisible(false);
        localStorage.setItem(1, "card2_1");
        card2_11.setVisible(true);
        if (localStorage.getItem(2) == "card2_2") {
            tick3.setVisible(true);
            tick31.setVisible(true);
            card2_11.setVisible(false);
            card2_22.setVisible(false);
            localStorage.setItem("cc", (localStorage.getItem("cc")+1));
            if (localStorage.getItem("cc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            card2_11.setVisible(false);
            card1_22.setVisible(false);
            card3_22.setVisible(false);
            card4_22.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------wip------------
    var card2_11 = this.add.sprite(940,340, "card2-11")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card2_11.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card2_11.on("pointerout", function (event) {
      this.clearTint();
    });
    card2_11.on("pointerdown", function() {
        localStorage.setItem(1, "card2_1");
        if (localStorage.getItem(2) == "card2_2") {
            tick3.setVisible(true);
            tick31.setVisible(true);
            card2_11.setVisible(false);
            card2_22.setVisible(false);
            localStorage.setItem("cc", (localStorage.getItem("cc")+1));
            if (localStorage.getItem("cc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------fourth card (QUESTION 4)------------
    var card4_1 = this.add.sprite(1200,340, "card4-1")
    .setScale(0.75, 0.75)
    .setInteractive();

    card4_1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card4_1.on("pointerout", function (event) {
      this.clearTint();
    });
    card4_1.on("pointerdown", function() {
        localStorage.setItem(1, "card4_1");
        card2_11.setVisible(false);
        card3_11.setVisible(false);
        card1_11.setVisible(false);
        card5_11.setVisible(false);
        card4_11.setVisible(true);
        if (localStorage.getItem(2) == "card4_2") {
            tick4.setVisible(true);
            tick41.setVisible(true);
            card4_11.setVisible(false);
            card4_22.setVisible(false);
            localStorage.setItem("wc", (localStorage.getItem("wc")+1));
            if (localStorage.getItem("wc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            card4_11.setVisible(false);
            card2_22.setVisible(false);
            card3_22.setVisible(false);
            card1_22.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------fourth card (QUESTION 4)------------
    var card4_11 = this.add.sprite(1200,340, "card4-11")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card4_11.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card4_11.on("pointerout", function (event) {
      this.clearTint();
    });
    card4_11.on("pointerdown", function() {
        localStorage.setItem(1, "card4_1");
        if (localStorage.getItem(2) == "card4_2") {
            card4_11.setVisible(false);
            card4_22.setVisible(false);
            tick4.setVisible(true);
            tick41.setVisible(true);
            localStorage.setItem("wc", (localStorage.getItem("wc")+1));
            if (localStorage.getItem("wc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

        //---------fifth card (QUESTION 5)------------
    var card5_1 = this.add.sprite(1460,340, "card5-1")
    .setScale(0.75, 0.75)
    .setInteractive();

    card5_1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card5_1.on("pointerout", function (event) {
      this.clearTint();
    });
    card5_1.on("pointerdown", function() {
        card1_11.setVisible(false);
        card2_11.setVisible(false);
        card3_11.setVisible(false);
        card4_11.setVisible(false);
        card5_11.setVisible(true);
        localStorage.setItem(1, "card5_1");
        if (localStorage.getItem(2) == "card5_2") {
            tick5.setVisible(true);
            tick51.setVisible(true);
            card5_11.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem("click", (localStorage.getItem("click")+1));
            if (localStorage.getItem("click") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            card5_11.setVisible(false);
            card2_22.setVisible(false);
            card3_22.setVisible(false);
            card1_22.setVisible(false);
            card4_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    var card5_11 = this.add.sprite(1460,340, "card5-11")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card5_11.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card5_11.on("pointerout", function (event) {
      this.clearTint();
    });
    card5_11.on("pointerdown", function() {
        localStorage.setItem(1, "card5_1");
        if (localStorage.getItem(2) == "card5_2") {
            card5_11.setVisible(false);
            card5_22.setVisible(false);
            tick5.setVisible(true);
            tick51.setVisible(true);
            localStorage.setItem("click", (localStorage.getItem("click")+1));
            if (localStorage.getItem("click") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            card5_11.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    var card5_22 = this.add.sprite(680,680, "card5-22")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card5_22.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card5_22.on("pointerout", function (event) {
      this.clearTint();
    });
    card5_22.on("pointerdown", function() {
        localStorage.setItem(2, "card5_2");
        if (localStorage.getItem(1) == "card5_1") {
            tick5.setVisible(true);
            tick51.setVisible(true);
            card5_11.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem("click", (localStorage.getItem("click")+1));
            if (localStorage.getItem("click") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
            card5_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------second card (ANSWER FOR CARD 1)------------
    var card1_2 = this.add.sprite(1200,680, "card1-2")
    .setScale(0.75, 0.75)
    .setInteractive();

    card1_2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card1_2.on("pointerout", function (event) {
      this.clearTint();
    });
    card1_2.on("pointerdown", function() {
        card2_22.setVisible(false);
        card3_22.setVisible(false);
        card4_22.setVisible(false);
        card5_22.setVisible(false);
        localStorage.setItem(2, "card1_2");
        card1_22.setVisible(true);
        if (localStorage.getItem(1) == "card1_1") {
            tick11.setVisible(true);
            tick1.setVisible(true);
            card1_11.setVisible(false);
            card1_22.setVisible(false);
            localStorage.setItem("wa", (localStorage.getItem("wa")+1));
            if (localStorage.getItem("wa") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
        }}
        if (localStorage.getItem(1) != 0) {
            card1_22.setVisible(false);
            card2_11.setVisible(false);
            card3_11.setVisible(false);
            card4_11.setVisible(false);
            card5_11.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

//----------------- wip----------
    var card1_22 = this.add.sprite(1200,680, "card1-22")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card1_22.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card1_22.on("pointerout", function (event) {
      this.clearTint();
    });
    card1_22.on("pointerdown", function() {
        localStorage.setItem(2, "card1_2");
        if (localStorage.getItem(1) == "card1_1") {
            tick1.setVisible(true);
            tick11.setVisible(true);
            card1_11.setVisible(false);
            card1_22.setVisible(false);
            localStorage.setItem("wa", (localStorage.getItem("wa")+1));
            if (localStorage.getItem("wa") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
            card1_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------(ANSWER QUESTION 4------------
    var card4_2 = this.add.sprite(420,680, "card4-2")
    .setScale(0.75, 0.75)
    .setInteractive();

    card4_2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card4_2.on("pointerout", function (event) {
      this.clearTint();
    });
    card4_2.on("pointerdown", function() {
        card2_22.setVisible(false);
        card3_22.setVisible(false);
        card1_22.setVisible(false);
        card5_22.setVisible(false);
        localStorage.setItem(2, "card4_2");
        card4_22.setVisible(true);
        if (localStorage.getItem(1) == "card4_1") {
            tick4.setVisible(true);
            tick41.setVisible(true);
            card4_11.setVisible(false);
            card4_22.setVisible(false);
            localStorage.setItem("wc", (localStorage.getItem("wc")+1));
            if (localStorage.getItem("wc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
        }}

        if (localStorage.getItem(1) != 0) {
            card1_11.setVisible(false);
            card2_11.setVisible(false);
            card3_11.setVisible(false);
            card5_11.setVisible(false);
            card4_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    var card4_22 = this.add.sprite(420,680, "card4-22")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card4_22.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card4_22.on("pointerout", function (event) {
      this.clearTint();
    });
    card4_22.on("pointerdown", function() {
        localStorage.setItem(2, "card4_2");
        if (localStorage.getItem(1) == "card4_1") {
            tick4.setVisible(true);
            tick41.setVisible(true);
            localStorage.setItem("wc", (localStorage.getItem("wc")+1));
            if (localStorage.getItem("wc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
        card1_11.setVisible(false);
            card2_11.setVisible(false);
            card3_11.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------(ANSWER QUESTION 5------------
    var card5_2 = this.add.sprite(680,680, "card5-2")
    .setScale(0.75, 0.75)
    .setInteractive();

    card5_2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card5_2.on("pointerout", function (event) {
      this.clearTint();
    });
    card5_2.on("pointerdown", function() {
        card2_22.setVisible(false);
        card3_22.setVisible(false);
        card1_22.setVisible(false);
        card4_22.setVisible(false);
        localStorage.setItem(2, "card5_2");
        card5_22.setVisible(true);
        if (localStorage.getItem(1) == "card5_1") {
            tick5.setVisible(true);
            tick51.setVisible(true);
            card5_11.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem("click", (localStorage.getItem("click")+1));
            if (localStorage.getItem("click") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
        }
        if (localStorage.getItem(1) != 0) {
            card1_11.setVisible(false);
            card2_11.setVisible(false);
            card3_11.setVisible(false);
            card4_11.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    }});

    //---------(ANSWER QUESTION 3------------
    var card3_2 = this.add.sprite(940,680, "card3-2")
    .setScale(0.75, 0.75)
    .setInteractive();

    card3_2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card3_2.on("pointerout", function (event) {
      this.clearTint();
    });
    card3_2.on("pointerdown", function() {
        card2_22.setVisible(false);
        card1_22.setVisible(false);
        card4_22.setVisible(false);
        card5_22.setVisible(false);
        localStorage.setItem(2, "card3_2");
        card3_22.setVisible(true);
        if (localStorage.getItem(1) == "card3_1") {
            tick2.setVisible(true);
            tick21.setVisible(true);
            card3_11.setVisible(false);
            card3_22.setVisible(false);
            localStorage.setItem("ca", (localStorage.getItem("ca")+1));
            if (localStorage.getItem("ca") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
            card3_22.setVisible(false);
            card2_11.setVisible(false);
            card1_11.setVisible(false);
            card5_11.setVisible(false);
            card4_11.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------(ANSWER QUESTION 2------------
    var card2_2 = this.add.sprite(1460,680, "card2-2")
    .setScale(0.75, 0.75)
    .setInteractive();

    card2_2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card2_2.on("pointerout", function (event) {
      this.clearTint();
    });
    card2_2.on("pointerdown", function() {
        card1_22.setVisible(false);
        card3_22.setVisible(false);
        card4_22.setVisible(false);
        card5_22.setVisible(false);
        localStorage.setItem(2, "card2_2");
        card2_22.setVisible(true);
        if (localStorage.getItem(1) == "card2_1") {
            tick3.setVisible(true);
            tick31.setVisible(true);
            card2_11.setVisible(false);
            card2_22.setVisible(false);
            localStorage.setItem("cc", (localStorage.getItem("cc")+1));
            if (localStorage.getItem("cc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
            card2_22.setVisible(false);
            card1_11.setVisible(false);
            card3_11.setVisible(false);
            card5_11.setVisible(false);
            card4_11.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------wip------------
    var card2_22 = this.add.sprite(1460,680, "card2-22")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card2_22.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card2_22.on("pointerout", function (event) {
      this.clearTint();
    });
    card2_22.on("pointerdown", function() {
        localStorage.setItem(2, "card2_2");
        if (localStorage.getItem(1) == "card2_1") {
            tick3.setVisible(true);
            tick31.setVisible(true);
            card2_11.setVisible(false);
            card2_22.setVisible(false);
            localStorage.setItem("cc", (localStorage.getItem("cc")+1));
            if (localStorage.getItem("cc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

//----------------- wip----------
    var card3_22 = this.add.sprite(940,680, "card3-22")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card3_22.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card3_22.on("pointerout", function (event) {
      this.clearTint();
    });
    card3_22.on("pointerdown", function() {
        localStorage.setItem(2, "card3_2");
        if (localStorage.getItem(1) == "card3_1") {
            tick3.setVisible(true);
            tick31.setVisible(true);
            localStorage.setItem("ca", (localStorage.getItem("ca")+1));
            if (localStorage.getItem("ca") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

//--------game codes------------
    //let whiteboard = this.add.sprite(474,232, 'whiteboard');

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 860 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    //whiteboard.setOrigin(0,0);
    //whiteboard.setScale(0.5,0.54);

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

    spritehomebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game3objlower.html";
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

    // let spritelb = this.add.sprite(80, 760, 'lbtn').setInteractive();
    // spritelb.on('pointerover', function (event) {
    //     this.setTint(0xffae42);
    // });
    // spritelb.on('pointerout', function (event) {
    //     this.clearTint();
    // });
    // spritelb.on('pointerdown', () => instr());

    let spriterb = this.add.sprite(1820, 800, 'rbtn').setInteractive();
    spriterb.setScale(0.65, 0.65);
    spriterb.on('pointerover', function (event) {
        this.setTint(0xffae42);
    });
    spriterb.on('pointerout', function (event) {
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

class question2 extends Phaser.Scene {
  constructor() {
    super({ key: "question2" });
  }

  preload() {
    this.load.image("header", "game2/image/header.png");
    this.load.image("background_ampty", "game3/image/background_sustain.jpg");
    this.load.image("name", "game2/image/btn_holder_name.png");
    this.load.image("money", "game2/image/btn_holder_coin.png");
    this.load.image("cancel", "game2/image/btn_close.png");
    this.load.image("lbtn", "game2/image/btn_back.png");
    this.load.image("rbtn", "game2/image/btn_next.png");
    // this.load.image('pause', 'game2/image/btn_pause.png');
    this.load.image("clock", "game2/image/btn_holder_timer.png");
    this.load.image("homebtn", "SLICES/new_bttn-previous.png");
    //this.load.image('whiteboard', 'game3/image/placeholder_checkpoint.jpg');
    this.load.image("card6-1", "game3/image/game3_flipcards/upperpri_question-answer/03q.png");
    this.load.image("card6-2","game3/image/game3_flipcards/upperpri_question-answer/03a.png");
    this.load.image("card7-1", "game3/image/game3_flipcards/upperpri_question-answer/12q.png");
    this.load.image("card8-22", "game3/image/game3_flipcards/upperpri_question-answer/upp_a6.png");
    this.load.image("card8-11", "game3/image/game3_flipcards/upperpri_question-answer/upp_q6.png");
    this.load.image("card8-1", "game3/image/game3_flipcards/upperpri_question-answer/15q.png");
    this.load.image("card9-1", "game3/image/game3_flipcards/upperpri_question-answer/04q.png");
    this.load.image("card10-1", "game3/image/game3_flipcards/upperpri_question-answer/18q.png");
    this.load.image("card7-2", "game3/image/game3_flipcards/upperpri_question-answer/12a.png");
    this.load.image("card9-2", "game3/image/game3_flipcards/upperpri_question-answer/04a.png");
    this.load.image("card10-2", "game3/image/game3_flipcards/upperpri_question-answer/18a.png");
    this.load.image("card8-2", "game3/image/game3_flipcards/upperpri_question-answer/15a.png");
    this.load.image("tick", "SLICES/correct.png");
    this.load.image("card6-22", "game3/image/game3_flipcards/upperpri_question-answer/upp_a16.png");
    this.load.image("card6-11", "game3/image/game3_flipcards/upperpri_question-answer/upp_q16.png");
    this.load.image("card7-11", "game3/image/game3_flipcards/upperpri_question-answer/upp_q9.png");
    this.load.image("card7-22", "game3/image/game3_flipcards/upperpri_question-answer/upp_a9.png");
    this.load.image("card9-22", "game3/image/game3_flipcards/upperpri_question-answer/upp_a15.png");
    this.load.image("card9-11", "game3/image/game3_flipcards/upperpri_question-answer/upp_q15.png");
    this.load.image("card10-11", "game3/image/game3_flipcards/upperpri_question-answer/upp_q3.png");
    this.load.image("card10-22", "game3/image/game3_flipcards/upperpri_question-answer/upp_a3.png");
  }

  create() {
  localStorage.setItem(1, 0);
  localStorage.setItem(2, 0);
  localStorage.setItem("ca", 0);
  localStorage.setItem("wa", 0);
  localStorage.setItem("cc", 0);
  localStorage.setItem("wc", 0);
  localStorage.setItem("click", 0);

    let tick1 = this.add.sprite(420, 340, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick11 = this.add.sprite(1460, 670, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick2 = this.add.sprite(680, 340, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick31 = this.add.sprite(680, 670, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick3 = this.add.sprite(940, 340, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick21 = this.add.sprite(420, 670, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick4 = this.add.sprite(1200, 340, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick41 = this.add.sprite(1200, 670, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick5 = this.add.sprite(1460, 340, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);
    let tick51 = this.add.sprite(940, 670, "tick")
    .setDepth(21)
    .setScale(0.6, 0.6)
    .setVisible(false);

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

    //---------first card (QUESTION 1)------------
var card1_1 = this.add.sprite(420,340, "card6-1")
    .setScale(0.75, 0.75)
    .setInteractive();

    card1_1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card1_1.on("pointerout", function (event) {
      this.clearTint();
    });
    card1_1.on("pointerdown", function() {
        card2_11.setVisible(false);
        card3_11.setVisible(false);
        card4_11.setVisible(false);
        card5_11.setVisible(false);
        localStorage.setItem(1, "card1_1");
        card1_11.setVisible(true);
        if (localStorage.getItem(2) == "card1_2") {
            tick1.setVisible(true);
            tick11.setVisible(true);
            card1_11.setVisible(false);
            card1_22.setVisible(false);
            localStorage.setItem("wa", (localStorage.getItem("wa")+1));
            if (localStorage.getItem("wa") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            card1_11.setVisible(false);
            card2_22.setVisible(false);
            card3_22.setVisible(false);
            card4_22.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });
    //----------------- wip----------
    var card1_11 = this.add.sprite(420,340, "card6-11")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card1_11.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card1_11.on("pointerout", function (event) {
      this.clearTint();
    });
    card1_11.on("pointerdown", function() {
        localStorage.setItem(1, "card1_1");
        if (localStorage.getItem(2) == "card1_2") {
            card1_11.setVisible(false);
            card1_22.setVisible(false);
            tick1.setVisible(true);
            tick11.setVisible(true);
            localStorage.setItem("wa", (localStorage.getItem("wa")+1));
            if (localStorage.getItem("wa") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });


    //---------second card (QUESTION 3)------------
    var card3_1 = this.add.sprite(680,340, "card8-1")
    .setScale(0.75, 0.75)
    .setInteractive();

    card3_1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card3_1.on("pointerout", function (event) {
      this.clearTint();
    });
    card3_1.on("pointerdown", function() {
        card2_11.setVisible(false);
        card1_11.setVisible(false);
        card4_11.setVisible(false);
        card5_11.setVisible(false);
        localStorage.setItem(1, "card3_1");
        card3_11.setVisible(true);
        if (localStorage.getItem(2) == "card3_2") {
            tick2.setVisible(true);
            tick21.setVisible(true);
            card3_11.setVisible(false);
            card3_22.setVisible(false);
            localStorage.setItem("ca", (localStorage.getItem("ca")+1));
            if (localStorage.getItem("ca") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            card3_11.setVisible(false);
            card2_22.setVisible(false);
            card1_22.setVisible(false);
            card4_22.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    var card3_11 = this.add.sprite(680,340, "card8-11")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card3_11.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card3_11.on("pointerout", function (event) {
      this.clearTint();
    });
    card3_11.on("pointerdown", function() {
        localStorage.setItem(1, "card3_1");
        if (localStorage.getItem(2) == "card3_2") {
            card3_11.setVisible(false);
            card3_22.setVisible(false);
            tick2.setVisible(true);
            tick21.setVisible(true);
            localStorage.setItem("ca", (localStorage.getItem("ca")+1));
            if (localStorage.getItem("ca") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------third card (QUESTION 2)------------
    var card2_1 = this.add.sprite(940,340, "card7-1")
    .setScale(0.75, 0.75)
    .setInteractive();

    card2_1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card2_1.on("pointerout", function (event) {
      this.clearTint();
    });
    card2_1.on("pointerdown", function() {
        card1_11.setVisible(false);
        card3_11.setVisible(false);
        card4_11.setVisible(false);
        card5_11.setVisible(false);
        localStorage.setItem(1, "card2_1");
        card2_11.setVisible(true);
        if (localStorage.getItem(2) == "card2_2") {
            tick3.setVisible(true);
            tick31.setVisible(true);
            card2_11.setVisible(false);
            card2_22.setVisible(false);
            localStorage.setItem("cc", (localStorage.getItem("cc")+1));
            if (localStorage.getItem("cc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            card2_11.setVisible(false);
            card1_22.setVisible(false);
            card3_22.setVisible(false);
            card4_22.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------wip------------
    var card2_11 = this.add.sprite(940,340, "card7-11")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card2_11.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card2_11.on("pointerout", function (event) {
      this.clearTint();
    });
    card2_11.on("pointerdown", function() {
        localStorage.setItem(1, "card2_1");
        if (localStorage.getItem(2) == "card2_2") {
            tick3.setVisible(true);
            tick31.setVisible(true);
            card2_11.setVisible(false);
            card2_22.setVisible(false);
            localStorage.setItem("cc", (localStorage.getItem("cc")+1));
            if (localStorage.getItem("cc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------fourth card (QUESTION 4)------------
    var card4_1 = this.add.sprite(1200,340, "card9-1")
    .setScale(0.75, 0.75)
    .setInteractive();

    card4_1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card4_1.on("pointerout", function (event) {
      this.clearTint();
    });
    card4_1.on("pointerdown", function() {
        localStorage.setItem(1, "card4_1");
        card2_11.setVisible(false);
        card3_11.setVisible(false);
        card1_11.setVisible(false);
        card5_11.setVisible(false);
        card4_11.setVisible(true);
        if (localStorage.getItem(2) == "card4_2") {
            tick4.setVisible(true);
            tick41.setVisible(true);
            card4_11.setVisible(false);
            card4_22.setVisible(false);
            localStorage.setItem("wc", (localStorage.getItem("wc")+1));
            if (localStorage.getItem("wc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            card4_11.setVisible(false);
            card2_22.setVisible(false);
            card3_22.setVisible(false);
            card1_22.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------fourth card (QUESTION 4)------------
    var card4_11 = this.add.sprite(1200,340, "card9-11")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card4_11.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card4_11.on("pointerout", function (event) {
      this.clearTint();
    });
    card4_11.on("pointerdown", function() {
        localStorage.setItem(1, "card4_1");
        if (localStorage.getItem(2) == "card4_2") {
            card4_11.setVisible(false);
            card4_22.setVisible(false);
            tick4.setVisible(true);
            tick41.setVisible(true);
            localStorage.setItem("wc", (localStorage.getItem("wc")+1));
            if (localStorage.getItem("wc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

        //---------fifth card (QUESTION 5)------------
    var card5_1 = this.add.sprite(1460,340, "card10-1")
    .setScale(0.75, 0.75)
    .setInteractive();

    card5_1.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card5_1.on("pointerout", function (event) {
      this.clearTint();
    });
    card5_1.on("pointerdown", function() {
        card1_11.setVisible(false);
        card2_11.setVisible(false);
        card3_11.setVisible(false);
        card4_11.setVisible(false);
        card5_11.setVisible(true);
        localStorage.setItem(1, "card5_1");
        if (localStorage.getItem(2) == "card5_2") {
            tick5.setVisible(true);
            tick51.setVisible(true);
            card5_11.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem("click", (localStorage.getItem("click")+1));
            if (localStorage.getItem("click") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            card5_11.setVisible(false);
            card2_22.setVisible(false);
            card3_22.setVisible(false);
            card1_22.setVisible(false);
            card4_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    var card5_11 = this.add.sprite(1460,340, "card10-11")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card5_11.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card5_11.on("pointerout", function (event) {
      this.clearTint();
    });
    card5_11.on("pointerdown", function() {
        localStorage.setItem(1, "card5_1");
        if (localStorage.getItem(2) == "card5_2") {
            card5_11.setVisible(false);
            card5_22.setVisible(false);
            tick5.setVisible(true);
            tick51.setVisible(true);
            localStorage.setItem("click", (localStorage.getItem("click")+1));
            if (localStorage.getItem("click") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(2) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    var card5_22 = this.add.sprite(940,680, "card10-22")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card5_22.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card5_22.on("pointerout", function (event) {
      this.clearTint();
    });
    card5_22.on("pointerdown", function() {
        localStorage.setItem(2, "card5_2");
        if (localStorage.getItem(1) == "card5_1") {
            tick5.setVisible(true);
            tick51.setVisible(true);
            card5_11.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem("click", (localStorage.getItem("click")+1));
            if (localStorage.getItem("click") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
            card5_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------second card (ANSWER FOR CARD 1)------------
    var card1_2 = this.add.sprite(1460,680, "card6-2")
    .setScale(0.75, 0.75)
    .setInteractive();

    card1_2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card1_2.on("pointerout", function (event) {
      this.clearTint();
    });
    card1_2.on("pointerdown", function() {
        card2_22.setVisible(false);
        card3_22.setVisible(false);
        card4_22.setVisible(false);
        card5_22.setVisible(false);
        localStorage.setItem(2, "card1_2");
        card1_22.setVisible(true);
        if (localStorage.getItem(1) == "card1_1") {
            tick11.setVisible(true);
            tick1.setVisible(true);
            card1_11.setVisible(false);
            card1_22.setVisible(false);
            localStorage.setItem("wa", (localStorage.getItem("wa")+1));
            if (localStorage.getItem("wa") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
        }}
        if (localStorage.getItem(1) != 0) {
            card1_22.setVisible(false);
            card2_11.setVisible(false);
            card3_11.setVisible(false);
            card4_11.setVisible(false);
            card5_11.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

//----------------- wip----------
    var card1_22 = this.add.sprite(1460,680, "card6-22")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card1_22.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card1_22.on("pointerout", function (event) {
      this.clearTint();
    });
    card1_22.on("pointerdown", function() {
        localStorage.setItem(2, "card1_2");
        if (localStorage.getItem(1) == "card1_1") {
            tick1.setVisible(true);
            tick11.setVisible(true);
            card1_11.setVisible(false);
            card1_22.setVisible(false);
            localStorage.setItem("wa", (localStorage.getItem("wa")+1));
            if (localStorage.getItem("wa") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
            card1_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------(ANSWER QUESTION 4------------
    var card4_2 = this.add.sprite(1200,680, "card9-2")
    .setScale(0.75, 0.75)
    .setInteractive();

    card4_2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card4_2.on("pointerout", function (event) {
      this.clearTint();
    });
    card4_2.on("pointerdown", function() {
        card2_22.setVisible(false);
        card3_22.setVisible(false);
        card1_22.setVisible(false);
        card5_22.setVisible(false);
        localStorage.setItem(2, "card4_2");
        card4_22.setVisible(true);
        if (localStorage.getItem(1) == "card4_1") {
            tick4.setVisible(true);
            tick41.setVisible(true);
            card4_11.setVisible(false);
            card4_22.setVisible(false);
            localStorage.setItem("wc", (localStorage.getItem("wc")+1));
            if (localStorage.getItem("wc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
        }}

        if (localStorage.getItem(1) != 0) {
            card1_11.setVisible(false);
            card2_11.setVisible(false);
            card3_11.setVisible(false);
            card5_11.setVisible(false);
            card4_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    var card4_22 = this.add.sprite(1200,680, "card9-22")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card4_22.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card4_22.on("pointerout", function (event) {
      this.clearTint();
    });
    card4_22.on("pointerdown", function() {
        localStorage.setItem(2, "card4_2");
        if (localStorage.getItem(1) == "card4_1") {
            tick4.setVisible(true);
            tick41.setVisible(true);
            localStorage.setItem("wc", (localStorage.getItem("wc")+1));
            if (localStorage.getItem("wc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
        card1_11.setVisible(false);
            card2_11.setVisible(false);
            card3_11.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------(ANSWER QUESTION 5------------
    var card5_2 = this.add.sprite(940,680, "card10-2")
    .setScale(0.75, 0.75)
    .setInteractive();

    card5_2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card5_2.on("pointerout", function (event) {
      this.clearTint();
    });
    card5_2.on("pointerdown", function() {
        card2_22.setVisible(false);
        card3_22.setVisible(false);
        card1_22.setVisible(false);
        card4_22.setVisible(false);
        localStorage.setItem(2, "card5_2");
        card5_22.setVisible(true);
        if (localStorage.getItem(1) == "card5_1") {
            tick5.setVisible(true);
            tick51.setVisible(true);
            card5_11.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem("click", (localStorage.getItem("click")+1));
            if (localStorage.getItem("click") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
        }
        if (localStorage.getItem(1) != 0) {
            card1_11.setVisible(false);
            card2_11.setVisible(false);
            card3_11.setVisible(false);
            card4_11.setVisible(false);
            card5_22.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    }});

    //---------(ANSWER QUESTION 3------------
    var card3_2 = this.add.sprite(420,680, "card8-2")
    .setScale(0.75, 0.75)
    .setInteractive();

    card3_2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card3_2.on("pointerout", function (event) {
      this.clearTint();
    });
    card3_2.on("pointerdown", function() {
        card2_22.setVisible(false);
        card1_22.setVisible(false);
        card4_22.setVisible(false);
        card5_22.setVisible(false);
        localStorage.setItem(2, "card3_2");
        card3_22.setVisible(true);
        if (localStorage.getItem(1) == "card3_1") {
            tick2.setVisible(true);
            tick21.setVisible(true);
            card3_11.setVisible(false);
            card3_22.setVisible(false);
            localStorage.setItem("ca", (localStorage.getItem("ca")+1));
            if (localStorage.getItem("ca") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
            card3_22.setVisible(false);
            card2_11.setVisible(false);
            card1_11.setVisible(false);
            card5_11.setVisible(false);
            card4_11.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------(ANSWER QUESTION 2------------
    var card2_2 = this.add.sprite(680,680, "card7-2")
    .setScale(0.75, 0.75)
    .setInteractive();

    card2_2.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card2_2.on("pointerout", function (event) {
      this.clearTint();
    });
    card2_2.on("pointerdown", function() {
        card1_22.setVisible(false);
        card3_22.setVisible(false);
        card4_22.setVisible(false);
        card5_22.setVisible(false);
        localStorage.setItem(2, "card2_2");
        card2_22.setVisible(true);
        if (localStorage.getItem(1) == "card2_1") {
            tick3.setVisible(true);
            tick31.setVisible(true);
            card2_11.setVisible(false);
            card2_22.setVisible(false);
            localStorage.setItem("cc", (localStorage.getItem("cc")+1));
            if (localStorage.getItem("cc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
            card2_22.setVisible(false);
            card1_11.setVisible(false);
            card3_11.setVisible(false);
            card5_11.setVisible(false);
            card4_11.setVisible(false);
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

    //---------wip------------
    var card2_22 = this.add.sprite(680,680, "card7-22")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card2_22.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card2_22.on("pointerout", function (event) {
      this.clearTint();
    });
    card2_22.on("pointerdown", function() {
        localStorage.setItem(2, "card2_2");
        if (localStorage.getItem(1) == "card2_1") {
            tick3.setVisible(true);
            tick31.setVisible(true);
            card2_11.setVisible(false);
            card2_22.setVisible(false);
            localStorage.setItem("cc", (localStorage.getItem("cc")+1));
            if (localStorage.getItem("cc") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

//----------------- wip----------
    var card3_22 = this.add.sprite(420,680, "card8-22")
    .setScale(0.75, 0.75)
    .setVisible(false)
    .setInteractive();

    card3_22.on("pointerover", function (event) {
      this.setTint(0xffae00);
    });
    card3_22.on("pointerout", function (event) {
      this.clearTint();
    });
    card3_22.on("pointerdown", function() {
        localStorage.setItem(2, "card3_2");
        if (localStorage.getItem(1) == "card3_1") {
            tick3.setVisible(true);
            tick31.setVisible(true);
            localStorage.setItem("ca", (localStorage.getItem("ca")+1));
            if (localStorage.getItem("ca") <= 1) {
                localStorage.setItem(0, Number(localStorage.getItem(0))+1);
            }
        }
        if (localStorage.getItem(1) != 0) {
            localStorage.setItem(1, 0);
            localStorage.setItem(2, 0);
        }
    });

//--------game codes------------
    //let whiteboard = this.add.sprite(474,232, 'whiteboard');

    //change the origin to the top-left corner
    bg_e.setPosition(1920 / 2, 860 / 2);
    hd.setOrigin(0, 0);
    money.setOrigin(0, 0);

    name.setOrigin(0, 0);
    //whiteboard.setOrigin(0,0);
    //whiteboard.setScale(0.5,0.54);

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

    spritehomebtn.on("pointerdown", function () {
      var proceed = confirm("Are you sure you want to exit the game?");
      if (proceed) {
        //proceed
        window.location.href = "game3objlower.html";
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

    let spriterb = this.add.sprite(1820, 800, 'rbtn').setInteractive();
    spriterb.setScale(0.65, 0.65);
    spriterb.on('pointerover', function (event) {
        this.setTint(0xffae42);
    });
    spriterb.on('pointerout', function (event) {
        this.clearTint();
    });
    spriterb.on('pointerdown', function() {
        window.location.href = "game3ResultUpper.html";
    });

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
  height: 950,
  width: 1920,
  scene: [question1, question2],
  parent: "canvas",
};

let game = new Phaser.Game(config);
