var rgbColor;
var piece;
var answer;
var correctCounter = 0;
var incorrectCounter = 0;
var colorOptions = [];

//make a random color
function makeRandomColor() {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';	
	return rgbColor;
}

//color factory
function makeColors() {
	var colorOptions = [];
	var color;

	for (i = 1; i < 5; i += 1 ){
		color = makeRandomColor();
		colorOptions.push(color);
	}
	return colorOptions
}

//sets piece color into original div
function setPieceColor(randomColor) {
	var outputDiv = document.getElementById('original');	
	outputDiv.style.backgroundColor = randomColor;
	console.log("What color am I?" + randomColor);
}





//adds piece to options and set background color of piece
function addPiece(piece) {
	var outputChoices = document.getElementById('options');
	outputChoices.appendChild(piece);
	piece.style.backgroundColor = colorOptions[1];
}



//loop through creating random colors
function createRandomColor() {
	for ( i = 0; i < 2; i += 1 ) {
		
		colorOptions.push(rgbColor);
	}
}



//create a piece
function createDiv() {
	piece = document.createElement("div");
	piece.className = "piece";
}

//ask user for input
// window.onload = function () {
// 	answer = prompt("Do the pieces match? Type Y or N.");
// 	answer = answer.toUpperCase();
	
// 	if (colorOptions.includes(rgbColor) && answer === 'Y') {
// 		correctCounter += 1;
// 		getTally();
		
// 	} else if (colorOptions.includes(rgbColor) === false && answer === 'N') {
// 		correctCounter += 1;
// 		getTally();
		
// 	} else {
// 		incorrectCounter += 1;
// 		getTally();	
// 	}
// }

//get results by id
// function getTally() {
// 	var tally = document.getElementById("results");
// 	tallyDiv = "<p>You got " + correctCounter + " correct and " + incorrectCounter + " incorrect.</p>";
// 	tally.innerHTML = tallyDiv;
// }

// createRandomColor();
// createDiv();
// setPieceColor(rgbColor);
// addPiece(piece);


var randomColor = makeRandomColor();
colors = makeColors();
setPieceColor(randomColor);



