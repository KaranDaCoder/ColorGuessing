//alert("CONNECTED!");
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplayed = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var btnReset = document.querySelector("#resetBtn");
var btnEasy = document.querySelector("#btnEasy");
var btnHard = document.querySelector("#btnHard");



colorDisplayed.textContent = pickedColor;
// Easy and Hard Button Events;

btnEasy.addEventListener("click" , function(){
        messageDisplay.textContent = "";
        btnEasy.classList.add("selected");
        btnHard.classList.remove("selected");
        numSquares = 3;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        // Change colorDisplay to match picked color;
        colorDisplayed.textContent = pickedColor;
        // change color of tiles
        for (var i = 0 ; i < squares.length; i++){
          if(colors[i]){
              squares[i].style.background = colors[i];
          } else {
            squares[i].style.display ="none";
          }
        }
});

btnHard.addEventListener("click" , function(){
        messageDisplay.textContent = "";
        btnEasy.classList.remove("selected");
        btnHard.classList.add("selected");
        numSquares = 6;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        // Change colorDisplay to match picked color;
        colorDisplayed.textContent = pickedColor;
        // change color of tiles
        for (var i = 0 ; i < squares.length; i++){
          squares[i].style.background = colors[i];
          squares[i].style.display = "block";
        }
});

// Reset Event
btnReset.addEventListener("click" , function() {
  // pick new random colors
  colors = generateRandomColors(numSquares);
  // pick a new color to choose
  pickedColor = pickColor();
  // Change colorDisplay to match picked color;
  colorDisplayed.textContent = pickedColor;
  // change color of tiles
  for (var i = 0 ; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  header.style.background = "steelblue";
  messageDisplay.textContent = "";
});

  for(var i = 0 ; i < colors.length; i++) {
// Add colors to squares
      squares[i].style.background = colors[i];
      // Add event listeners
      squares[i].addEventListener("click" , function(){
// Grab color of clicked square
      var clickedColor = this.style.background;
    console.log(clickedColor , pickedColor);
      if(clickedColor === pickedColor) {
        // alert("CORRECT!");
        messageDisplay.textContent = "Correct!";
        btnReset.textContent = "Play Again";
        changeColors(clickedColor);
        header.style.background = clickedColor;
      } else {
      this.style.background = "black";
      messageDisplay.textContent = "Try Again";
      }
      });
  }
// Change the colors of other tiles when right color picked
function changeColors(color) {
    for(var i = 0 ; i <colors.length ; i++) {
      squares[i].style.background = color;
    }
}
// Pick a random number from the array of colors;
function pickColor() {
        var randomNum = Math.floor(Math.random()*colors.length);
        return colors[randomNum];
}

// generate random colors Tiles
function generateRandomColors(num) {
  // make an array
  var arr = [];
  // add num random colors to array;
  for( var i = 0 ; i < num ; i++) {
    // Push the arrayr
    arr.push(randomColors());

  }
  // return array
  return arr;
}
// Generate random color in RGB format;
function randomColors() {
        // Random color for red
        var random_Red = Math.floor(Math.random()*(255 -0) -0);
        // Random color for Green
        var random_Green = Math.floor(Math.random()*(255 -0) -0);
        // Random color for Blue
        var random_Blue = Math.floor(Math.random()*(255 -0) -0);
        // Final randomColor
        return "rgb("+random_Red+ ", "+random_Green+", "+random_Blue+")";
}
