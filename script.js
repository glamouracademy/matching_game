var rgbColor;
var piece;
var answer;

var correctCounter = 0;
var incorrectCounter = 0;

function setPieceColor(rgbColor) {
	var outputDiv = document.getElementById('original');	
	outputDiv.style.backgroundColor = rgbColor;
}

//adds piece to options and set background color of piece
function addPiece(piece) {
	var outputChoices = document.getElementById('options');
	outputChoices.appendChild(piece);
	piece.style.backgroundColor = rgbColor;
}

//create random color
function createRandomColor() {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';	
}

//create a piece
function createDiv() {
	piece = document.createElement("div");
	piece.className = "piece";
}

//ask user for input
while (true) {
	answer = prompt("Do the pieces match? Type Y or N.")
	answer = answer.toUpperCase();
	if (answer === 'Y') {
		correctCounter += 1;
		getTally();
		break;
	} else {
		incorrectCounter += 1;
		getTally();
		break;
	}
}

//display tally
function getTally() {
	document.write("You got " + correctCounter + " correct and " + incorrectCounter + " incorrect.");
}
	

createRandomColor();
createDiv();
setPieceColor(rgbColor);
addPiece(piece);