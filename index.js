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

	//validating against zero

	if(year < 1900) {
		alert("Enter year after 1900 ");
		return;
	}

	if(month < 1) {
		alert("Month cannot be less than 1 ");
		return;
	}

	if(date < 1) {
		alert("Date cannot be less than 1 ");
		return;
	}

	//Validating against someone entering a value more than what is expected eg date(33)

	if(date > 31) {
		alert("Maximum date is 31 ");
		return;
	}

	if(month > 12) {
		alert("There are only 12 months ");
		return;
	}

	//currentYear = new Date().getFullYear()


//if (year > currentYear ) {
		//alert("You cannot enter future year ");
		//return;
	//}



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
