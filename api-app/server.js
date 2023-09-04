require("dotenv").config();
const experss = require("express");
const app = experss();
const db = require("./db");

const testRouter = require("./routes/test");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const { rateLimit } = require("express-rate-limit");
const authMiddleware = require("./middlewares/auth");

const helmet = require("helmet");
const morgan = require("morgan");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
// const PORT_NUMBER = 3000;
const PORT_NUMBER = argv.port || 3000; // node server.js --port=5000
// dotenv config:
console.log(process.env.DB_USER, process.env.DB_PASSWORD);

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: "draft-7", // draft-6: RateLimit-* headers; draft-7: combined RateLimit header
  legacyHeaders: false, // X-RateLimit-* headers
});

// application setup realted:
app.use(helmet()); // hides confidential stuffs in headers like X-Powered-By
app.use(authMiddleware)
app.use(morgan("dev")); // logger
app.use(limiter);
app.use(experss.json()); // for parsing JSON bodies (req)
app.use(experss.urlencoded({ extended: true })); // for parsing url encoded bodies

// app routes defined here:
app.use("/test", testRouter);
app.use("/product", productRouter);
app.use("/auth", userRouter);

// start running application after entire setup is complete:
app.listen(PORT_NUMBER, (err) => {
  console.log("Attemping to start server...");
  if (err) {
    console.log("Failed to start server");
    return process.exit(1);
  }
  console.log(`Started server on http://localhost:${PORT_NUMBER}`);
  db().catch((e) => console.log("failed to connect to DB", e));
});
