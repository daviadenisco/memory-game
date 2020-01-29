const cards = [
    // {
    //     'name': 'Gilly 1',
    //     'img': './images/Gilly 1.png',
    // },
    // {
    //     'name': 'Gilly 2',
    //     'img': './images/Gilly 2.png',
    // },
    // {
    //     'name': 'Gilly 3',
    //     'img': './images/Gilly 3.png',
    // },
    {
        'name': 'Gilly 4',
        'img': './images/Gilly 4.png',
    },
    // {
    //     'name': 'Gilly 5',
    //     'img': './images/Gilly 5.png',
    // },
    {
        'name': 'Gilly 6',
        'img': './images/Gilly 6.png',
    },
    {
        'name': 'Gilly 7',
        'img': './images/Gilly 7.png',
    },
    // {
    //     'name': 'Gilly 8',
    //     'img': './images/Gilly 1.png',
    // },
    {
        'name': 'Gilly 9',
        'img': './images/Gilly 9.png',
    },
    // {
    //     'name': 'Gilly 10',
    //     'img': './images/Gilly 10.png',
    // },
    // {
    //     'name': 'Lady 1',
    //     'img': './images/Lady 1.png',
    // },
    // {
    //     'name': 'Lady 2',
    //     'img': './images/Lady 2.png',
    // },
    {
        'name': 'Lady 3',
        'img': './images/Lady 3.png',
    },
    {
        'name': 'Lady 4',
        'img': './images/Lady 4.png',
    },
    // {
    //     'name': 'Lady 5',
    //     'img': './images/Lady 5.png',
    // },
    // {
    //     'name': 'Lady 6',
    //     'img': './images/Lady 6.png',
    // },
    {
        'name': 'Lady 7',
        'img': './images/Lady 7.png',
    },
    // {
    //     'name': 'Lady 8',
    //     'img': './images/Lady 8.png',
    // },
    {
        'name': 'Lady 9',
        'img': './images/Lady 9.png',
    },
    // {
    //     'name': 'Lady 10',
    //     'img': './images/Lady 10.png',
    // },
    // {
    //     'name': 'Ralphie Jr 1',
    //     'img': './images/Ralphie Jr 1.png',
    // },
    {
        'name': 'Ralphie Jr 2',
        'img': './images/Ralphie Jr 2.png',
    },
    // {
    //     'name': 'Ralphie Jr 3',
    //     'img': './images/Ralphie Jr 3.png',
    // },
    {
        'name': 'Ralphie Jr 4',
        'img': './images/Ralphie Jr 4.png',
    },
    {
        'name': 'Ralphie Jr 5',
        'img': './images/Ralphie Jr 5.png',
    },
    // {
    //     'name': 'Ralphie Jr 6',
    //     'img': './images/Ralphie Jr 6.png',
    // },
    {
        'name': 'Ralphie Jr 7',
        'img': './images/Ralphie Jr 7.png',
    },
    // {
    //     'name': 'Ralphie Jr 8',
    //     'img': './images/Ralphie Jr 8.png',
    // },
    // {
    //     'name': 'Ralphie Jr 9',
    //     'img': './images/Ralphie Jr 9.png',
    // },
    // {
    //     'name': 'Ralphie Jr 10',
    //     'img': './images/Ralphie Jr 10.png',
    // },
    // {
    //     'name': 'Ralphie Sr 1',
    //     'img': './images/Ralphie Sr 1.png',
    // },
    // {
    //     'name': 'Ralphie Sr 2',
    //     'img': './images/Ralphie Sr 2.png',
    // },
    // {
    //     'name': 'Ralphie Sr 3',
    //     'img': './images/Ralphie Sr 3.png',
    // },
    // {
    //     'name': 'Ralphie Sr 4',
    //     'img': './images/Ralphie Sr 4.png',
    // },
    {
        'name': 'Ralphie Sr 5',
        'img': './images/Ralphie Sr 5.png',
    },
    {
        'name': 'Ralphie Sr 6',
        'img': './images/Ralphie Sr 6.png',
    },
    {
        'name': 'Ralphie Sr 7',
        'img': './images/Ralphie Sr 7.png',
    },
    {
        'name': 'Ralphie Sr 8',
        'img': './images/Ralphie Sr 8.png',
    },
    // {
    //     'name': 'Ralphie Sr 9',
    //     'img': './images/Ralphie Sr 9.png',
    // },
    // {
    //     'name': 'Ralphie Sr 10',
    //     'img': './images/Ralphie Sr 10.png',
    // },
];

let shuffledCards = cards.concat(cards);
let gameGrid;
// count to ensure two cards selected only
let count = 0;
let firstGuess = '';
let secondGuess = '';
// so the same element cannot be selected twice
let previousTarget = null;
let totalMatches = 0;
let guesses = 0;
let timer = document.getElementById('timer');
let interval;
let totalGameTime;
let second = 0;
let secondToBeat = 0;
let minute = 0;
let minuteToBeat = 0;
let hour = 0;
let totalGuesses = document.getElementById('guesses-accumulator');
let matches = document.getElementById('match-accumulator');
let timeToBeat = document.getElementById('time-to-beat');
let guessesToBeat = document.getElementById('guesses-to-beat');
let gameOverModal = document.getElementById('game-over-modal');
let keepPlaying = document.getElementById('keep-playing');
let playButton = document.getElementById('play');
let guessesMessage = document.getElementById('guesses-message');
let timeMessage = document.getElementById('time-message');
let newGameButton = document.getElementById('new-game');
let beatTime = document.getElementById('beat-time');
let beatGuesses = document.getElementById('beat-guesses');
let flip = new Audio();
flip.src = 'Card-flip-sound-effect/Card-flip-sound-effect.mp3';
let correct = new Audio();
correct.src = 'Bing-sound/Bing-sound.mp3';
let wrong = new Audio();
wrong.src = 'Deep-error-tone-sound-effect/Deep-error-tone-sound-effect.mp3';
let finish = new Audio();
finish.src = 'Quiz-correct-sound-with-applause/Quiz-correct-sound-with-applause.mp3';
// Grab the div with an id of root
const game = document.getElementById('game');
// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
// Append the grid section to the game div
game.appendChild(grid);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

