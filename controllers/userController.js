const User = require("../models/User");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...

// ...
/*async function like(req, res) {
  const tweetId = req.params._id;
  const tweet = await Tweet.findByIdAndUpdate(tweetId, { $inc: { likes: 1 } });

  if (!tweet) {
    return res.send("Tweet no encontrado");
  } else {
    tweet.likes += 1;
    await tweet.save();
  }
  return tweet;
} (capaz sirve para los likes)*/

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
