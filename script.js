document.getElementById("convert-btn").addEventListener("click", function() {
    const numberInput = document.getElementById("number").value;
    const output = document.getElementById("output");

    if (numberInput === "") {
        output.textContent = "Please enter a valid number";
        return;
    }

    let number = parseInt(numberInput, 10); // Change from const to let

    if (number < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    }

    if (number >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    let roman = "";

    for (let [letter, value] of romanNumerals) {
        while (number >= value) {
            roman += letter;
            number -= value; // This reassignment is allowed since 'number' is declared with 'let'
        }
    }

    output.textContent = roman;
});
