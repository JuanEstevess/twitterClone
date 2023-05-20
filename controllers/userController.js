const Tweet = require("../models/Tweet");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const profile = true;
  const id = req.params.id;
  const user = await User.findById(id);
  const allTweets = await Tweet.find({ user: id }).populate({ path: "user" });
  return res.render("pages/myProfile", { allTweets, user, profile });
}

// Show the form for creating a new resource
async function create(req, res) {
  return res.render("pages/register"); //ajustar ruta
}

// Store a newly created resource in storage.
async function store(req, res) {
  const register = await User.updateOne(
    {
      email: req.body.email,
    },
    {
      $setOnInsert: {
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: await bcrypt.hash(req.body.password, 5),
      },
    },
    { upsert: true },
  );

  if (register.upserted) {
    req.login(user, () => {
      //req.flash("success", "User created succesfully");
      res.redirect("/");
    });
  } else {
    //req.flash("info", "User already exists, please log in");
    res.redirect("/login");
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

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

async function showFollowers(req, res) {
  const userId = req.params.id;
  const user = await User.findById(userId);
  const followersId = user.followers;
  const followers = await User.find({ _id: { $in: followersId } });
  return res.render("pages/followers", { followers });
}

async function showFollowing(req, res) {
  const userId = req.params.id;
  const user = await User.findById(userId);
  const followingId = user.following;
  const following = await User.find({ _id: { $in: followingId } });
  return res.render("pages/following", { following });
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  like,
  showFollowers,
  showFollowing,
};
