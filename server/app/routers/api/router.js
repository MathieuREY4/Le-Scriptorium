const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const userRouter = require("./userRouter");

router.use("/items", itemsRouter);
router.use("/user", userRouter);

/* ************************************************************************* */

module.exports = router;
