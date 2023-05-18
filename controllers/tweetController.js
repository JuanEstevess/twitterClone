const Tweet = require("../models/Tweet");

async function indexTweet(req, res) {
  return res.render("home");
}

async function storeTweet(req, res) {
  return res.render("create tweet");
}

async function like(req, res) {
  const tweetId = req.params._id;
  const tweet = await Tweet.findByIdAndUpdate(tweetId, { $inc: { likes: 1 } });

  if (!tweet) {
    return res.send("Tweet no encontrado");
  } else {
    tweet.likes += 1;
    await tweet.save();
  }
  return tweet;
}

module.exports = {
  indexTweet,
  storeTweet,
  like,
};
