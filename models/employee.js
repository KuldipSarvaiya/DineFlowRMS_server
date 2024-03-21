import { Router } from "express";
import {
  create_employee,
  delete_employee,
  search_employee_signin,
  select_employee,
  show_employees,
  update_employee,
} from "../controllers/employee.js";

const Employee_R = new Router();

Employee_R.get("/", show_employees);
Employee_R.get("/search", search_employee_signin);
Employee_R.get("/:id", select_employee);
Employee_R.post("/", create_employee);
Employee_R.put("/:id", update_employee);
Employee_R.delete("/:id", delete_employee);

export default Employee_R;
