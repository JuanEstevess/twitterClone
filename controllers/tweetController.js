const Tweet = require("../models/Tweet");
const path = require("path");

async function indexTweet(req, res) {
  const allTweets = await Tweet.find().populate({ path: "user" });
  return res.render("pages/index", { allTweets });
}

async function storeTweet(req, res) {
  const user = req.user;
  console.log(user);

  const newTweet = new Tweet({
    content: req.body.tweetContent,
    likes: [],
    date: new Date(),
    user: user._id,
  });

  await newTweet.save();
  console.log(newTweet);

  //return res.render(path.join("pages", "index"), { newTweet });
  return res.redirect("/");
}

async function destroy(req, res) {
  const id = req.params._id;
  await Tweet.deleteOne({ _id: id });

  return res.render("pages/index"); //corregir ruta de renderizado
}

module.exports = {
  indexTweet,
  storeTweet,
  destroy,
};
