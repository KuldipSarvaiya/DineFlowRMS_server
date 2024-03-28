import { Router } from "express";
import {
  create_table,
  delete_table,
  select_table,
  show_busy_tables,
  show_tables,
  update_table,
} from "../controllers/table.js";

const Table_R = new Router();

Table_R.get("/", show_tables);
Table_R.get("/busy", show_busy_tables);
Table_R.get("/:id", select_table);
Table_R.post("/", create_table);
Table_R.put("/:id", update_table);
Table_R.delete("/:id", delete_table);

export default Table_R;
