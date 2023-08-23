const path = require("path");

module.exports = {
    entry: "./main.js", // entry file
    output: {
        path: path.resolve(__dirname, "dist"), // o/p folder name (dist/build)
        filename: "bundle.js", // o/p filename
    },
    mode: "production",
};