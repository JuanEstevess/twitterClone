const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

router.get("/", ensureAuthenticated, tweetController.indexTweet);
router.get("/crear", userController.create);
router.get("/:id", ensureAuthenticated, userController.show);
router.post("/crear", userController.store);
// router.get("/editar/:id", userController.edit);
// router.patch("/:id", userController.update);
// router.delete("/:id", userController.destroy);
router.get("/:id/followers", userController.showFollowers);
router.get("/:id/following", userController.showFollowing);

module.exports = router;
