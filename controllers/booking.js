import connection from "../db.js";

export function show_bookings(req, res) {
  const q = "SELECT * FROM `booking`";
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

export function upcoming_bookings(req, res) {
  const { date_from, date_to } = req.query;
  const query =
    date_from && date_to
      ? "a.update_date BETWEEN ? AND ?"
      : "a.booking_date BETWEEN CURRENT_DATE AND CURRENT_DATE+100";

  const q =
    "SELECT a.*,b.name,c.table_no FROM `booking` a, `customer` b, `table` c WHERE a.customer_id = b.customer_id and a.table_id = c.table_id and a.is_accepted = 'Accepted' and " +
    query +
    " ORDER BY a.booking_date ASC;";

  try {
    connection.query(
      q,
      [new Date(date_from), new Date(date_to)],
      (err, data) => {
        console.log(err ?? `\n**********Data is Sent = ${data}`);
        if (err) res.status(500).json(err);
        else res.json(data);
      }
    );
  } catch (error) {
    res.json(error);
  }
}

export function bookings_requests(req, res) {
  const q =
    "SELECT a.*,b.name FROM `booking` a , customer b WHERE a.customer_id = b.customer_id AND is_accepted = 'Pending' ORDER BY booking_date ASC;";
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

export function select_booking(req, res) {
  const q = "SELECT * FROM `booking` WHERE `booking_id` = ?";
  const values = [req.params.id];
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

export function create_booking(req, res) {
  const q =
    "INSERT INTO `booking`(`table_id`, `customer_id`, `booking_date`, `booking_time`, `duration`, `is_accepted`,`person_count`, `entry_date`, `entry_by`, `entry_by_role`) VALUES (?)";

  const values = [
    req.body.table_id,
    req.body.customer_id,
    req.body.booking_date,
    req.body.booking_time,
    req.body.duration,
    "Pending",
    req.body.person_count,
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

export function update_booking(req, res) {
  try {
    connection.query(
      "select `table_id` from `table` where table_no = ?",
      [req.body.table_no],
      (err, table_id) => {
        console.log(err ?? `\n**********Table ID = ${table_id}`);
        if (err) return res.status(500).json(err);
        const q =
          "UPDATE `booking` SET `table_id`=?, `is_accepted`=?,`person_count`=?, `update_date`=?,`updated_by`=?,`updated_by_role`=? WHERE `booking_id` = ?";
        const values = [
          table_id[0].table_id,
          req.body.is_accepted,
          req.body.person_count,
          new Date(),
          req.body.updated_by,
          req.body.updated_by_role,
        ];
        connection.query(q, [...values, req.params.id], (err, data) => {
          console.log(err ?? `\n**********Data update Sent = ${data}`);
          if (err) res.status(500).json(err);
          else res.json(data);
        });
      }
    );
  } catch (error) {
    res.json(error);
  }
}

export function delete_booking(req, res) {
  const q = "DELETE FROM `booking` WHERE `booking_id` = ?";
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
