const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const genres = await tables.genre.readAll();
    res.json(genres);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const genre = await tables.genre.read(Number(req.params.id));
    if (genre == null) {
      res.sendStatus(404);
    } else {
      res.json(genre);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const genre = { ...req.body, id: req.params.id };

  try {
    await tables.genre.update(genre);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const genre = req.body;

  try {
    const insertId = await tables.book.create(genre);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.genre.delete(req.params.id);
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
