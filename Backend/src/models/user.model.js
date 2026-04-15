const pool = require("../db/db");

const createUser = async (name, phone, email) => {
  const result = await pool.query(
    "INSERT INTO users (name, phone, email) VALUES ($1, $2, $3) RETURNING *",
    [name, phone, email]
  );
  return result.rows[0];
};

const getUsers = async () => {
  const result = await pool.query("SELECT * FROM users ORDER BY created_at DESC");
  return result.rows;
};

module.exports = {
  createUser,
  getUsers,
};