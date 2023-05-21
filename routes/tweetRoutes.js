const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/tweetController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

router.get("/", ensureAuthenticated, tweetController.indexTweet);
router.post("/", ensureAuthenticated, tweetController.storeTweet);
router.delete("/tweet/:id", ensureAuthenticated, tweetController.destroy);
router.post("/like/:id", ensureAuthenticated, tweetController.likeTweet);

module.exports = router;
