//Math.random() * (max - min) + min;
//document.getElementById('jeu').innerHTML += ''
var tableauImages = new Array;
var nombreRandom;
var test1;
var test2;
var hidden = new Array;
var retourne = new Array;
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
	document.getElementById('jeu').innerHTML += "<div class='fond'><img class='hidden' id='"+tableauImages[j]+"' src='img/"+tableauImages[j]+".jpg'></div>";
}

for( var k = 0; k<14; k++){
	hidden.push(true);
}
for( var k = 0; k<14; k++){
	retourne.push(true);
}
var carteRetourne = 0;
var nombreHidden = 0;
document.getElementById('0').onclick = function(){
	document.getElementById('0').className = "clear";
	retourne[0] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[7]==false){
			alert("GROS T'ES LA ?");
			hidden[0] = false;
			hidden[7] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}else{
				alert("Encore quelques cartes");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('1').onclick = function(){
	document.getElementById('1').className = "clear";
	retourne[1] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[8]==false){
			hidden[1] = false;
			hidden[8] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('2').onclick = function(){
	document.getElementById('2').className = "clear";
	retourne[2] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[9]==false){
			hidden[2] = false;
			hidden[9] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('3').onclick = function(){
	document.getElementById('3').className = "clear";
	retourne[3] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[10]==false){
			hidden[3] = false;
			hidden[10] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('4').onclick = function(){
	document.getElementById('4').className = "clear";
	retourne[4] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[11]==false){
			hidden[4] = false;
			hidden[11] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('5').onclick = function(){
	document.getElementById('5').className = "clear";
	retourne[5] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[12]==false){
			hidden[5] = false;
			hidden[12] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('6').onclick = function(){
	document.getElementById('6').className = "clear";
	retourne[6] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[13]==false){
			hidden[6] = false;
			hidden[13] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('7').onclick = function(){
	document.getElementById('7').className = "clear";
	retourne[7] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[0]==false){
			hidden[7] = false;
			hidden[0] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('8').onclick = function(){
	document.getElementById('8').className = "clear";
	retourne[8] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[1]==false){
			hidden[8] = false;
			hidden[1] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('9').onclick = function(){
	document.getElementById('9').className = "clear";
	retourne[9] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[2]==false){
			hidden[9] = false;
			hidden[2] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('10').onclick = function(){
	document.getElementById('10').className = "clear";
	retourne[10] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[3]==false){
			hidden[10] = false;
			hidden[3] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('11').onclick = function(){
	document.getElementById('11').className = "clear";
	retourne[11] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[4]==false){
			hidden[11] = false;
			hidden[4] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('12').onclick = function(){
	document.getElementById('12').className = "clear";
	retourne[12] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[5]==false){
			hidden[12] = false;
			hidden[5] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
			alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}
document.getElementById('13').onclick = function(){
	document.getElementById('13').className = "clear";
	retourne[13] = false;
	carteRetourne ++;
	nombreHidden = 0;
	if(carteRetourne == 2){
		if(retourne[6]==false){
			hidden[13] = false;
			hidden[6] = false;
			for( var l = 0; l<hidden.length; l++){
				if(hidden[l]==false){
					nombreHidden ++;
				}
			}
			if(nombreHidden == 13){
				alert("Vous avez gagné ! GG EZ");
			}
		}else{
				alert("Pas les bonnes cartes !");
			for(var h=0; h<retourne.length; h++){
				if(retourne[h] == false){
					document.getElementById(h).className = "hidden";
				}
			}
			for( var k = 0; k<14; k++){
				retourne[k]=true;
			}
			for(var p=0; p<hidden.length; p++){
				if(hidden[h] == false){
					document.getElementById(h).className = "clear";
				}
			}
			carteRetourne = 0;
		}
	}
}



