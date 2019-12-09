var title = document.getElementById("title");
var description = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var charHealth = 20;
var charDmg = 5;
var charArmor = 0;
var charCoins = 0;
var sword = 'none';

var jumpKey = 13;
var leftKey = 'a';
var rightKey = 'd';
var inventoryKey = 'e';

function titleScreen() {
	var backImage = document.createElement("div");
	backImage.setAttribute("id", "backImage")
	backImage.style.backgroundImage = "url('achtergronden/titleBackground.png')";
	document.getElementById("game-container").appendChild(backImage);

	title.innerHTML = "Finished game";

	description.innerHTML = "";

	button1.innerHTML = "Start";
	button1.setAttribute("onclick", "turtorial()")
	button2.innerHTML = "settings";
	button2.setAttribute("onclick", "alert('The settings are still work in progress.')")
	button3.innerHTML = "credits";
	button3.setAttribute("onclick", "alert('This game is made by GoedeGerben on github as a school project. I have no clue who made these textures.')")

}
titleScreen();

function settings() {
	title.innerHTML = "Settings";

	description.innerHTML = "You can change your movement settings here.";

	button1.innerHTML = "left = " + leftKey + "";
	button1.setAttribute("onclick", "var leftKey = prompt('What key would you like to bind moving left to?')")
	button2.innerHTML = "right = " + rightKey + "";
	button2.setAttribute("onclick", "var rightKey = prompt('What key would you like to bind moving right to?')")
	button3.innerHTML = "jump = " + jumpKey + "";
	button3.setAttribute("onclick", "var jumpKey = prompt('What key would you like to bind jumping to?')")
	var setting4 = document.createElement("button");
		setting4.setAttribute("id", "button4")
	setting4.innerHTML = "inventory = " + inventoryKey + "";
	setting4.setAttribute("onclick", "var inventoryKey = prompt('What key would you like to bind your inventory to?')")
	document.getElementById("game-buttons").appendChild(setting4);

	var back = document.createElement("button");
		back.setAttribute("id", "button4")
		back.style.top = "335px";
	back.innerHTML = "back";
	back.setAttribute("onclick", "titleScreen()")
	document.getElementById("game-buttons").appendChild(back);

}




