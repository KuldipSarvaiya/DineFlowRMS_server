import connection from "../db.js";

export function show_customers(req, res) {
  const q = "SELECT * FROM `customer`";
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

export function select_customer(req, res) {
  const q = "SELECT * FROM `customer` WHERE `customer_id` = ?";
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

export function search_customer_signin(req, res) {
  const q = "SELECT * FROM `customer` WHERE `mobile_no` = ? and `password` = ?";

  try {
    connection.query(
      q,
      [req.query.mobile_no, req.query.password],
      (err, data) => {
        console.log(err ?? `\n**********Data Sent = ${data}`);
        if (err) res.status(500).json(err);
        else res.json(data);
      }
    );
  } catch (error) {
    res.json(error);
  }
}

export function create_customer(req, res) {
  const q =
    "INSERT INTO `customer`(`name`, `mobile_no`, `password`, `entry_date`, `entry_by`, `entry_by_role`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.mobile_no,
    req.body.password,
    new Date(),
    req.body.entry_by,
    req.body.entry_by_role,
  ];
  try {
    connection.query(q, [values], (err, data) => {
      if (err) {
        res.status(500).json(err);
      } else {
        if (req.body.entry_by !== 0) return res.json(data);
        // Retrieve the latest auto-increment ID
        const lastInsertId = data.insertId;

        // Update the entry_by field with the retrieved ID
        connection.query(
          "UPDATE `customer` SET entry_by = ? WHERE customer_id = ?",
          [lastInsertId, lastInsertId],
          (err, updateData) => {
            if (err) {
              res.status(500).json(err);
            } else {
              res.json(updateData);
            }
          }
        );
      }
    });
  } catch (error) {
    res.json(error);
  }
}

export function update_customer(req, res) {
  const q =
    "UPDATE `customer` SET `name`=?,`mobile_no`=?,`password`=?,`update_date`=?,`updated_by`=?,`updated_by_role`=? WHERE `customer_id` = ?";
  const values = [
    req.body.name,
    req.body.mobile_no,
    req.body.password,
    new Date(),
    req.body.updated_by,
    req.body.updated_by_role,
    req.params.id,
  ];
  try {
    connection.query(q, [...values], (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      if (err) res.status(500).json(err);
      else res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function delete_customer(req, res) {
  const q = "DELETE FROM `customer` WHERE `customer_id` = ?";
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
