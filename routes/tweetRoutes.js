const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/tweetController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

router.get("/", ensureAuthenticated, tweetController.indexTweet);
