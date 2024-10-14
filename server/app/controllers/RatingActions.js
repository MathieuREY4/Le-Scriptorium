const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const ratings = await tables.rating.readAll();
    res.json(ratings);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const rating = await tables.rating.read(Number(req.params.id));
    if (rating == null) {
      res.sendStatus(404);
    } else {
      res.json(rating);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const rating = { ...req.body, id_rating: req.params.id };

  try {
    await tables.rating.update(rating);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const token = req.cookies.auth;
    const decodedToken = await jwt.decode(token);
    const userId = decodedToken.id;

    req.body.id_user = userId; // Ajout de l'ID utilisateur

    const result = await tables.rating.create(req.body);

    res
      .status(201)
      .send(`Évaluation ajoutée avec succès. ID : ${result.insertId}`);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.rating.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
