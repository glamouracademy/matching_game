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

	for (i = 1; i < 8; i += 1 ){
		color = makeRandomColor();
		colorOptions.push(color);
	}
	return colorOptions
}

//sets piece color into original div
function setPieceColor(randomColor) {
	var outputDiv = document.getElementById('original');	
	outputDiv.style.backgroundColor = randomColor;
}

//create divs for each color
function createOptions(colors) {
	for ( i = 1; i < colors.length; i += 1 ) {

		createOptionDiv();

		//hook into markup
		var outputOption = document.getElementById('options');
		outputOption.appendChild(option);

		//assign style to container div
		var containerWidth = i * 210;
		outputOption.style.width = containerWidth + "px";
	}
}

//create option div with styles
function createOptionDiv() {
		option = document.createElement("div");
		option.className = "piece-style";
		option.style.float = "left";
		option.style.margin = ".125rem";
		option.style.backgroundColor = colors[i];
		return option;
}

//ask user for guess
function guess() {
	var correctCounter = 0;
	var incorrectCounter = 0;

	//user guess
	var answer = prompt("Do any of the following match the colour above? Type Y or N.");
	answer = answer.toUpperCase();

	//create an options array
	colors.shift();

	//conditional to check user guess
	if ((colors.indexOf(randomColor) === -1) && answer === 'Y') {
		incorrectCounter += 1;
	} else if ((colors.includes(randomColor)) && answer == 'N') {
		incorrectCounter += 1;
	} else {
		correctCounter += 1;
	}
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
createOptions(colors);
guess(colors);



