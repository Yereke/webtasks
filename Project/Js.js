function func1(){
	document.querySelector(".Burgers").style.width="0";
	document.querySelector(".Burgers").style.height="0";
}
document.querySelector("#Close").addEventListener("click", func1);
function tar(event){
	var a = event.currentTarget.childNodes[3];
	var a1 = event.currentTarget.childNodes[1].src;
	var b =  a.childNodes[1].innerHTML
	var c =  a.childNodes[3].innerHTML
	document.querySelector("#h").innerHTML = b;
	document.querySelector("#p").innerHTML = c;
	document.querySelector("#src").src = a1;
	document.querySelector(".Burgers").style.width="100%";
	document.querySelector(".Burgers").style.height="80%";
	document.querySelector("#body").classList.add("color");
	document.querySelector(".Burgers").classList.add("show");
}
let x = document.querySelectorAll(".Kind div");
for (var i = x.length - 1; i >= 0; i--) {
	x[i].addEventListener("click",tar);
}
