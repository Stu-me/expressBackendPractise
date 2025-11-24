
const fs = require("fs");

console.log("we start here");

fs.readFile("read.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Remove extra spaces (multiple spaces -> single space, trim ends)
    const cleaned = data.replace(/\s+/g, " ").trim();

    fs.writeFile("read.txt", cleaned, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }

        console.log("------- The extra spaces should be removed -------");
        console.log(fs.readFileSync("read.txt", "utf8"));
    });
});
