const userModel = require("../models/user.model");

const createUserController = async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name and phone are required",
      });
    }

    const user = await userModel.createUser(name, phone, email);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({
        message: "Phone or email already exists",
      });
    }

    res.status(500).json({
      message: error.message,
    });
  }
};

const getUsersController = async (req, res) => {
  const users = await userModel.getUsers();
  res.json(users);
};

module.exports = {
  createUserController,
  getUsersController,
};