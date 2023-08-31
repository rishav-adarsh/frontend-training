require('dotenv').config();
const experss = require("express");
const app = experss();
const testRouter = require("./routes/test");
const helmet = require("helmet");
const morgan = require("morgan");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
// const PORT_NUMBER = 3000;
const PORT_NUMBER = argv.port || 3000; // node server.js --port=5000
// dotenv config:
console.log(process.env.DB_USER, process.env.DB_PASSWORD);

// application setup realted:
app.use(helmet()); // hides confidential stuffs in headers like X-Powered-By
app.use(morgan("dev")); // logger
app.use(experss.json()); // for parsing JSON bodies (req)
app.use(experss.urlencoded({ extended: true })); // for parsing url encoded bodies
// app routes defined here:
app.use("/test", testRouter);
// start running application after entire setup is complete:
app.listen(PORT_NUMBER, (err) => {
  console.log("Attemping to start server...");
  if (err) {
    console.log("Failed to start server");
    return process.exit(1);
  }
  console.log(`Started server on http://localhost:${PORT_NUMBER}`);
});
