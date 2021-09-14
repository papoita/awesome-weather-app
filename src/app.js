/** @format */

//feature 1 display current time and and date
let now = new Date();
console.log(now);

console.log(now.getMonth());
//month 8 is September because it starts at 0
console.log(now.getFullYear());
console.log(now.getMinutes());
console.log(now.getDay());
// starts at 0 which is Sunday
console.log(now.getDate());
// prints the day number of the day

let newtime = document.querySelector("#current-time");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
let day = days[now.getDay()]; //0 and 6

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
let month = months[now.getMonth()];
let h3 = document.querySelector("h3");
h3.innerHTML = ` ${day} <br> ${month} ${date},  ${year} <br> <small>${hours}:${minutes} </small>`;

//feature 2
//add a search engine
//display the city name in the page after submit

function searchCity(event) {
	event.preventDefault();
	let newCity = document.querySelector("#city-input");
	console.log(newCity.value);

	let h2 = document.querySelector("h2");

	h2.innerHTML = `${newCity.value.toUpperCase()}`;
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", searchCity);
//feature 3
// display fake temp in C and F that when clicked changes

//let tempC = Math.round(temperature);
//let tempF = Math.round((tempC * 9) / 5 + 32);
