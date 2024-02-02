import { Router } from "express";
import {
  create_trn_order,
  delete_trn_order,
  select_trn_order,
  show_trn_orders,
  update_trn_order,
} from "../controllers/trn_order.js";

const Trn_order_R = new Router();

Trn_order_R.get("/", show_trn_orders);
Trn_order_R.get("/:id", select_trn_order);
Trn_order_R.post("/", create_trn_order);
Trn_order_R.put("/", update_trn_order);
Trn_order_R.delete("/:id", delete_trn_order);

export default Trn_order_R;
