/** @format */

let weather = {
	paris: {
		temp: 19.7,
		humidity: 80,
	},

	tokyo: {
		temp: 17.3,
		humidity: 50,
	},
	lisbon: {
		temp: 30.2,
		humidity: 20,
	},
	"san francisco": {
		temp: 20.9,
		humidity: 100,
	},
	moscow: {
		temp: -5,
		humidity: 20,
	},
};

let city = prompt("Welcome to Papo's weather app, please enter a city");
city = city.toLowerCase();
if (weather[city] !== undefined) {
	let temperature = weather[city].temp;
	let tempC = Math.round(temperature);
	let tempF = Math.round((tempC * 9) / 5 + 32);
	let humid = weather[city].humidity;

	alert(`It is currently ${tempC}°C 
  ${tempF}°F in ${city} with a humidity of ${humid}%`);
} else {
	alert(
		`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
	);
}
