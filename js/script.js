//Math.random() * (max - min) + min;
//document.getElementById('jeu').innerHTML += ''
var tableauImages = new Array;
var nombreRandom;
var test;
nombreRandom = Math.round(Math.random()*(6-0)+0);
tableauImages.push(nombreRandom);
while (tableauImages.length <= 6){
	nombreRandom = Math.round(Math.random()*(6-0)+0);
	test = true;
	for( i = 0; i<tableauImages.length;i++){
		if(nombreRandom == tableauImages[i]){
			test = false;
		}
	}
	if(test == true){
		tableauImages.push(nombreRandom);
	}
}
alert(tableauImages);