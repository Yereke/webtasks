function clickMe(){
	const s1Field = document.querySelector("#s1");
	const s2Field = document.querySelector("#s2");
	const s3Field = document.querySelector("#s3");
	let sum = parseInt(s1Field.value)+parseInt(s2Field.value);
	s3Field.value = sum;
	document.querySelector("img").src="http://www.ayzdorov.ru/images/Travi/ananas.jpg";
	document.querySelector('#aaa').innerHTML = "<strong>Hello</strong> World";
	//document.querySelector('#aaa').textContent = "<strong>Hello</strong> World";
	let newCity = document.createElement("option");
	newCity.textContent = "Kaskelen";
	document.querySelector("#cities").appendChild(newCity);
}
document.querySelector("#button").addEventListener('click',clickMe);