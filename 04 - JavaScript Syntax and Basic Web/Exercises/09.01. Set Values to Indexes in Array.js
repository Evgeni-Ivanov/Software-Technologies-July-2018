function setValuesToIndexesInArray (array) {
    let arrayLength = Number(array[0]);
    let result = [];

    for (let i = 0; i < arrayLength; i++) {
        result[i] = 0;
    }

    for (let i = 1; i < array.length; i++) {
        let splitted = array[i].split(" - ");
        let index = splitted[0];
        let value = splitted[1];

        result[index] = value;
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] === undefined) {
            console.log(0);
        } else {
            console.log(result[i]);
        }
    }
}