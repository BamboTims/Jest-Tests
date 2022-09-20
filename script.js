// Palindrom Checker
// Checks if words or sentence spell the same way forward and backward

const palindrome = (str) => {
	str = str
		.toLowerCase()
		.split("")
		.join("")
		.replace(/[_\W]+/g, "");
	let result = str.split("").reverse().join("");

	return str === result ? true : false;
};

// FETCHING DATA FROM STAR WARS API
const fetch = require("node-fetch");
const fetchSWapiPeople = async (fetch) => {
	const response = await fetch("https://swapi.dev/api/people");
	const data = await response.json();
	return {
		count: data.count,
		results: data.results,
	};
};

module.exports = { palindrome, fetchSWapiPeople };
