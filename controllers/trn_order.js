import connection from "../db.js";

export function show_trn_orders(req, res) {
  const q = "SELECT * FROM `trn_order`";
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

export function select_trn_order(req, res) {
  const q = "SELECT * FROM `trn_order` WHERE `trn_order_id` = ?";
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

export function create_trn_order(req, res) {
  const q =
    "INSERT INTO `trn_order`(`order_id`, `menuitem_id`, `order_status`, `qty`, `price`, `remark`, `entry_date`, `entry_by`, `entry_by_role`) VALUES (?)";
  const values = [
    req.body.order_id,
    req.body.menuitemm_id,
    "Pending",
    req.body.qty,
    req.body.price,
    req.body.remark,
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

export function update_trn_order(req, res) {
  const q =
    "UPDATE `trn_order` SET `order_id`=?,`menuitem_id`=?,`order_status`=?,`qty`=?,`price`=?,`remark`=?,`update_date`=?,`updated_by`=?,`updated_by_role`=? WHERE `trn_order_id` = ?";
  const values = [
    req.body.order_id,
    req.body.menuitemm_id,
    req.body.order_status,
    req.body.qty,
    req.body.price,
    req.body.remark,
    new Date(),
    req.body.updated_by,
    req.body.updated_by_role,
    req.params.id,
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

export function delete_trn_order(req, res) {
  const q = "DELETE FROM `trn_order` WHERE `trn_order_id` = ?";
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
