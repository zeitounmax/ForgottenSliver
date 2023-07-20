const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.post("/users", userControllers.add);

const postControllers = require("./controllers/postControllers ");

router.get("/post", postControllers.browse);
router.get("/post/:id", postControllers.read);
router.put("/post/:id", postControllers.edit);
router.post("/post", postControllers.add);
router.delete("/post/:id", postControllers.destroy);

module.exports = router;
