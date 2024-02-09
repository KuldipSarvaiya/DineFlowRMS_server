import connection from "../db.js";

export function show_orders(req, res) {
  const q = "SELECT * FROM `order`";
  try {
    connection.query(q, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      if (err) res.status(500).json(err);
      else res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function select_order(req, res) {
  const q = "SELECT * FROM `order` WHERE `order_id` = ?";
  try {
    connection.query(q, [req.params.id], (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      if (err) res.status(500).json(err);
      else res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function create_order(req, res) {
  const q =
    "INSERT INTO `order`(`customer_id`, `booking_id`, `allow_orders`, `sub_total`, `discount`, `charges`, `net_total`, `entry_date`, `entry_by`, `entry_by_role`) VALUES (?)";
  const values = [
    req.body.customer_id,
    req.body.booking_id,
    req.body.allow_orders,
    0,
    0,
    0,
    0,
    new Date(),
    req.body.entry_by,
    req.body.entry_by_role,
  ];
  try {
    connection.query(q, [values], (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      if (err) res.status(500).json(err);
      else res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function update_order(req, res) {
  const q =
    "UPDATE `order` SET `customer_id`=?,`booking_id`=?, `allow_orders`=?,`sub_total`=?,`discount`=?,`charges`=?,`net_total`=?,`update_date`=?,`updated_by`=?,`updated_by_role`=? WHERE `order_id` = ?";
  const values = [
    req.body.customer_id,
    req.body.booking_id,
    req.body.allow_orders,
    req.body.sub_total,
    req.body.discount,
    req.body.charges,
    req.body.net_total,
    new Date(),
    req.body.updated_by,
    req.body.updated_by_role,
  ];
  try {
    connection.query(q, [...values, req.params.id], (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      if (err) res.status(500).json(err);
      else res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function delete_order(req, res) {
  const q = "DELETE FROM `order` WHERE `order_id` = ?";
  try {
    connection.query(q, [req.params.id], (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      if (err) res.status(500).json(err);
      else res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}
