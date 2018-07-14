function turnObjectsIntoJSONString (input) {
    let object = {};
    
    for (let i = 0; i < input.length; i++) {
        let splitted = input[i].split(" -> ");
        let key = splitted[0];
        let value = splitted[1];

        if (key === "age" || key === "grade") {
            value = Number(value);
        }
        object[key] = value;
    }

    console.log(JSON.stringify(object));
}