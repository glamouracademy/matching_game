var rgbColor;
var rgbColor2;
var piece;
var answer;
var correctCounter = 0;
var incorrectCounter = 0;
var colorOptions = [];

//sets piece color
function setPieceColor(rgbColor) {
	var outputDiv = document.getElementById('original');	
	outputDiv.style.backgroundColor = colorOptions[0];
}

//adds piece to options and set background color of piece
function addPiece(piece) {
	var outputChoices = document.getElementById('options');
	outputChoices.appendChild(piece);
	piece.style.backgroundColor = colorOptions[1];
}


//loop through creating random colors
function createRandomColor() {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';	
	colorOptions.push(rgbColor);
}


// //create random color
// function createRandomColor() {
// 	var red = Math.floor(Math.random() * 256 );
// 	var green = Math.floor(Math.random() * 256 );
// 	var blue = Math.floor(Math.random() * 256 );
// 	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';	
// }

// //create random color
// function createRandomColor2() {
// 	var red = Math.floor(Math.random() * 256 );
// 	var green = Math.floor(Math.random() * 256 );
// 	var blue = Math.floor(Math.random() * 256 );
// 	rgbColor2 = 'rgb(' + red + ',' + green + ',' + blue + ')';	
// }


//create a piece
function createDiv() {
	piece = document.createElement("div");
	piece.className = "piece";
}

//ask user for input
window.onload = function () {
	answer = prompt("Do the pieces match? Type Y or N.");
	answer = answer.toUpperCase();
	
	if (colorOptions.includes(rgbColor) && answer === 'Y') {
		correctCounter += 1;
		getTally(correctCounter);
		
	} else if (colorOptions.includes(rgbColor) === false && answer === 'N') {
		correctCounter += 1;
		getTally();
		
	} else {
		incorrectCounter += 1;
		getTally();	
	}
}


//get results by id
function getTally() {
	var tally = document.getElementById("results");
	tallyDiv = "<p>You got " + correctCounter + " correct and " + incorrectCounter + " incorrect.</p>";
	tally.innerHTML = tallyDiv;
}



createRandomColor();
createRandomColor();
createDiv();
setPieceColor(rgbColor);
addPiece(piece);






