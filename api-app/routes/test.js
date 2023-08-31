const router = require("express").Router();

// GET : /test/:id
// :param : required data
// :param? : optional data
// (query params) : optional data, ?page=1&order=asc
router.get("/:id?", (req, res) => {
  return res
    .status(201)
    .json({ pathParams: req.params, queryParams: req.query });
});

router.post("/", (req, res) => {
  return res.json({ body: req.body });
});

module.exports = router;
