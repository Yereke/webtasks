function func(){
	document.querySelector(".Burgers").classList.remove("dontshow");
	document.querySelector(".Burgers").classList.add("show");
	document.querySelector("#body").classList.add("color");
}
document.querySelector(".S").addEventListener("click", func);
function func1(){
	document.querySelector(".Burgers").classList.remove("show");
	document.querySelector(".Burgers").classList.add("dontshow");
}
document.querySelector("#Close").addEventListener("click", func1);