const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelectorAll('[data-testid="colorOption"]');
const gameInstructions = document.querySelector('[data-testid="gameInstructions"]');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreCounter = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

let targetColor;
let score = 0;

// Function to start a new game
function startNewGame() {
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;
  score = 0;
  scoreCounter.textContent = score;
  gameStatus.textContent = "Guess the correct color!";
  colorOptions.forEach(option => {
    option.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    option.addEventListener('click', checkGuess);
  });
}

// Function to check the user's guess
function checkGuess(event) {
  const guessedColor = event.target.style.backgroundColor;
  if (guessedColor === targetColor) {
    gameStatus.textContent = "Correct!";
    score++;
    scoreCounter.textContent = score;
  } else {
    gameStatus.textContent = "Wrong, try again!";
  }
  setTimeout(startNewGame, 1000);
}

// Start a new game when the page loads or when the "New Game" button is clicked
newGameButton.addEventListener('click', startNewGame);

// Start the first game
startNewGame();
