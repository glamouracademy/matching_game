var red;
var green;
var blue;
var rgbColor;

function print(rgbColor) {
	var outputDiv = document.getElementById('original');	
	outputDiv.style.backgroundColor = rgbColor;

}

red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';


print(rgbColor);