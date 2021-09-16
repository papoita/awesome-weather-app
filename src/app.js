/** @format */

//feature 1 display current time and and date

function formatDate(date) {
	let hours = date.getHours();
	if (hours < 10) {
		hours = `0${hours}`;
	}

	let minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	let year = date.getFullYear();
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[date.getDay()]; //0 and 6

	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	let month = months[currentTime.getMonth()];
	let dates = currentTime.getDate();

	console.log(hours, minutes);
	return ` ${day} <br> ${month} ${dates},  ${year} <br> <small>${hours}:${minutes} </small>`;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();

dateElement.innerHTML = formatDate(currentTime);
//feature 2
//add a search engine
//display the city name in the page after submit

function cityInput(event) {
	event.preventDefault();
	let newCity = document.querySelector("#city-input");
	console.log(newCity.value);

	let h2 = document.querySelector("h2");

	h2.innerHTML = `${newCity.value.toUpperCase()}`;
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", cityInput);

//feature 3
// display fake temp in C and F that when clicked changes
/*
function change() {
	let Cbutton = document.querySelector("#temp-input");
	let temperature = 23;
	let tempC = Math.round(temperature);
	document.getElementById(
		"temp-input"
	).innerHTML = `${temperature} °C <button class ="a2" id="fahrenheit" >°F</button>`;
}

let Cbutton = document.querySelector("#celcius");
Cbutton.addEventListener("click", change);
*/
function toFah(event) {
	event.preventDefault();
	//let Fbutton = document.querySelector("#temp-input");
	// temperature = document.getElementById("temp-input");
	let temperature = 25;
	temperature = Number(temperature);
	console.log(temperature);
	//console.log(Fbutton.value);
	let tempC = Math.round(temperature);
	let tempF = Math.round((tempC * 9) / 5 + 32);
	console.log(tempF);
	document.getElementById(
		"temp-input"
	).innerHTML = `${tempF} °F <button class ="a1" id="celcius">°C </button>`;
}

let Fbutton = document.querySelector("#fahrenheit");
Fbutton.addEventListener("click", toFah);
/*
function toCel(event) {
	event.preventDefault();
	let temperature = 25;
	temperature = Number(temperature);
	console.log(temperature);
	let tempC = Math.round(temperature);
	document.getElementById(
		"temp-input"
	).innerHTML = `${tempC} °C <button class ="a2" id="fahrenheit">°F </button>`;
}

let Cbutton = document.querySelector("#celcius");
Cbutton.addEventListener("click", toCel);
*/
