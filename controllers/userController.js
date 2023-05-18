const Tweet = require("../models/Tweet");
const User = require("../models/User");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const id = req.params._id;
  const userId = await User.findById({ _id: id });

  return res.render("vista del perfil", { userId }); // ajustar ruta
}

// Show the form for creating a new resource
async function create(req, res) {
  return res.render("users/create"); //ajustar ruta
}

// Store a newly created resource in storage.
async function store(req, res) {
  const { email, username } = req.body;
  const existingUser = await User.findOneAndUpdate({ email, username }); //

  if (existingUser) {
    return res.send("El mail ya se encuentra registrado");
  } else {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
      image: req.body.image,
    });

    await User.create({ newUser });
  }

  return res.redirect("/");
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
