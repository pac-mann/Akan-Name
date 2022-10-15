function getUserInputAndCalculateDay() {

    var year = prompt("Enter Year: ");
    var century = parseInt(year.substring(0, 2));
    year = parseInt(year);
    var month = parseInt(prompt("Enter Month: "));
    var month = parseInt(prompt("Enter Day: "));

    var dayOfTheWeek = math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7)
    return dayOfTheWeek
}