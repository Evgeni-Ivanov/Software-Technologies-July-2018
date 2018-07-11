function parseJSONObjects (input) {
    for (let line of input) {
        let object = JSON.parse(line);
        for (let key in object) {
            console.log(key[0].toUpperCase() + key.substring(1) + ": " + object[key]);
        }
    }
}