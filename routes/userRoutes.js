const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

router.get("/", ensureAuthenticated, tweetController.indexTweet);
router.get("/crear", userController.create);
// router.get("/:id", userController.show);
router.post("/", userController.store);
// router.get("/editar/:id", userController.edit);
// router.patch("/:id", userController.update);
// router.delete("/:id", userController.destroy);

module.exports = router;