startGame();

function startGame() {
    // Duplicate array to create a match for each card
    // gameGrid = cards.concat(cards).sort(() => 0.5 - Math.random());
    shuffle(shuffledCards);
    gameGrid = shuffledCards;
    buildGameGrid();
};

function restartGame() {
    let matched = document.querySelectorAll('.match');
    matched.forEach(card => {
        card.remove(card);
        // card.classList.remove('match');
        // card.classList.remove('selected');
        // card.parentNode.removeChild();
        // console.log("card.parentNode:", card.parentNode.child);
    });
    shuffle(shuffledCards);
    gameGrid = shuffledCards;
    buildGameGrid();
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;
    totalMatches = 0;
    matches.innerHTML = 0;
    guesses = 0;
    totalGuesses.innerHTML = 0;
    timer.innerHTML = '0 mins 0 secs';
    stopTimer();
};

// reset the guesses
const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    let selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.remove('selected');
    });
    wrong.play();
};

function buildGameGrid() {
    // For each item in the cards array
    gameGrid.forEach(item => {
        // console.log('item: ', item);
        // Create a div
        const card = document.createElement('div');
        // Apply a card class to that div
        card.classList.add('card');
        // Set the data-name attribut of the div to the cards array name
        card.dataset.name = item.name;
        // create card front
        const front = document.createElement('div');
        front.classList.add('front');
        // create card back
        const back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = `url('${item.img}')`;
        back.style.backgroundSize = 'contain';
        // Apply the background image of the div to the cards array image
        // card.style.backgroundImage = `url('${item.img}')`;
        card.style.backgroundSize = 'contain';
        // Append the div to the grid section
        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });
};

// add match css
const match = () => {
    correct.play();
    let selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.add('match');
    });
    totalMatches++;
    setMatches();
    checkTotalMatches();
};

// set matches
const setMatches = () => {
    matches.innerHTML = totalMatches;
};

function addMove() {
    // guesses++;
    totalGuesses.innerHTML = guesses;
}

// Add event listener to grid
grid.addEventListener('click', e => {
    flip.play();
    // The event target is our clicked item
    const clicked = e.target;
    // Do not allow the grid section itself to be selected
    // Only select divs inside the grid
    // Do not allow the same element to be selected
    if (clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected') ||
        clicked.parentNode.classList.contains('match') ||
        !clicked.parentNode.classList.contains('card')
        ) {
        return;
    };
    // count to ensure two cards selected only
    if (count < 2) {
        count++;
        if (count === 1) {
            // Assign first guess
            firstGuess = clicked.parentNode.dataset.name;
            // add selected class
            clicked.parentNode.classList.add('selected');
        } else {
            // assign second guess
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        };
        // if both guesses are not empty
        if (firstGuess && secondGuess) {
            guesses++;
            if (guesses === 1) {
                startTimer();
            }
            addMove();
            // and the first guess matches the second match
            if (firstGuess === secondGuess) {
                // run the match function
                setTimeout(match, 1000);
            }
            setTimeout(resetGuesses, 1000);
        };
        // set previous target to clicked
        previousTarget = clicked;
    };
});

newGameButton.addEventListener("click", function(e){
    setTimeout(() => {
        window.location.reload();
    }, 200)
});

function startTimer() {
    interval = setInterval(function(){
        timer.innerHTML = `${minute} mins ${second} secs`;
        second++;
        if(second === 60) {
            minute++;
            second = 0;
        }
        if(minute === 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
};

function stopTimer() {
    minute = 0;
    second = 0;
    hour = 0;
    clearInterval(interval);
    timer.innerHTML = `${minute} mins ${second} secs`;
}

function checkTotalMatches() {
    if (totalMatches === 16) {
        endGame();
    };
};

function endGame() {   
    // guessesToBeat is greater than zero and totalGuesses is less than guesses to beat
    if (guessesToBeat.innerHTML > 0 && totalGuesses.innerHTML < guessesToBeat.innerHTML) {
        // set guessesToBeat to totalGuesses
        guessesToBeat.innerHTML = totalGuesses.innerHTML;
    } else {
        guessesToBeat.innerHTML = totalGuesses.innerHTML;
    };

    if (secondToBeat > 0 || minuteToBeat > 0) {
        if (second <= secondToBeat && minute <= minuteToBeat) {
            secondToBeat = second;
            minuteToBeat = minute;
        }
    } else if (secondToBeat === 0 && minuteToBeat === 0) {
        secondToBeat = second;
        minuteToBeat = minute;
    };
    guessesMessage.innerHTML = `You found 16 matches using ${guessesToBeat.innerHTML} guesses.`;
    timeMessage.innerHTML = `It took you ${minuteToBeat} minutes and ${secondToBeat} seconds.`; 
    
    timeToBeat.innerHTML = `${minuteToBeat} mins ${secondToBeat} secs`;
    setTimeout(() => {
        finish.play();
        gameOverModal.classList.remove('hide');
        beatGuesses.classList.remove('hide');
        beatTime.classList.remove('hide');
        clearInterval(interval);
        closeModal();
    }, 1000);
};

function closeModal() {
    playButton.addEventListener('click', function() {
        gameOverModal.classList.add('hide');
        restartGame();
    });
};