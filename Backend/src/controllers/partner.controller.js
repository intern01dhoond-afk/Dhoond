const partnerModel = require("../models/partner.model");

const createPartnerController = async (req, res) => {
  try {
    const { name, phone } = req.body;

    const partner = await partnerModel.createPartner(name, phone);

    res.status(201).json({
      success: true,
      data: partner,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPartnersController = async (req, res) => {
  const partners = await partnerModel.getPartners();
  res.json(partners);
};

module.exports = {
  createPartnerController,
  getPartnersController,
};