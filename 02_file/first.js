const fs = require("fs");

fs.writeFile("output.txt", "Hello Node.js", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("File written successfully");
});
