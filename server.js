import express from "express";
import cors from "cors";
// routes
import Booking_R from "./models/booking.js";
import Contact_us_R from "./models/contact_us.js";
import Customer_R from "./models/customer.js";
import Employee_R from "./models/employee.js";
import Feedback_R from "./models/feedback.js";
import Menuitem_R from "./models/menuitrm.js";
import Order_R from "./models/order.js";
import Role_R from "./models/role.js";
import Table_R from "./models/table.js";
import Trn_order_R from "./models/trn_order.js";

const App = express();

App.use(cors({ origin: "*" })); // to allow domains to access api
App.use(express.json()); // to parse request body

// database models routes
App.use("/images", express.static("images"));
App.use("/booking", Booking_R);
App.use("/contact_us", Contact_us_R);
App.use("/customer", Customer_R);
App.use("/employee", Employee_R);
App.use("/feedback", Feedback_R);
App.use("/menuitem", Menuitem_R);
App.use("/order", Order_R);
App.use("/role", Role_R);
App.use("/table", Table_R);
App.use("/trn_order", Trn_order_R);

// Start an Express Server
App.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, (err) => {
  console.clear();
  err && console.warn(err);
  console.log("********DineFlow Server has started Running on http://localhost:8080 \n");
});
