const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  if (req.url.includes("/auth")) {
    return next();
  }

  if (req.headers["authorization"]) {
    const token = req.headers["authorization"].split(" ")[1];
    try {
      jwt.verify(token, process.env.SECRET_KEY);
      return next();
    } catch {
      return res.status(401).json({ message: "unauthorized access" });
    }
  } else {
    return res.status(401).json({ message: "unauthorized access" });
  }
}

module.exports = authMiddleware;
