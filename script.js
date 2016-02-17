var red;
var green;
var blue;
var rgbColor;

var piece;

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


red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';


piece = document.createElement("div");
piece.className = "piece";


setPieceColor(rgbColor);
addPiece(piece);