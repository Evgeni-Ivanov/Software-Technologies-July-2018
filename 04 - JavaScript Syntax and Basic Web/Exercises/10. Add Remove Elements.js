function addRemoveElements (input) {
    let result = [];

    for (let i = 0; i < input.length; i ++) {
        let splitted = input[i].split(" ");
        let command = splitted[0];
        let value = Number(splitted[1]);

        switch (command) {
            case "add":
                result.push(value);
                break;
            case "remove":
                result.splice(value, 1);
                break;
        }
    }

    for (let number of result) {
        console.log(number);
    }
}