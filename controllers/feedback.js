import connection from "../db.js";

export function show_feedbacks(req, res) {
  const q = "SELECT *, b.name FROM `feedback` a, `customer` b WHERE b.customer_id = a.customer_id";
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

export function select_feedback(req, res) {
  const q = "SELECT * FROM `feedback` WHERE `feedback_id` = ?";
  try {
    connection.query(q,[req.params.id], (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      if (err) res.status(500).json(err);
      else res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function create_feedback(req, res) {
  const q =
    "INSERT INTO `feedback`(`feedback`, `customer_id`, `order_id`, `rating`, `entry_date`, `entry_by`, `entry_by_role`) VALUES (?)";
  const values = [
    req.body.feedback,
    req.body.customer_id,
    req.body.order_id,
    req.body.rating,
    new Date(),
    req.body.entry_by,
    req.body.entry_by_role,
  ];
  try {
    connection.query(q, [values], (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      if (err) res.json(err);
      else res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

// no need
// export function update_feedback(req, res) {
//   const q =
//     "UPDATE `feedback` SET  `feedback`=?,`customer_id`=?,`order_id`=?,`rating`=? WHERE `feedback_id` = ?";
//   const values = [
//     req.body.feedback,
//     req.body.customer_id,
//     req.body.order_id,
//     req.body.rating,
//     req.params.id,
//   ];
//   try {
//     connection.query(q, values, (err, data) => {
//       console.log(err ?? `\n**********Data Sent = ${data}`);
// if (err) res.status(500).json(err);
// else
//       res.json(data);
//     });
//   } catch (error) {
//     res.json(error);
//   }
// }

export function delete_feedback(req, res) {
  const q = "DELETE FROM `feedback` WHERE `feedback_id` = ?";
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
