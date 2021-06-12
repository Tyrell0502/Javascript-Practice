function charCheck() {
    var charCount = 0;
    var string = prompt("Enter the word that you want to be character checked: ");
    var character = prompt("Enter the character that you want to be checked for: ");

    if(string[0].includes(character) == true) {
        charCount += 1;
    }

    return charCount;

}