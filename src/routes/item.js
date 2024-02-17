const express = require("express");
const router = express.Router();
const { AddItem, findItem } = require("../controllers/item");

router.post("/create", AddItem);
router.get("/find", findItem)

module.exports = router;
