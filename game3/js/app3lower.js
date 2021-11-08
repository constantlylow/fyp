const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let flip = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  // let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  // isMatch ? disableCards() : unflipCards();

  if (firstCard.dataset.framework === secondCard.dataset.framework)
  {
    disableCards();
    flip++;

    if (flip == 5)
    {
      extra();
      location.replace('./game3ResultLower.html');
    }
  }
  else
  {
    unflipCards();
  }
}

function extra(){
	var time = localStorage.getItem('time');
	time = time.replaceAll("sec", "");
	var number = Number(time);
	var money = Number(localStorage.getItem('0'));
	var total = 0;
	if (number < 21)
	{
		total = Number(money + 2).toFixed(2);
	}
	else if (number < 36)
	{
		total = Number(money + 1).toFixed(2);
	}
	else
	{
		total = Number(money).toFixed(2);
	}

	localStorage.setItem('0', total);
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 8);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));






// const cards = document.querySelectorAll('.memory-card');

// let hasFlippedCard = false;
// let lockBoard = false;
// let firstCard, secondCard;

// function flipCard() {
//   if (lockBoard) return;
//   if (this === firstCard) return;

//   this.classList.add('flip');

//   if (!hasFlippedCard) {
//     hasFlippedCard = true;
//     firstCard = this;

//     return;
//   }

//   secondCard = this;
//   checkForMatch();
// }

// function checkForMatch() {
//   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

//   isMatch ? disableCards() : unflipCards();
// }

// function disableCards() {
//   firstCard.removeEventListener('click', flipCard);
//   secondCard.removeEventListener('click', flipCard);

//   resetBoard();
// }

// function unflipCards() {
//   lockBoard = true;

//   setTimeout(() => {
//     firstCard.classList.remove('flip');
//     secondCard.classList.remove('flip');

//     resetBoard();
//   }, 1500);
// }

// function resetBoard() {
//   [hasFlippedCard, lockBoard] = [false, false];
//   [firstCard, secondCard] = [null, null];
// }

// (function shuffle() {
//   cards.forEach(card => {
//     let randomPos = Math.floor(Math.random() * 10);
//     card.style.order = randomPos;
//   });
// })();

// cards.forEach(card => card.addEventListener('click', flipCard));
