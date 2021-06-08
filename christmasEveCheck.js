function christmasCheck() {
    monthArray = [January, February, March, April, May, June, July, August, September, October, November, December];

    var month = prompt("Enter the month of the current day: ");

    var day = prompt("Enter the day of the current month: ");

    if (month == monthArray[11] && day == 24) {

        console.log("It's Christmas Eve, time for milk and cookies!!!");
    } else {

        console.log("Sorry, it's not quite that time yet.");
    }

    return month, day;
}