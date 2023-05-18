const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/tweetController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

router.get("/", ensureAuthenticated, tweetController.indexTweet);
router.post("/", ensureAuthenticated, tweetController.storeTweet);
router.delete("/", ensureAuthenticated, tweetController.destroy);

module.exports = router;
