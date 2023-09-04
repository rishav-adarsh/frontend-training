const router = require("express").Router();
const repo = require("../repos/product");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// POST : /product/upload
router.post("/upload", upload.single("image"), (req, res) => {
  try {
    return res.status(200).json(req.file);
  } catch (e) {
    return res.status(400).json(e);
  }
});

// POST : /product
router.post("/", async (req, res) => {
  try {
    await repo.addProduct(req.body);
    res.status(201).send();
  } catch (e) {
    return res.status(400).json(e);
  }
});

// GET : /product
router.get("/:id?", async (req, res) => {
  try {
    let data;
    if (req.params.id) {
      data = await repo.getProductById(req.params.id);
    } else {
      data = await repo.getAllProducts();
    }
    return res.json(data);
  } catch (e) {
    return res.status(400).json(e);
  }
});

// PUT : /product
router.put("/:id?", async (req, res) => {
  try {
    await repo.updateProduct(req.params.id, req.body);
    res.status(200).send();
  } catch (e) {
    return res.status(400).json(e);
  }
});

// DELETE : /product
router.delete("/:id?", async (req, res) => {
  try {
    await repo.removeProduct(req.params.id);
    res.send();
  } catch (e) {
    return res.status(400).json(e);
  }
});

module.exports = router;
