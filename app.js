const cards = [
    // {
    //     'name': 'Gilly 1',
    //     'img': './images/Gilly 1.png',
    // },
    // {
    //     'name': 'Gilly 2',
    //     'img': './images/Gilly 2.png',
    // },
    {
        'name': 'Gilly 3',
        'img': './images/Gilly 3.png',
    },
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
    {
        'name': 'Lady 2',
        'img': './images/Lady 2.png',
    },
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
    {
        'name': 'Ralphie Jr 1',
        'img': './images/Ralphie Jr 1.png',
    },
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
    {
        'name': 'Ralphie Sr 3',
        'img': './images/Ralphie Sr 3.png',
    },
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

// Duplicate array to create a match for each card
let gameGrid = cards.concat(cards).sort(() => 0.5 - Math.random());
let allMatches = document.querySelectorAll('.match');

// count to ensure two cards selected only
let count = 0;
let firstGuess = '';
let secondGuess = '';
// so the same element cannot be selected twice
let previousTarget = null;

// Grab the div with an id of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document .createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);

// For each item in the cards array
gameGrid.forEach(item => {
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

// add match css
const match = () => {
    let selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.add('match');
    });
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
};

// Add event listener to grid
grid.addEventListener('click', e => {
    // The event target is our clicked item
    const clicked = e.target;

    // Do not allow the grid section itself to be selected
    // Only select divs inside the grid
    // Do not allow the same element to be selected
    if (clicked.nodeName === 'SECTION' || 
        clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected') ||
        clicked.parentNode.classList.contains('match')
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
