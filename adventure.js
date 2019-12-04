const speed = 30; //bepaald de snelhijd van het character.
const playArea = '8000px';
move.style.width = playArea;
grass.style.width = playArea;

var time = 0

var myIndex = 0;
var charJump =  [-55, -215, -385];		//posities van de sprites op spritesheet van de springanimatie
var charWalk = [-55, -215];	//posities van de sprites op spritesheet van de loopanimatie
var mIndexWalkLeft = 0;		// bepaalt welke index van array charWalk gebruikt moet worden voor .......
var mIndexWalkRight = 0;
var mIndexJump = 0; // bepaalt welke index van array charJump gebruikt moet worden voor .......
var yposition = 420;

var mEven = false;	
var momentumLeft = 0;
var momentumRight = 0;
var backgroundHtml = document.getElementById("move"); // slaap html element met id character op in variabel .. var wel goeie naam geven dat later herkenbaar wordt
var charHtml = document.getElementById("character");
var totalJump = 0;		//telt de aantal sprongen
var inventory = 'closed';	//toggelt de inventory
var walking = false;	//zorgt ervoor of er kan worden gelopen
var jumping = false;	//zorgt ervoor of er gesprongen kan worden of niet

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
//help. fix the clock

if(totalJump == 10){
		//document.body.style.backgroundColor = "red";
		//veranderd de achtergrond kleur als er 10x word gesprongen.
	}

document.addEventListener("keypress", function(e) { 	

if(e.keyCode == 13 && !jumping){
	jumping = true;
	totalJump++;
	mIndexJump = 1;
	var animation = setInterval(function(){
		charHtml.style.backgroundPosition = charJump[mIndexJump] + "px 0";
		charHtml.style.marginTop = charJump[mIndexJump] + yposition + "px";
		if (getPx(backgroundHtml.style.marginLeft) < 0) {
		backgroundHtml.style.marginLeft = Number(backgroundHtml.style.marginLeft.replace('px', '') ) - momentumLeft + 'px'; //beweegt het character naar links tijdens de sprong als het momentum heeft
		}
		if (getPx(backgroundHtml.style.marginLeft) < 0) {
		backgroundHtml.style.marginLeft = Number(backgroundHtml.style.marginLeft.replace('px', '') ) + momentumRight + 'px'; //beweegt het character naar rechts tijdens de sprong als het momentum heeft
		}
		if(mIndexJump == charJump.length - 1){
			mEven = true;
		} 
		if(!mEven){
			mIndexJump++;
		} else {
			mIndexJump--;
		}
		if(mIndexJump < 0){
			mEven = false;
			charHtml.style.marginTop = yposition + 'px';
			clearInterval(animation);
		}
	}, 100);
	setTimeout(function(){jumping = false;}, 300);
	//laat het character springen elke 300 ms.
}

if(e.key == 'd' && !walking && getPx(backgroundHtml.style.marginLeft) < getPx(playArea)){
	walking = true;
	momentumLeft = speed;
	mIndexWalkLeft = 1;
	charHtml.style.transform = "scaleX(+1)";
	var animation = setInterval(function(){	
		charHtml.style.backgroundPosition = charWalk[mIndexWalkLeft] + "px 0";
		backgroundHtml.style.marginLeft = Number(backgroundHtml.style.marginLeft.replace('px', '') ) - speed + 'px';
		if(mIndexWalkLeft == charWalk.length - 1){
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
	setTimeout(function(){walking = false;}, 300);
	//laat het character naar links lopen elke 300 ms.
}
setTimeout(function(){if (!walking) {momentumLeft = 0;}}, 1000); 

if(e.key == 'a' && !walking){
	walking = true;
	momentumRight = speed;
	mIndexWalkRight = 1;
	charHtml.style.transform = "scaleX(-1)";
	var animation = setInterval(function(){
		charHtml.style.backgroundPosition = charWalk[mIndexWalkRight] + "px 0";
		if (getPx(backgroundHtml.style.marginLeft) < 0) {
		backgroundHtml.style.marginLeft = Number(backgroundHtml.style.marginLeft.replace('px', '') ) + speed + 'px';
		}
		if(mIndexWalkRight == charWalk.length - 1){
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
	setTimeout(function(){walking = false;}, 300);
	//laat het character naar rechts lopen elke 300 ms.
}
setTimeout(function(){if(!walking){momentumRight = 0;}}, 1000);

if (e.key == 'e' && inventory == 'closed'){
	inventory = 'open';
	document.getElementById("inventory").style.backgroundImage = "url(items/inventory.jpg)";
	//opent de inventory
}else if (e.key == 'e' && inventory == 'open'){
	document.getElementById("inventory").style.backgroundImage = 'none';
	inventory = 'closed';
	//sluit de inventory
}
});//einde van de keypress function


var objects = {
'box1' : {
	'left' : '800px',
	'top' : '250px',
	'height' : '200px',
	'collision' : true,
	'type' : 'box',
	'width' : '200px'
	}
}

for (var object in objects) {
	var item = document.createElement("div");

	item.setAttribute("class", objects[object].type);
	item.setAttribute("id", object);
	item.style.left = objects[object].left;
	item.style.top = objects[object].top;
	item.style.width = objects[object].width;
	item.style.height = objects[object].height;

}



var opponents = {
	'enemy1':{
		'health':100,
		'dmg': 5,
		'showOn': 1500
	}
}

function opponentCheck(){
	/*for(var o in opponents) {
		if () {}
	}*/
}

function getPx(input){
	return Number(input.replace('px', '') )
}




//

//fixing everything that says "help"
//fixing the font sheet

//buildings the player can enter
//boxes, walls and other stuff the player can stand on or jump over.

//health
//coins
//clock

//clouds
//picking up items
//showing items in the inventory
//enemys
//effects (when healing you will see particles around you from the item used)
//pick up boxes / objects and throw them?

//sound
//start screen
//loading screen
//more skins?

//easter eggs
//left side of the screen
//if player has jumped x amount of times.