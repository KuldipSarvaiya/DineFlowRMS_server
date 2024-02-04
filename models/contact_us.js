import { Router } from "express";
import {
  create_contact_us,
  delete_contact_us,
  select_contact_us,
  show_contact_uss,
  update_contact_us,
} from "../controllers/contact_us.js";

const Contact_us_R = new Router();

Contact_us_R.get("/", show_contact_uss);
Contact_us_R.get("/:id", select_contact_us);
Contact_us_R.post("/", create_contact_us);
Contact_us_R.put("/", update_contact_us);
Contact_us_R.delete("/:id", delete_contact_us);

export default Contact_us_R;
