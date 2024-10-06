const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const userRouter = require("./userRouter");
const bookRouter = require("./bookRouter");

router.use("/items", itemsRouter);
router.use("/user", userRouter);
router.use("/book", bookRouter);

/* ************************************************************************* */

module.exports = router;
