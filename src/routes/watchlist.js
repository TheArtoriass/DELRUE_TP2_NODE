const express = require("express");
const router = express.Router();
const { createWatchlist,findWatchlist,addItemToWatchlist } = require("../controllers/watchlist");

router.post("/create",createWatchlist);
router.get("/find",findWatchlist);
router.get("/add/:id",addItemToWatchlist);


module.exports = router;