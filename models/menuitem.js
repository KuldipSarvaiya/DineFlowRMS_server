import { Router } from "express";
import {
  create_menuitem,
  delete_menuitem,
  select_menuitem,
  show_menuitems,
  update_menuitem,
} from "../controllers/menuitem.js";
import upload from "../multer.js";

const Menuitem_R = new Router();

Menuitem_R.get("/", show_menuitems);
Menuitem_R.get("/:id", select_menuitem); 
Menuitem_R.post("/", upload.single("img"), create_menuitem);
Menuitem_R.put("/:id", upload.single("img"), update_menuitem);
Menuitem_R.delete("/:id", delete_menuitem);

export default Menuitem_R;
