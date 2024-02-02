import { Router } from "express";
import {
  create_order,
  delete_order,
  select_order,
  show_orders,
  update_order,
} from "../controllers/order.js";

const Order_R = new Router();

Order_R.get("/", show_orders);
Order_R.get("/:id", select_order);
Order_R.post("/", create_order);
Order_R.put("/", update_order);
Order_R.delete("/:id", delete_order);

export default Order_R;
