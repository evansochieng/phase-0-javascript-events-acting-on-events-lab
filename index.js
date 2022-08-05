// Your code here

// Function 1 (moveDodgerLeft())
// Declare variable - div
const dodger = document.getElementById("dodger");

// Define function to move the dodger to the left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
// Wire the function to the event listener
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  // Assignment
  // Function 2 (moveDodgerRight())

  // Create the move dodger right function
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left < 360 ){
        dodger.style.left = `${left + 1}px`;
    }
  }

  // Wire the function to the event listener
  document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowLeft"){
        moveDodgerLeft();
    } else if (event.key === "ArrowRight"){
        moveDodgerRight();
    }
  });

  // Try out something boy
  // Get the css styling properties
  const game = document.getElementById('game');

  const styling = getComputedStyle(game);
  // Get width of that element
  let gameWidth = styling.getPropertyValue('width');
  gameWidth = gameWidth.replace('px', '');
  gameWidth = parseInt(gameWidth.replace('px', ''), 10);

  // With this I can modify the condition to check 'dodge' 
  //doesn't disappear


