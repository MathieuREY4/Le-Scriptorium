const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const userRouter = require("./userRouter");
const authRouter = require("./authRouter");
const bookRouter = require("./bookRouter");
const poemRouter = require("./poemRouter");
const genreRouter = require("./genreRouter");
const ratingRouter = require("./ratingRouter");

router.use("/items", itemsRouter);
router.use("/user", userRouter);
router.use("/genre", genreRouter);
router.use("/book", bookRouter);
router.use("/poem", poemRouter);
router.use("/rating", ratingRouter);
router.use("/auth", authRouter);

/* ************************************************************************* */

module.exports = router;
