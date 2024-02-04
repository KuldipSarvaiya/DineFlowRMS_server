import { Router } from "express";
import {
  create_role,
  delete_role,
  select_role,
  show_roles,
  update_role,
} from "../controllers/role.js";

const Role_R = new Router();

Role_R.get("/", show_roles);
Role_R.get("/:id", select_role);
Role_R.post("/", create_role);
Role_R.put("/", update_role);
Role_R.delete("/:id", delete_role);

export default Role_R;
