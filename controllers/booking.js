import connection from "../db.js";

export function show_bookings(req, res) {
  const q = "SELECT * FROM `booking`";
  try {
    connection.query(q, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function select_booking(req, res) {
  const q = "SELECT * FROM `booking` WHERE `booking_id` = ?";
  const values = [req.params.id];
  try {
    connection.query(q, values, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function create_booking(req, res) {
  const q =
    "INSERT INTO `booking`(`table_id`, `customer_id`, `booking_date`, `booking_time`, `duration`, `is_accepted`, `entry_date`, `entry_by`, `entry_by_role`) VALUES (?)";

  const values = [
    req.body.table_id,
    req.body.customer_id,
    req.body.booking_date,
    req.body.booking_time,
    req.body.duration,
    "Pending",
    new Date(),
    req.body.entry_by,
    req.body.entry_by_role,
  ];
  try {
    connection.query(q, values, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function update_booking(req, res) {
  const q =
    "UPDATE `booking` SET `is_accepted`=?,`update_date`=?,`updated_by`=?,`updated_by_role`='?' WHERE `booking_id` = ?";
  const values = [
    req.body.booking_state,
    new Date(),
    req.body.updated_by,
    req.body.updated_by_role,
  ];
  try {
    connection.query(q, [...values, req.params.id], (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function delete_booking(req, res) {
  const q = "DELETE FROM `booking` WHERE `booking_id` = ?";
  try {
    connection.query(q, req, body.id, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}
