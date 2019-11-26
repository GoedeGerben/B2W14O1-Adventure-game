var speed = 30; //bepaald de snelhijd van het character.

var box1 = []
var box2 = []
var boxes = [box1, box2]

var myIndex = 0;
var marioJump =  [-55, -215, -385];		//posities van de sprites op spritesheet van de springanimatie
var marioWalk = [-55, -215];	//posities van de sprites op spritesheet van de loopanimatie
var mIndexWalkLeft = 0;		// bepaalt welke index van array marioWalk gebruikt moet worden voor .......
var mIndexWalkRight = 0;
var mIndexJump = 0; // bepaalt welke index van array marioJump gebruikt moet worden voor .......

var mEven = false;	
var momentumLeft = 0;
var momentumRight = 0;
var marioHtml = document.getElementById("mario"); // slaap html element met id mario op in variabel .. var wel goeie naam geven dat later herkenbaar wordt
var totalJump = 0;		//telt de aantal sprongen
var inventory = 'closed';	//toggelt de inventory
var walking = false;	//zorgt ervoor of er kan worden gelopen
var jumping = false;	//zorgt ervoor of er gesprongen kan worden of niet

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
	
		marioHtml.style.backgroundPosition = marioJump[mIndexJump] + "px 0";
		marioHtml.style.marginTop = marioJump[mIndexJump] + 420 + "px";
		marioHtml.style.marginLeft = Number(marioHtml.style.marginLeft.replace('px', '') ) - momentumLeft + 'px'; //beweegt het character naar links tijdens de sprong als het momentum heeft
		marioHtml.style.marginLeft = Number(marioHtml.style.marginLeft.replace('px', '') ) + (momentumRight) + 'px'; //beweegt het character naar rechts tijdens de sprong als het momentum heeft
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
			marioHtml.style.marginTop = "420px";
			clearInterval(animation);
		}
	}, 100);
	setTimeout(function(){jumping = false;}, 300);
	//laat het character springen elke 300 ms.
}

if(e.key == 'a' && !walking){
	walking = true;
	momentumLeft = 30;
	marioHtml.style.transform = "scaleX(-1)";
	mIndexWalkLeft = 1;
	var animation = setInterval(function(){	
		marioHtml.style.backgroundPosition = marioWalk[mIndexWalkLeft] + "px 0";
		marioHtml.style.marginLeft = Number(marioHtml.style.marginLeft.replace('px', '') ) - speed + 'px';
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
	setTimeout(function(){walking = false;}, 300);
	//laat het character naar links lopen elke 300 ms.
}
setTimeout(function(){if (!walking) {momentumLeft = 0;}}, 1000); 

if(e.key == 'd' && !walking){
	walking = true;
	momentumRight = 30;
	marioHtml.style.transform = "scaleX(+1)";
	mIndexWalkRight = 1;
	var animation = setInterval(function(){
		marioHtml.style.backgroundPosition = marioWalk[mIndexWalkRight] + "px 0";
		marioHtml.style.marginLeft = Number(marioHtml.style.marginLeft.replace('px', '') ) + speed + 'px';
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
	setTimeout(function(){walking = false;}, 300);
	//laat het character naar rechts lopen elke 300 ms.
}else if (e.key == 'd' && marioHtml.style.marginLeft >= "500px") {
	console.log("AAAAAAAAAA")
}//help
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


});
function getHalfPage(){
	var width = document.documentElement.clientWidth;
	width = width / 2;
	width = width + 150;
	return width;
	//vindt de helft van de breedte van de pagina
}


if(1000 < getHalfPage()){
	
} else {
	
}

//fixing everything that says "help"

//moving the background and objects instead of the character
//boxes, walls and other stuff the player can stand on or jump over.

//health
//coins
//clock

//clouds
//picking up items
//showing items in the inventory
//enemys
//effects (when healing you will see particles around you from the item used)

//sound
//start screen
//loading screen
//more skins?