function multiplyDivideANumber (numbersArray) {
    let number1 = numbersArray[0];
    let number2 = numbersArray[1];

    if (number1 <= number2) {
        console.log(number1 * number2);
    } else {
        console.log(number1 / number2);
    }
}