function startGame(){

const speed = 30; //Speed of the character
const playArea = '9000px';


//animation and movement
var walking = false;	//makes the player able to move or not.
var jumping = false;	//makes the player able to jump or not.
var totalJump = 0;		//counts how many time the player has jumped.
var myIndex = 0;
var charJump =  [-55, -215, -385];	//positions of the sprite on the sprite sheet
var charWalk = [-55, -215];	//positions of the sprite on the sprite sheet
var mIndexWalkLeft = 0;		
var mIndexWalkRight = 0;
var mIndexJump = 0; 
var yposition = 420;
var mEven = false;	
var momentumLeft = 0;
var momentumRight = 0;

var backgroundHtml = document.getElementById("move");
var charHtml = document.getElementById("character");
charHtml.style.width = "150px"; //character width
move.style.width = playArea;
grass.style.width = playArea;
//inventory
var inventory = 'closed';	//the state of the inventory
//timer
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

if(totalJump == 10){
		//document.body.style.backgroundColor = "red";
		//changes ssomething whe the player has jumped a certain amount of times
	}

function nearObject() {
    -Math.abs(getPx(objects[object].left)) - 800

}//help. moet bij alle objects object komen te staan

document.addEventListener("keypress", function(e) { 	

if(e.keyCode == jumpKey && !jumping){
	jumping = true;
	totalJump++;
	mIndexJump = 1;
	var animation = setInterval(function(){
		charHtml.style.backgroundPosition = charJump[mIndexJump] + "px 0";
		charHtml.style.marginTop = charJump[mIndexJump] + yposition + "px";
		if (getPx(backgroundHtml.style.marginLeft) < 0 ) {
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
if(e.key == rightKey && !walking && getPx(backgroundHtml.style.marginLeft) < getPx(playArea)) {
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

if(e.key == leftKey && !walking){
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

if (e.key == inventoryKey && inventory == 'closed'){
	inventory = 'open';
	document.getElementById("inventory").style.backgroundImage = "url(items/inventory.jpg)";
	//opent de inventory
}else if (e.key == 'e' && inventory == 'open'){
	document.getElementById("inventory").style.backgroundImage = 'none';
	inventory = 'closed';
	//sluit de inventory
}
});//einde van de keypress function

hasCollision()
function hasCollision(){
	(charHtml.left + charHtml.width) >= document.getElementsByClassName('box').left
	charHtml.marginTop - document.getElementsByClassName('box').top
}

function getPx(input){
	return Number(input.replace('px', '') )
}
//item pick up
}

//levels
function turtorial() {
	backImage.style.background = "";
	backImage.style.height = "0"

	var clock = document.createElement("P");
	clock.setAttribute("id", "clock");
	document.getElementById("game-container").appendChild(clock);
	var minutes = document.createElement("label");
	minutes.setAttribute("id", "minutes");
	minutes.innerHTML = "00";
	var seconds = document.createElement("label");
	seconds.setAttribute("id", "seconds");
	seconds.innerHTML = "00";
	clock.appendChild(minutes);
	clock.appendChild(document.createTextNode(" : "));
	clock.appendChild(seconds);

	var inventory = document.createElement("div");
	inventory.setAttribute("id", "inventory");
	document.getElementById("game-container").appendChild(inventory);
	var inventoryItem = document.createElement("div");
	inventoryItem.setAttribute("id", "inventoryItem");
	inventory.appendChild(inventoryItem);

	var move = document.createElement("div");
	move.setAttribute("id", "move");
	document.getElementById("game-container").appendChild(move);
	var background = document.createElement("div");
	background.setAttribute("id", "background");
	move.appendChild(background);
	var trees = document.createElement("div");
	trees.setAttribute("id", "trees");
	move.appendChild(trees);
	var rock = document.createElement("div");
	rock.setAttribute("id", "rock");
	move.appendChild(rock);
	var grass = document.createElement("div");
	grass.setAttribute("id", "grass");
	move.appendChild(grass);

	var character = document.createElement("div");
	character.setAttribute("id", "character");
	document.getElementById("game-container").appendChild(character);

	document.getElementById("game-buttons").removeChild(button1);
	document.getElementById("game-buttons").removeChild(button2);
	document.getElementById("game-buttons").removeChild(button3);

	title.innerHTML = 'turtorial';
	title.style.fontSize = '40px';
	title.style.marginTop = '50px';
	title.style.width = '800px';
	title.style.marginLeft = '80px';
	document.getElementById("move").appendChild(title);

	description.innerHTML = "This is the turtorial. Use '" + leftKey + "' and '" + rightKey + "' to move and press 'enter' to jump.";
	description.style.fontSize = '30px';
	description.style.marginTop = '100px';
	description.style.width = '800px';
	description.style.marginLeft = '80px';
	document.getElementById("move").appendChild(description);



function TObjects(){
	var objects = {
	'box1' : {
		'left' : '1000px',
		'top' : '460px',
		'height' : '250px',
		'width' : '250px',
		'collision' : true,
		'className' : 'box'
		},

	'box2' : {
		'left' : '2000px',
		'top' : '460px',
		'height' : '250px',
		'width' : '250px',
		'collision' : true,
		'className' : 'box'
		},

	'box3' : {
		'left' : '3900px',
		'top' : '460px',
		'height' : '250px',
		'width' : '250px',
		'collision' : true,
		'className' : 'box'
		},

	'box4' : {
		'left' : '3900px',
		'top' : '210px',
		'height' : '250px',
		'width' : '250px',
		'collision' : true,
		'className' : 'box'
		},

	'level1' :{
		'left' : '2400px',
		'top' : '40px',
		'height' : '650px',
		'width' : '800px',
		'collision' : false,
		'className' : 'building',
		'type' : 'button',
		'function' : 'level1()'
		},

	'level2' :{
		'left' : '8000px',
		'top' : '250px',
		'height' : '500px',
		'width' : '500px',
		'collision' : false,
		'className' : 'building',
		'type' : 'button',
		'function' : 'level2()'
		},

	'sword2' :{
		'left' : '1500px',
		'top' : '565px',
		'height' : '150px',
		'width' : '150px',
		'collision' : false,
		'className' : 'item',
		'type' : 'button',
		'function' : 'pickUpSword("rusty");'
		}
	}

	for (var object in objects) {	
		if(typeof objects[object].type == 'undefined'){
			var item = document.createElement("div");
		}else{
			var item = document.createElement("button");
			item.setAttribute("onclick", objects[object].function)	
		}
		item.setAttribute("class", objects[object].className);
		item.setAttribute("id", object);
		item.setAttribute("type", objects[object].type);
		item.style.left = objects[object].left;
		item.style.top = objects[object].top;
		item.style.width = objects[object].width;
		item.style.height = objects[object].height;
		document.getElementById("move").appendChild(item);
	}
}
TObjects()
startGame()
}
function pickUpSword(){
	sword = arguments[0];
	charDmg = 20;
	document.getElementById(arguments[0]).style.backgroundImage = 'none';
}