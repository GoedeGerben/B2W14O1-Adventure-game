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

const DEBUG = true;

var myIndex = 0;
var marioJump =  [-55, -215, -385];
var marioWalk = [-55, -215];
var mIndexWalkLeft = 0;		// bepaalt welke index van array marioWalk gebruikt moet worden voor .......
var mIndexWalkRight = 0;
var mIndexJump = 0; // bepaalt welke index van array marioJump gebruikt moet worden voor .......
var mEven = false;	
var mEvenLeft = false;
var mEvenRight = false;
var m = document.getElementById("mario"); // slaap html element met id mario op in variabel .. var wel goeie naam geven dat later herkenbaar wordt
var totalJump = 0;
var inventory = 'closed';
var walking = 0;
var jumping = false;

function mario(){
	jumping = true;
	totalJump++;
	if(totalJump == 10){
		//document.body.style.backgroundColor = "red";
		//veranderd de achtergrond kleur als er 10x word gesprongen.
	}

	mIndexJump = 1;
	var animation = setInterval(function(){
	
		m.style.backgroundPosition = marioJump[mIndexJump] + "px 0";
		//console.log(marioJump[mIndex] + "px 0");
		m.style.marginTop = marioJump[mIndexJump] / 2 + "px";

		console.log("m marginTop" + m.style.marginTop);

		if(DEBUG)
		console.log("DEBUG FUNCTION MARIO :::: mEven :"+ mEven +"| mIndexJump :" + mIndexJump + " marioJump.length - 1 : "+ (marioJump.length - 1));

		//console.log(m.style.marginTop + "px 0");
		if(mIndexJump == marioJump.length - 1){
			mEven = true;
		} 
		if(!mEven){
			mIndexJump++;
		} else {
			mIndexJump--;
		}
		if(mIndexJump < 0){
			mEven = false;
			m.style.marginTop = "0px";
			clearInterval(animation);
		}
	}, 100);
	setTimeout(function(){jumping = false;}, 300);
}


document.addEventListener("keypress", function(e) { 	

if(e.keyCode == 13 && !jumping && !walking){
		mario();
		//voert de functie uit die het character laat springen als "enter" ingedrukt word.
	}

if(e.key == 'a' && !walking && !jumping){
	walking = 1;
	m.style.transform = "scaleX(-1)";
	mIndexWalkLeft = 1;
	var animation = setInterval(function(){	
		m.style.backgroundPosition = marioWalk[mIndexWalkLeft] + "px 0";
		m.style.marginLeft = Number(m.style.marginLeft.replace('px', '') ) - 10 + 'px';
		if(mIndexWalkLeft == marioWalk.length - 1){
			mEvenLeft = true;
		} 
		if(!mEvenLeft){
			mIndexWalkLeft++;
		} else {
			mIndexWalkLeft--;
		}
		if(mIndexWalkLeft < 0){
			mEvenLeft = false;
			clearInterval(animation);
		}
	}, 150);
	setTimeout(function(){walking = 0;}, 300);
	//laat het character naar links lopen.
}

if(e.key == 'd' && !walking && !jumping){
	walking = 1;
	m.style.transform = "scaleX(+1)";
	mIndexWalkRight = 1;
	var animation = setInterval(function(){
		m.style.backgroundPosition = marioWalk[mIndexWalkRight] + "px 0";
		m.style.marginLeft = Number(m.style.marginLeft.replace('px', '') ) + 10 + 'px';
		if(mIndexWalkRight == marioWalk.length - 1){
			mEvenRight = true;
		} 
		if(!mEvenRight){
			mIndexWalkRight++;
		} else {
			mIndexWalkRight--;
		}
		if(mIndexWalkRight < 0){
			mEvenRight = false;
			clearInterval(animation);
		}
	}, 150);
	setTimeout(function(){walking = 0;}, 300);
	//laat het character naar rechts lopen.
}else if (e.key == 'd' && m.style.marginLeft >= "500px") {
	
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
function getHalfPage(){
	var width = document.documentElement.clientWidth;
	width = width / 2;
	width = width + 150;
	return width;

}


if(1000 < getHalfPage()){
	
} else {
	
}
//alleen laten lopen als de knop ingedrukt blijft? 
//achtergronden  && m.style.marginLeft <= "500px" 
//obstakels
//items in de inventory plaatsen
//meerdere skins? (mijn idee)