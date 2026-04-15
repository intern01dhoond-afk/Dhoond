const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const userRoutes = require("./routes/user.route");
const partnerRoutes = require("./routes/partner.route");
const orderRoutes = require("./routes/order.route");
const paymentRoutes = require("./routes/payment.route");
app.use("/api/V1/users", userRoutes);
app.use("/api/V1/partners", partnerRoutes);
app.use("/api/V1/orders", orderRoutes);
app.use("/api/V1/payments", paymentRoutes);

module.exports = app;
