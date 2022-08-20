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

// First I extract the widths of the game div and the dodger width
// Try out something boy
// Get the css styling properties
const game = document.getElementById('game');

const gameDivStyling = getComputedStyle(game); // This gives css styling for this object
// Get width of that element (game div)
let gameWidth = gameDivStyling.getPropertyValue('width');
gameWidth = gameWidth.replace('px', '');
gameWidth = parseInt(gameWidth.replace('px', ''), 10);

// This works
// With this I can modify the condition to check 'dodge' 
//doesn't disappear

// Remove hard-coding from moveDodgerRight() Function
// Get the width of the dodger div
const dodgerDivStyling = getComputedStyle(dodger);

let dodgerWidth = dodgerDivStyling.getPropertyValue('width');
dodgerWidth = dodgerWidth.replace('px', '');
dodgerWidth = parseInt(dodgerWidth, 10);

// Now the condition that I will be checking is:
// if (left < (gameWidth - dodgerWidth))

  // Create the move dodger right function
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left < 360){ // Check if the doger is within the container
        dodger.style.left = `${left + 1}px`; // Move the dodger right by adding 1 
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

// // Try out something boy
// // Get the css styling properties
// const game = document.getElementById('game');

// const gameDivStyling = getComputedStyle(game); // This gives css styling for this object
// // Get width of that element (game div)
// let gameWidth = gameDivStyling.getPropertyValue('width');
// gameWidth = gameWidth.replace('px', '');
// gameWidth = parseInt(gameWidth.replace('px', ''), 10);

// // This works
// // With this I can modify the condition to check 'dodge' 
// //doesn't disappear

// // Remove hard-coding from moveDodgerRight() Function
// // Get the width of the dodger div
// const dodgerDivStyling = getComputedStyle(dodger);

// let dodgerWidth = dodgerDivStyling.getPropertyValue('width');
// dodgerWidth = dodgerWidth.replace('px', '');
// dodgerWidth = parseInt(dodgerWidth, 10);

// // Now the condition that I will be checking is:
// // if (left < (gameWidth - dodgerWidth))
// I don't know why the test is failing though

//Good Boy!
// Always minimize hard-coding in your programs. Be flexible as much as possible man!