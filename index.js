var weekDays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
]
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

var YY
var CC
var MM
var DD

function getDayBorn() {
	var year = document.getElementById("year").value
	var month = document.getElementById("month").value
	var date = document.getElementById("date").value
	var gender = document.getElementById("gender-select").value

//Validating for number
	if(isNaN(year)){
		alert("Please enter a valid year");
		return;
	}

	if(isNaN(month)){
		alert("Please a valid Month");
		return;
	}

	if(isNaN(date)){
		alert("Please a valid date");
		return;
	}

	//validating against 

	if(year < 1900) {
		alert("Enter valid year ");
		return;
	}

	if(month < 1) {
		alert("Enter valid Month ");
		return;
	}

	if(date < 1) {
		alert("Enter valid Date ");
		return;
	}


	
	CC = Number(year.slice(0, 2))
	YY = Number(year.slice(2, year.length))
	MM = Number(month)
	DD = Number(date)

	var dayOfTheWeek = Math.round(
		(CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
	)
	getAkanName(dayOfTheWeek, gender)
}

function getAkanName(day, gender) {
	if (gender === "female") alert("Your Name is: " + femaleNames[day])
	if (gender === "male") alert("Your Name is: " + maleNames[day])
}
