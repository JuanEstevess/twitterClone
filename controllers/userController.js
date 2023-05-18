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
  return res.render("pages/register");
}

// Store a newly created resource in storage.

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
