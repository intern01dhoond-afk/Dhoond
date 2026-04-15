const pool = require("../db/db");

const createOrder = async (user_id, partner_id, category_id, address, price, platform_fee) => {
  const result = await pool.query(
    `INSERT INTO orders (user_id, partner_id, category_id, address, price, platform_fee)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [user_id, partner_id, category_id, address, price, platform_fee]
  );

  return result.rows[0];
};

const getOrders = async () => {
  const result = await pool.query(
    "SELECT * FROM orders ORDER BY created_at DESC"
  );
  return result.rows;
};

module.exports = {
  createOrder,
  getOrders,
};