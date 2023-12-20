function toCase(text) {
    // Write your code here
    const lowerCaseText = text.toLowerCase();
    const upperCaseText = text.toUpperCase();

    const result = lowerCaseText + '-' + upperCaseText;

    return result;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
