var rgbColor;
var piece;
var answer;

//sets the piece color for the markup
function setPieceColor(rgbColor) {
	var outputDiv = document.getElementById('original');	
	outputDiv.style.backgroundColor = rgbColor;
}

//adds piece to options and set background color of piece
function addPiece(piece) {
	var outputChoices = document.getElementById('options');
	outputChoices.appendChild(piece);
	piece.style.backgroundColor = rgbColor2;
}

//create random color for original
function createRandomColor() {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';	
}

//create random color for option
function createRandomOptionColor() {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	rgbColor2 = 'rgb(' + red + ',' + green + ',' + blue + ')';	
}

//create a piece div
function createDiv() {
	piece = document.createElement("div");
	piece.className = "piece";
}

//board set up
createRandomColor();
createRandomOptionColor();
createDiv();
setPieceColor(rgbColor);
addPiece(piece);





// var correctCounter = 0;
// var incorrectCounter = 0;


// //ask user for input
// while (true) {
// 	answer = prompt("Do the pieces match? Type Y or N.")
// 	answer = answer.toUpperCase();
// 	if (answer === 'Y') {
// 		correctCounter += 1;
// 		getTally(correctCounter);
// 		break;
// 	} else {
// 		incorrectCounter += 1;
// 		getTally();
// 		break;
// 	}
// }

// function getTally() {
// 	document.write("<p>You got " + correctCounter + " correct and " + incorrectCounter + " incorrect.</p>");
// }



