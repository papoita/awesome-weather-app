/** @format */

let weather = [
	{ city: "paris", tempC: 19.7, tempF: 86, humidity: 80 },
	{
		city: "tokyo",
		tempC: 17.3,
		tempF: 74,
		humidity: 50,
	},
	{
		city: "lisbon",
		tempC: 30.2,
		tempF: 95,
		humidity: 20,
	},
	{
		city: "san francisco",
		tempC: 20.9,
		tempF: 85,
		humidity: 100,
	},
	{ city: "moscow", tempC: -5, tempF: 58, humidity: 20 },
];

let city = prompt("Welcome to Papo's weather app, please enter a city");

if ((city = true)) {
	alert("It is currently 19°C (66°F) in Paris with a humidity of 80%");
} else {
	alert(
		"Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
	);
}
