const fs = require('fs');
const jsonData = fs.readFileSync('./jsonData.json').toString(); //json string
const obj = JSON.parse(jsonData); // convert json string to js object
obj.name = "Nrupen";
obj.age = 31;
fs.writeFileSync('./jsonData.json', JSON.stringify(obj)); // writing json to file
