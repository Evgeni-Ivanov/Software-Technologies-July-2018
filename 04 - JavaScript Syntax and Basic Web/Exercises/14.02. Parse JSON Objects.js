function parseJSONObjects (input) {
    let objects = input.map(JSON.parse);
    
    for (let object of objects) {
        console.log(`Name: ${object.name}`);
        console.log(`Age: ${object.age}`);
        console.log(`Date: ${object.date}`);
    }
}