import { Router } from "express";
import {
  create_customer,
  delete_customer,
  select_customer,
  show_customers,
  update_customer,
} from "../controllers/customer";

const Customer_R = new Router();

Customer_R.get("/", show_customers);
Customer_R.get("/:id", select_customer);
Customer_R.post("/", create_customer);
Customer_R.put("/", update_customer);
Customer_R.delete("/:id", delete_customer);

export default Customer_R;
