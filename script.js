// All consts and variables declared here

// Structure Items:

const startButton = document.querySelector('.splash-screen-start-button');
const splashScreen = document.querySelector('#splash-screen');
const mazeScreen = document.querySelector('#maze-screen');
const mazeContainer = document.querySelector('.maze-container');
const startZone = document.querySelector('.start-zone');
const collision = document.querySelectorAll('.collision');

// Animated Images:

const octopus = document.querySelector('.octopus');
const scaryFish = document.querySelector('.scary-fish');
const crab = document.querySelector('.crab');

// Makes splash screen disappear and maze screen appear when start button is clicked

startButton.addEventListener('click', () => {
    splashScreen.style.display = 'none';
    mazeScreen.style.display = 'block';
    startZone.addEventListener('mouseleave', beginGame);
})

// Animations

const octopusMove = octopus.animate([
        {transform: 'translateY(-94px)'},
        {transform: 'translateY(-3px'}
    ], {
        duration: 1500,
        direction: "alternate",
        iterations: Infinity
    });
octopusMove.pause();

const scaryFishMove = scaryFish.animate([
        {transform: 'translateX(-10px)'},
        {transform: 'translateX(171px'}
    ], {
        duration: 2500,
        direction: "alternate",
        iterations: Infinity
    });
scaryFishMove.pause();

const crabMove = crab.animate([
    {transform: 'translateX(3px)'},
    {transform: 'translateX(-104px'}
], {
    duration: 1000,
    direction: "alternate",
    iterations: Infinity
});
crabMove.pause();

// Animations begin once cursor leaves start zone

function beginGame() {
        octopusMove.play();
        scaryFishMove.play();
}

function collisionResult() {
    octopusMove.pause();
    scaryFishMove.pause();
}

// Collisions

// collision.addEventListener('mouseenter', () => {
//     octopusMove.pause();
//     scaryFishMove.pause();
// });


