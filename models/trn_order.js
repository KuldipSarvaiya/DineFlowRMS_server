import { Router } from "express";
import {
  create_trn_order,
  delete_trn_order,
  get_my_trn_order,
  get_pending_trn_orders,
  get_trn_order_by_table,
  select_trn_order,
  show_trn_orders,
  update_trn_order,
} from "../controllers/trn_order.js";

const Trn_order_R = new Router();

Trn_order_R.get("/", show_trn_orders);
Trn_order_R.get("/for_chef/:id", get_pending_trn_orders);
Trn_order_R.get("/:id", select_trn_order);
Trn_order_R.get("/get_my_trn_orders/:id", get_my_trn_order);
Trn_order_R.get("/get_trn_order_by_table/:id", get_trn_order_by_table);
Trn_order_R.post("/", create_trn_order);
Trn_order_R.put("/:id", update_trn_order);
Trn_order_R.delete("/:id", delete_trn_order);

export default Trn_order_R;
