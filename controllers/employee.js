import connection from "../db.js";

export function show_employees(req, res) {
  const q = "SELECT * FROM `employee`";
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

export function select_employee(req, res) {
  const q = "SELECT * FROM `employee` WHERE `employee_id` = ?";
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

export function create_employee(req, res) {
  const q =
    "INSERT INTO `employee`(`name`, `doj`, `role_id`, `mobile`, `email_id`, `password`, `entry_date`, `entry_by`, `entry_by_role`) VALUES (?)";
  const values = [
    req.body.name,
    new Date(),
    req.body.role_id,
    req.body.mobile,
    req.body.email_id,
    req.body.password,
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

export function update_employee(req, res) {
  const q =
    "UPDATE `employee` SET `name`=?,`doj`=?,`role_id`=?,`mobile`=?,`email_id`=?,`password`=?,`update_date`=?,`updated_by`=?,`updated_by_role`=? WHERE `employee_id` = ?";
  const values = [
    req.body.name,
    req.body.doj,
    req.body.role_id,
    req.body.mobile,
    req.body.email_id,
    req.body.password,
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

export function delete_employee(req, res) {
  const q = "DELETE FROM `employee` WHERE `employee_id` = ?";
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
