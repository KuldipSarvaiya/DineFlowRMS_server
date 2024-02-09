import connection from "../db.js";

export function show_tables(req, res) {
  const q = "SELECT * FROM `table`";
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

export function select_table(req, res) {
  const q = "SELECT * FROM `table` WHERE `table_id` = ?";
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

export function create_table(req, res) {
  const q =
    "INSERT INTO `table`(`table_capacity`, `table_no`, `entry_date`, `entry_by`, `entry_by_role`) VALUES (?)";
  const values = [
    req.body.table_capacity,
    req.body.table_no,
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

export function update_table(req, res) {
  const q =
    "UPDATE `table` SET `table_capacity`=?,`table_no`=?,`update_date`=?,`updated_by`=?,`updated_by_role`=? WHERE `table_id` = ?";
  const values = [
    req.body.table_capacity,
    req.body.table_no,
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

export function delete_table(req, res) {
  const q = "DELETE FROM `table` WHERE `table_id` = ?";
  try {
    connection.query(q,[ req.params.id], (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      if (err) res.status(500).json(err);
      else res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}
