import { Router } from "express";
import {
  create_order,
  delete_order,
  generate_bill,
  get_bill,
  select_order,
  select_order_for_customer,
  show_my_current_orders,
  show_my_orders,
  show_orders,
  show_orders_today,
  update_order,
} from "../controllers/order.js";

const Order_R = new Router();

Order_R.get("/", show_orders);
Order_R.get("/today", show_orders_today);
Order_R.get("/my_orders/:id", show_my_orders);
Order_R.get("/my_current_orders/:id", show_my_current_orders);
Order_R.put("/generate_bill/:id", generate_bill);
Order_R.get("/get_bill/:id", get_bill);
Order_R.get("/:id", select_order);
Order_R.get("/by_customer/:id", select_order_for_customer);
Order_R.post("/", create_order);
Order_R.put("/:id", update_order);
Order_R.delete("/:id", delete_order);

export default Order_R;
