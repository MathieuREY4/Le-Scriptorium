const express = require("express");
const ratingActions = require("../../controllers/RatingActions");
const { verifyToken } = require("../../services/auth");

const upload = require("../../../utils/multer");

const router = express.Router();

router.get("/", ratingActions.browse);

router.get("/:id", ratingActions.read);

router.post("/", verifyToken, upload.single("file"), ratingActions.add);

router.put("/:id", ratingActions.edit);

router.delete("/:id", ratingActions.destroy);

module.exports = router;
