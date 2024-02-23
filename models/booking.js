import { Router } from "express";
import {
  create_booking,
  delete_booking,
  bookings_requests,
  select_booking,
  show_bookings,
  upcoming_bookings,
  update_booking,
} from "../controllers/booking.js";

const Booking_R = new Router();

Booking_R.get("/", show_bookings);
Booking_R.get("/manage/upcoming", upcoming_bookings);
Booking_R.get("/manage/pending", bookings_requests);
Booking_R.get("/:id", select_booking);
Booking_R.post("/", create_booking);
Booking_R.put("/:id", update_booking);
Booking_R.delete("/:id", delete_booking);

export default Booking_R;
