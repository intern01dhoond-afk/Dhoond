const express = require("express");
const router = express.Router();

const {
  createUserController,
  getUsersController,
} = require("../controllers/user.controller");

router.post("/create", createUserController);
router.get("/all", getUsersController);

module.exports = router;