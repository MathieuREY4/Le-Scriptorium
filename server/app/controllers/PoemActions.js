// const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const poems = await tables.poem.readAll();
    res.json(poems);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const poem = await tables.poem.read(Number(req.params.id));
    if (poem == null) {
      res.sendStatus(404);
    } else {
      res.json(poem);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const poem = { ...req.body, id_poem: req.params.id }; // Utilisation de id_poem

  try {
    await tables.poem.update(poem);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const result = await tables.poem.create({
      title: req.body.title,
      content: req.body.text,
      id_user: req.user.id_user,
      cover_image: req.body.cover_image,
    });

    console.info("result:", result);

    res.status(201).send(`Poème ajouté avec succès. ID : ${result.insertId}`);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.poem.delete(req.params.id);
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
