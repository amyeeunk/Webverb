console.log ('i am a javascript file');


var handAngle = -90;
var minuteHand = -90;
var hourHand = -90;
function moveSecondHand(){
	$('.second-hand').css('transform', 'translate(0%, 0%) rotate('+handAngle+'deg)');
	handAngle = handAngle + 6;
}
function moveMinuteHand(){
	$('.minute-hand').css('transform', 'translate(0%, 0%) rotate('+minuteHand+'deg)');
	minuteHand = minuteHand + 6;
}
function moveHourHand(){
	$('.hour-hand').css('transform', 'translate(0%, 0%) rotate('+hourHand+'deg)');
	hourHand = hourHand + 30;
}




window.onload =function (){
	$('P').draggable();

setInterval(moveSecondHand, 1000);
setInterval(moveMinuteHand, 60000);
setInterval(moveHourHand, 7200000);

}



