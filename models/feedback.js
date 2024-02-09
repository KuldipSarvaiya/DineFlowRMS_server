import { Router } from "express";
import {
  create_feedback,
  delete_feedback,
  select_feedback,
  show_feedbacks,
  // update_feedback,rs
} from "../controllers/feedback.js";

const Feedback_R = new Router();

Feedback_R.get("/", show_feedbacks);
Feedback_R.get("/:id", select_feedback);
Feedback_R.post("/", create_feedback);
// Feedback_R.put("/:id", update_feedback);
Feedback_R.delete("/:id", delete_feedback);

export default Feedback_R;
