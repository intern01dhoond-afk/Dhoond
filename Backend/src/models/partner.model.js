const pool = require("../db/db");

const createPartner = async (name, phone) => {
  const result = await pool.query(
    "INSERT INTO partners (name, phone) VALUES ($1, $2) RETURNING *",
    [name, phone]
  );
  return result.rows[0];
};

const getPartners = async () => {
  const result = await pool.query("SELECT * FROM partners");
  return result.rows;
};

module.exports = {
  createPartner,
  getPartners,
};