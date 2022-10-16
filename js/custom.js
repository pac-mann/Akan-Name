const MALE_NAMES = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const FEMALE_NAMES = ["Akosua", "Adwoa","Abenaa","Akua","Yaa","Kofi","Kwame"];
const DAY_OF_THE_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function getUserInputAndCalculateDay() {

    var year = prompt("Enter Year: ");
    var century = parseInt(year.substring(0, 2));
    year = parseInt(year);
    var month = parseInt(prompt("Enter Month: "));
    var day = parseInt(prompt("Enter Day: "));

    var dayOfTheWeek = math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7)
    return dayOfTheWeek
}

function getGender () {

    var gender = prompt ("Enter your gender: ");
    return gender; 
}

function main(){

    var day = getUserInputAndCalculateDay();
    var gender = getGender ();
    var akanName = null;

    if (gender.toLowerCase().startsWith("f")){

        akanName = FEMALE_NAMES[day];

    } else {

        akanName = MALE_NAMES[day]
    }

    alert("Your Akan Name is " + akanName);
}