import { Router } from "express";
import {
  create_customer,
  delete_customer,
  search_customer_signin,
  select_customer,
  show_customers,
  update_customer,
} from "../controllers/customer.js";

const Customer_R = new Router();

Customer_R.get("/", show_customers);
Customer_R.get("/search", search_customer_signin);
Customer_R.get("/:id", select_customer);
Customer_R.post("/", create_customer);
Customer_R.put("/:id", update_customer);
Customer_R.delete("/:id", delete_customer);

export default Customer_R;
