var p1s=0;
var p2s=0;
var maxscr=5;
var gameover=false;

var h1p1=document.getElementById("h1p1");
var h1p2=document.getElementById("h1p2");
var max=document.getElementById("max");
var play=document.querySelector("input");

var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");

btn1.addEventListener("click",function(){
	if(!gameover)
	{
		p1s++;
		if (p1s === maxscr) {
			gameover=true;
			h1p1.style.color="green";
			btn1.disabled=true;
			btn2.disabled=true;
		}
		h1p1.textContent=p1s;
	}	
	play.disabled=true;
});

btn2.addEventListener("click",function(){
	if (!gameover) {
	p2s++;
	h1p2.textContent=p2s;
	if (p2s === maxscr) {
		gameover=true;
		h1p2.style.color="green";
		btn1.disabled=true;
		btn2.disabled=true;
	}
	}
	play.disabled=true;
});

document.getElementById("res").addEventListener("click",function(){
	p1s=0;
	p2s=0;
	h1p1.textContent=p1s;
	h1p1.style.color="black";
	h1p2.textContent=p2s;
	h1p2.style.color="black";
	gameover=false;
	play.disabled=false;
	btn1.disabled=false;
	btn2.disabled=false;
});

play.addEventListener("change",function(){
	max.textContent=this.value;
	maxscr = Number(this.value);
});