function workingWithKeyValuePairs (input) {
    let result = {};
    let keyToFind = input[input.length - 1];

    for (let i = 0; i < input.length - 1; i++) {
        let splitted = input[i].split(" ");
        let key = splitted[0];
        let value = splitted[1];

        result[key] = value;
    }
    
    if (result[keyToFind] == undefined) {
        console.log("None")
    } else {
        console.log(result[keyToFind]);
    }
}