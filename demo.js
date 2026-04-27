const fs = require('fs');

const content = "You just edited this file";

fs.writeFile('message.txt', content, (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("File created successfully!");
});