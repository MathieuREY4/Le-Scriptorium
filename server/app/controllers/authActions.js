const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");
require("dotenv").config();

const checkAuth = async (req, res, next) => {
  try {
    const { auth } = req.cookies;

    if (!auth) {
      res.sendStatus(401);
    } else {
      const decode = jwt.verify(auth, process.env.APP_SECRET);
      if (!decode) res.sendStatus(401);
      else {
        const user = await tables.user.read(decode.id_user);
        res.status(200).json({
          id_user: user.id_user,
          pseudo: user.pseudo,
          role: user.role,
        });
      }
    }
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("auth");
    res.status(200).json({ message: "Déconnexion réussie" });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    res.cookie("auth", req.token).json({
      message: "Connexion réussie",
      id_user: req.user.id_user,
      email: req.user.email,
      pseudo: req.user.pseudo,
      role: req.user.role,
    });
  } catch (err) {
    next(err);
  }
};

const register = async (req, res, next) => {
  try {
    const { pseudo, username, hashedPassword, email, role = "user" } = req.body;

    console.info(hashedPassword);

    await tables.user.create({
      pseudo,
      username,
      name: pseudo,
      password: hashedPassword,
      email,
      role,
    });

    res.status(200).json({ message: "Inscription réussie" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkAuth,
  logout,
  login,
  register,
};
