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
  return res.render("pages/register"); //ajustar ruta
}

// Store a newly created resource in storage.
async function store(req, res) {
  const register = await User.updateOne(
    {
      email: req.params.email,
    },
    {
      $setOnInsert: {
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
      },
    },
    { upsert: true },
  );
  if (register) {
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

// ...

module.exports = {
  index,
  show,
  create,
  edit,
  update,
  destroy,
};
