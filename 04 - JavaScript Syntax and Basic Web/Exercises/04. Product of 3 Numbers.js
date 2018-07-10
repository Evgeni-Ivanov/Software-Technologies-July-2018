function productOf3Numbers ([number1, number2, number3]) {
    let negativeCounter = 0;
    if (number1 < 0) {
        negativeCounter++;
    }
    if (number2 < 0) {
        negativeCounter++;
    }
    if (number3 < 0) {
        negativeCounter++;
    }

    if (number1 === 0 || number2 === 0 || number3 === 0) {
        return "Positive";
    }
    
    if (negativeCounter === 0 || negativeCounter === 2) {
        return "Positive";
    } else {
        return "Negative";
    }
}