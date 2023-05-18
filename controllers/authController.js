const { passport } = require("../config/passport");

async function login(req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })(req, res);
}

async function logout(req, res) {
  req.logout(function (error) {
    if (error) {
      return next(error);
    }
    res.redirect("/");
  });
}

module.exports = {
  login,
  logout,
};
