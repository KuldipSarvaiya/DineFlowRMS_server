import connection from "../db.js";

export function show_contact_uss(req, res) {
  const q = "SELECT * FROM `contact_us`";
  try {
    connection.query(q, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function select_contact_us(req, res) {
  const q = "SELECT * FROM `contact_us` WHERE `contact_id` = ?";
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

export function create_contact_us(req, res) {
  const q =
    "INSERT INTO `contact_us`(`name`, `email`, `message`, `seen`, `contact_number`, `entry_date`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.message,
    false,
    req.body.contact_number,
    new Date(),
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

export function update_contact_us(req, res) {
  const q =
    "UPDATE `contact_us` SET `name`=?,`email`=?,`message`=?,`seen`=?,`contact_number`=?,`update_date`=?,`updated_by`=?,`updated_by_role`=? WHERE `contact_id` = ?";
  const values = [
    req.body.name,
    req.body.email,
    req.body.message,
    req.body.seen,
    req.body.contact_number,
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

export function delete_contact_us(req, res) {
  const q = "DELETE FROM `contact_us` WHERE `contact_id` = ?";
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
