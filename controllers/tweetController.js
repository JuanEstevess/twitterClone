const Tweet = require("../models/Tweet");

async function indexTweet(req, res) {
  const allTweets = await Tweet.find().populate({ path: "user" });
  for (let i = 0; i < allTweets.length; i++) {
    allTweets[i].formattedData = formattedData(allTweets[i].date);
  }
  return res.render("pages/index", { allTweets });
}

async function storeTweet(req, res) {
  const user = req.user;
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

function formattedData(dateTweet) {
  const currentDate = new Date();
  dateTweet = new Date(dateTweet);

  const isOldestTweet = dateTweet < currentDate - 1000 * 60 * 60 * 24 * 30;
  const isOldTweet = dateTweet < currentDate - 1000 * 60 * 60 * 24;
  const isTodayTweet = dateTweet > currentDate - 1000 * 60 * 60 * 24;
  let formattedData;
  if (isTodayTweet) {
    const hours = Math.floor((currentDate - dateTweet) / (1000 * 60 * 60));
    formattedData = `${hours} hours ago`;
  }
  if (isOldTweet) {
    const day = dateTweet.toLocaleString("default", { day: "numeric" });
    const month = dateTweet.toLocaleString("default", { month: "long" });
    formattedData = `${month} ${day}`;
  }
  if (isOldestTweet) {
    const month = dateTweet.toLocaleString("default", { month: "long" });
    const year = dateTweet.getFullYear();
    formattedData = `${month} ${year}`;
  }

  return formattedData;
}

module.exports = {
  indexTweet,
  storeTweet,
  destroy,
};
