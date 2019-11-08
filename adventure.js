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

var marioPositions=  [-55, -215, -385];
var mIndex = 0;
var mEven = 0;
var m = document.getElementById("mario");
var totalJump = 0;
function mario(){
	totalJump++;
	if(totalJump == 10){
		document.body.style.backgroundColor = "red";
	}
	mIndex = 1;
	var animation = setInterval(function(){
	
		m.style.backgroundPosition = marioPositions[mIndex] + "px 0";
		console.log(marioPositions[mIndex] + "px 0");
		m.style.marginTop = marioPositions[mIndex] / 2 + "px";
		if(mIndex == marioPositions.length - 1){
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
	}, 100);
}

mario();
document.addEventListener("keypress", function(e) { 	

if(e.keyCode == 13){
		mario();
	}

if(e.key == 'a'){
	m.style.transform = "scaleX(-1)";
	console.log("Left")
	m.style.marginLeft = Number(m.style.marginLeft.replace('px', '') ) - 10 + 'px';
}
if(e.key == 'd'){
		m.style.transform = "scaleX(+1)";
		console.log("Right")
		m.style.marginLeft = Number(m.style.marginLeft.replace('px', '') ) + 10 + 'px';

}
});