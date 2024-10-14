const express = require("express");

const router = express.Router();
const upload = require("../../../utils/multer");
const genreActions = require("../../controllers/genreActions");

const { verifyToken } = require("../../services/auth");

router.get("/", genreActions.browse);

router.get("/:id", genreActions.read);

router.post("/", verifyToken, upload.single("file"), genreActions.add);

router.put("/:id", genreActions.edit);

router.delete("/:id", genreActions.destroy);

module.exports = router;
