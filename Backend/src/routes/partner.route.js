const express = require("express");
const router = express.Router();

const {
  createPartnerController,
  getPartnersController,
} = require("../controllers/partner.controller");

router.post("/create", createPartnerController);
router.get("/all", getPartnersController);

module.exports = router;
