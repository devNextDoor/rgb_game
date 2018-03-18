var boxes=document.querySelectorAll(".box");
var numBoxes=6;
var h1=document.querySelector("h1");
var playAgain=document.querySelector(".again");
var mode=document.querySelectorAll(".mode");
var c2=document.querySelector(".c2");
var colorDisplay=document.getElementById("colorDisplay");
var message=document.querySelector("#message");

mode[1].classList.add("selected");
initialize(6);

playAgain.addEventListener("click",function(){
	initialize(numBoxes);
	this.textContent="New Colors!";

});

function addListener(num){
for(var i=0;i<num;i++)
{
	boxes[i].addEventListener("click",clickCheck);
}
}


for(var i=0;i<mode.length;i++)
{
	mode[i].addEventListener("click",function(){
		numBoxes=((this.textContent=="Easy")?3:((this.textContent=="Medium")?6:9));
		console.log(numBoxes);
		for(var j=0;j<mode.length;j++)
			mode[j].classList.remove("selected");
		this.classList.add("selected");
		initialize(numBoxes);
		for(var k=numBoxes;k<boxes.length;k++)
			boxes[k].style.backgroundColor="#232323";
	});
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
			var str="rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
			arr[i]=str;
	}
	return arr;
}
function pickColor(num){
	return colors[Math.floor(Math.random()*num)];
}

function clickCheck(){
		if(this.style.backgroundColor==pickedColor)
		{
			for(var j=0;j<numBoxes;j++)
				boxes[j].style.backgroundColor=pickedColor;
			message.textContent="Correct!";
			h1.style.backgroundColor=pickedColor;
			playAgain.textContent="Play Again";
		}
		else{
			this.style.backgroundColor="rgb(35, 35, 35)";
			message.textContent="Try Again:)";
			c2.style.backgroundColor="#232323";
		}
	}

function fillColors(num){
	for(var i=0;i<num;i++)
	{
		boxes[i].style.backgroundColor=colors[i];
	}
}

function initialize(num){
	colors=generateRandomColors(num);
	pickedColor=pickColor(num);
	fillColors(num);
	addListener(num);
	for (var i = num; i < boxes.length; i++) {
		boxes[i].addEventListener("click",function(){
			message.textContent="";
		});
	}
	colorDisplay.textContent="RGB"+pickedColor.substr(3,pickedColor.length);
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	playAgain.textContent="New Colors!";
}