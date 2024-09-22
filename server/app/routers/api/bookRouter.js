const express = require("express");

const router = express.Router();

const bookActions = require("../../controllers/BookActions");

const { verifyToken } = require("../../services/auth");

router.get("/", bookActions.browse);

router.get("/:id", bookActions.read);

router.post("/", verifyToken, bookActions.add);

router.put("/:id", bookActions.edit);

router.delete("/:id", bookActions.destroy);

module.exports = router;
