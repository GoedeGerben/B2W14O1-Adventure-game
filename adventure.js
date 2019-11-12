function start() {
	
}

function level1() {
	
}

function level2() {
	
}

function level3() {
	
}

function level4() {
	
}

function level5() {
	
}

function level6() {
	
}

function level7() {
	
}

function level8() {
	
}

function level9() {
	
}

function level10() {
	
}

function bonus1() {
	
}

function bonus2() {
	
}

function bonus3() {
	
}

var myIndex = 0;
var marioJump =  [-55, -215, -385];
var marioWalk = [-55, -215];
var mIndex = 0;
var mEven = 0;
var m = document.getElementById("mario");
var totalJump = 0;
var inventory = 'closed';

function mario(){
	totalJump++;
	if(totalJump == 10){
		//document.body.style.backgroundColor = "red";
		//veranderd de achtergrond kleur als er 10x word gesprongen.
	}

	mIndex = 1;
	var animation = setInterval(function(){
	
		m.style.backgroundPosition = marioJump[mIndex] + "px 0";
		//console.log(marioJump[mIndex] + "px 0");
		m.style.marginTop = marioJump[mIndex] / 2 + "px";
		//console.log(m.style.marginTop + "px 0");
		if(mIndex == marioJump.length - 1){
			mEven = 1;
		} 
		if(!mEven){
			mIndex++;
		} else {
			mIndex--;
		}
		if(mIndex < 0){
			mEven = 0;
			m.style.marginTop = "0px";
			clearInterval(animation);
		}
	}, 100);
}
document.addEventListener("keypress", function(e) { 	

if(e.keyCode == 13){
		mario();
		//voert de functie uit die het character laat springen als "enter" ingedrukt word.
	}

if(e.key == 'a'){
	m.style.transform = "scaleX(-1)";
	mIndex = 1;
	var animation = setInterval(function(){	
		m.style.backgroundPosition = marioWalk[mIndex] + "px 0";
		m.style.marginLeft = Number(m.style.marginLeft.replace('px', '') ) - 10 + 'px';
		if(mIndex == marioWalk.length - 1){
			mEven = 1;
		} 
		if(!mEven){
			mIndex++;
		} else {
			mIndex--;
		}
		if(mIndex < 0){
			mEven = 0;
			clearInterval(animation);
		}
	}, 150);
	//laat het character naar links lopen.
}

if(e.key == 'd'){
	m.style.transform = "scaleX(+1)";
	mIndex = 1;
	var animation = setInterval(function(){
		m.style.backgroundPosition = marioWalk[mIndex] + "px 0";
		m.style.marginLeft = Number(m.style.marginLeft.replace('px', '') ) + 10 + 'px';
		if(mIndex == marioWalk.length - 1){
			mEven = 1;
		} 
		if(!mEven){
			mIndex++;
		} else {
			mIndex--;
		}
		if(mIndex < 0){
			mEven = 0;
			clearInterval(animation);
		}
	}, 150);
	//laat het character naar rechts lopen.
}

if (e.key == 'e' && inventory == 'closed'){
	inventory = 'open';
	document.getElementById("inventoryItem").style.backgroundImage = "url(items/inventory.jpg)";
	//opent de inventory
}else if (e.key == 'e' && inventory == 'open'){
	document.getElementById("inventoryItem").style.backgroundImage = 'none';
	inventory = 'closed';
	//sluit de inventory
}


});

//alleen laten lopen als de knop ingedrukt blijft? 
//achtergronden
//obstakels
//items in de inventory plaatsen
//meerdere skins? (mijn idee)