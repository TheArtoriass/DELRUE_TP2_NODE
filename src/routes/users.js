const express = require("express");
const router = express.Router();
const { createUser, findUser, getUser } = require("../controllers/users");
const userSchema = require("../schemas/users");
const { validateSchemaMiddleware } = require("../services/validateSchema");


router.post("/create", validateSchemaMiddleware(userSchema), createUser);
router.get("/get", getUser);
router.get("/find", findUser)

module.exports = router;
