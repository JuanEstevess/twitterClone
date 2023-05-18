const Tweet = require("../models/Tweet");

async function indexTweet(req, res) {
  return res.render("pages/index"); //revisar redirect
}

async function storeTweet(req, res) {
  const user = req.params.user;

  const newTweet = new Tweet({
    content: req.body.content,
    likes: [],
    date: new Date(),
    author: user._id,
  });

  await newTweet.save();

  return res.redirect("/"); //reviar redirect
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
