//Math.random() * (max - min) + min;
//document.getElementById('jeu').innerHTML += ''
var tableauImages = new Array;
var nombreRandom;
var test;
document.getElementById('jeu').innerHTML = '';
nombreRandom = Math.round(Math.random()*(13-0)+0);
tableauImages.push(nombreRandom);
while (tableauImages.length <= 13){
	nombreRandom = Math.round(Math.random()*(13-0)+0);
	test = true;
	for( var i = 0; i<tableauImages.length;i++){
		if(nombreRandom == tableauImages[i] ){
			test = false;
		}

	}
	if(test == true){
		tableauImages.push(nombreRandom);
	}
}

for(var j = 0; j<tableauImages.length;j++){
	document.getElementById('jeu').innerHTML += "<div onclick='jeu("+tableauImages[j]+")' class='fond'><img class='hidden' id='"+tableauImages[j]+"' src='img/"+tableauImages[j]+".jpg'></div>";
}

var carteRetourne = 0;
var hidden = new Array;
var test2 = true;
var retourne = new Array;
var i;
var indice;

for(var g = 0; g<14; g++){
	retourne.push(false);
}

for(var k = 0; k<14; k++){
	hidden.push(false);
}


function jeu(x){
	if($(document.getElementById(x)).attr('class') == "hidden" && hidden[x] == false){
		if($(document.getElementById(x+7)).attr('class')){
			document.getElementById(x).className = "clear";
			retourne[x] = true;
			carteRetourne ++;
			setTimeout(function(){
				if(carteRetourne == 2){
					if($(document.getElementById(x+7)).attr('class') == "clear"){
						hidden[x] = true;
						hidden[x+7] = true;
						for(var h = 0; h<14; h++){
							if(hidden[h] == false){
								test2 = false;
							}
						}
						if(test2 == true){
							alert("GG EZ");
						}
						else{
							test2 = true;
							carteRetourne = 0;
							retourne[x] = false;

							for(var f = 0; f<14; f++){
								if(retourne[f] == true){
									indice = f;
									retourne[f] = false;
								}
							}
						}
					}else{
							alert("Pas les bonnes cartes !");
							carteRetourne = 0;
							retourne[x] = false;
							document.getElementById(x).className = "hidden";
							for(var f = 0; f<14; f++){

								if(retourne[f] == true){
									indice = f;
									retourne[f] = false;
								}
							}
							document.getElementById(indice).className = "hidden";
						}
				}
	  		}, 500);
			
		}
		else{
			document.getElementById(x).className = "clear";
			retourne[x] = true;
			carteRetourne ++;
			setTimeout(function(){
				if(carteRetourne == 2){
					if($(document.getElementById(x-7)).attr('class') == "clear"){
						hidden[x] = true;
						hidden[x-7] = true;
						for(var h = 0; h<14; h++){
							if(hidden[h] == false){
								test2 = false;
							}
						}
						if(test2 == true){
							alert("GG EZ");
						}
						else{
							test2 = true;
							carteRetourne = 0;
							retourne[x] = false;
							for(var f = 0; f<14; f++){
								if(retourne[f] == true){
									indice = f;
									retourne[f] = false;
								}
							}
						}
					}else{
							alert("Pas les bonnes cartes !");
							carteRetourne = 0;
							retourne[x] = false;
							document.getElementById(x).className = "hidden";
							for(var f = 0; f<14; f++){
								
								if(retourne[f] == true){
									indice = f;
									retourne[f] = false;
								}
							}
							document.getElementById(indice).className = "hidden";
						}
				}
	  		}, 500);
		}
	}
}