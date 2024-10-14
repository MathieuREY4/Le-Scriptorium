const express = require("express");

const router = express.Router();
const upload = require("../../../utils/multer");
const bookActions = require("../../controllers/BookActions");

const { verifyToken } = require("../../services/auth");

router.get("/", bookActions.browse);

router.get("/:id", bookActions.read);

router.post("/", verifyToken, upload.single("file"), bookActions.add);

router.put("/:id", bookActions.edit);

router.delete("/:id", bookActions.destroy);

module.exports = router;
