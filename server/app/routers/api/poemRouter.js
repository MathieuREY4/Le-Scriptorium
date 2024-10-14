const express = require("express");

const router = express.Router();
const upload = require("../../../utils/multer");
const poemActions = require("../../controllers/PoemActions");

const { verifyToken } = require("../../services/auth");

router.get("/", poemActions.browse);

router.get("/:id", poemActions.read);

router.post("/", verifyToken, upload.single("file"), poemActions.add);

router.put("/:id", poemActions.edit);

router.delete("/:id", poemActions.destroy);

module.exports = router;
