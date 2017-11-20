document.querySelector("#Button").addEventListener("click",addNewInfo);
function addNewInfo(){
	var hr = document.getElementById("href").value;
	var info = document.getElementById("info").value;
	var email = document.getElementById("email").value;
	var newDiv  = document.createElement("div");
	var newImg = document.createElement("img");
	var newDiv1 = document.createElement("div");
	var newh3 = document.createElement("h3");
	var newp = document.createElement("p");
	newImg.src = hr;
	newp.innerHTML = info;
	newh3.innerHTML = email;
	newDiv.appendChild(newImg);
	newDiv.appendChild(newDiv1);
	newDiv1.appendChild(newh3);
	newDiv1.appendChild(newp);
	document.querySelector(".Akcia").appendChild(newDiv);
}