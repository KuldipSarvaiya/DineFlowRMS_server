import connection from "../db.js";

export function show_roles(req, res) {
  const q = "SELECT * FROM `role`";
  try {
    connection.query(q, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function select_role(req, res) {
  const q = "SELECT * FROM `role` WHERE `role_id` = ?";
  try {
    connection.query(q, req.params.id, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function create_role(req, res) {
  const q = "INSERT INTO `role`(`role_name`, `entry_date`) VALUES (?)";
  const values = [req.body.role_name, new Date()];
  try {
    connection.query(q, values, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function update_role(req, res) {
  const q =
    "UPDATE `role` SET `role_name`=?, `update_date`=? WHERE `role_id` = ?";
  const values = [req.body.role_name, new Date(), req.params.id];
  try {
    connection.query(q, values, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function delete_role(req, res) {
  const q = "DELETE FROM `role` WHERE `role_id` = ?";
  try {
    connection.query(q, req.params.id, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}
