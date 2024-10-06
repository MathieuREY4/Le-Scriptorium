const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const books = await tables.book.readAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const book = await tables.book.read(Number(req.params.id));
    if (book == null) {
      res.sendStatus(404);
    } else {
      res.json(book);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const book = { ...req.body, id: req.params.id };

  try {
    await tables.recipe.update(book);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const book = req.body;

  try {
    const insertId = await tables.recipe.create(book);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.book.delete(req.params.id);
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
