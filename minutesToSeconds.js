function minutesToSeconds() {
    var minutes = prompt("Enter the amount of minutes: ");
    var seconds = minutes * 60;
    console.log("The minutes entered equates to ", seconds, " seconds.");
    return seconds;
}