const fs = require("node:fs/promises");

fs.writeFile("data.txt", "data in the file")
  .then((res) => {
    console.log("file created");
  })
  .catch((err) => {
    console.log("file creation failed");
  });
