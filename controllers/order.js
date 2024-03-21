import connection from "../db.js";

export function show_orders(req, res) {
  const { is_complete, date_from, date_to } = req.query;
  const query1 = is_complete ? " and a.is_complete = " + !!is_complete : "";
  const query2 =
    date_from && date_to ? " and a.update_date BETWEEN ? AND ?" : "";

  const q =
    "SELECT *, b.name FROM orders a INNER JOIN customer b WHERE b.customer_id = a.customer_id" +
    query1 +
    query2;

  try {
    connection.query(
      q,
      [new Date(date_from), new Date(date_to)],
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

export function show_orders_today(req, res) {
  const q =
    "SELECT a.*, b.name FROM orders a, customer b, booking c WHERE b.customer_id = a.customer_id and c.booking_id = a.booking_id and is_complete=0 and c.booking_date = CURRENT_DATE";

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

export function generate_bill(req, res) {
  const q =
    "SELECT a.*, b.image_url, b.item_name, b.category FROM trn_order a, menuitem b WHERE a.order_id = ? and a.menuitem_id = b.menuitem_id"; // and a.entry_date = CURRENT_DATE";

  try {
    connection.query(q, [req.params.id], (err, data) => {
      console.log(err ?? `\n**********Data got = ${data}`);
      if (err) return res.status(500).json(err);
      if (!!req.query.get_menuitem_list) return res.json(data);
      let sub_total = 0;
      // console.log(data);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].price);
        sub_total = sub_total + data[i].price * data[i].qty;
      }

      const q2 =
        "update orders set sub_total = ?, discount = ?, is_complete = ?, charges = ?, allow_orders = ?, net_total = ?, updated_by = ?, updated_by_role = ? where order_id = ?";

      connection.query(
        q2,
        [
          sub_total,
          req.body.discount,
          1,
          req.body.charges,
          0,
          +sub_total + +req.body.charges - +req.body.discount,
          req.body.updated_by,
          req.body.updated_by_role,
          req.params.id,
        ],
        (err, data) => {
          console.log(err ?? `\n**********Data Sent = ${data}`);
          if (err) return res.status(500).json(err);
          res.status(200).send(true);
        }
      );
    });
  } catch (error) {
    res.json(error);
  }
}

export function get_bill(req, res) {
  const q =
    "SELECT a.*, b.image_url, b.item_name, b.category FROM trn_order a, menuitem b WHERE a.order_id = ? and a.menuitem_id = b.menuitem_id";

  try {
    connection.query(q, [req.params.id], (err, data) => {
      console.log(err ?? `\n**********Data got = ${data}`);
      if (err) return res.status(500).json(err);

      const q2 = "select * from orders where order_id = ?";

      connection.query(q2, [req.params.id], (err, data2) => {
        console.log(err ?? `\n**********Data Sent = ${data2}`);
        if (err) return res.status(500).json(err);
        res.json({ order: data2, trn_orders: data });
      });
    });
  } catch (error) {
    res.json(error);
  }
}

export function select_order_for_customer(req, res) {
  const q =
    "SELECT a.* FROM `orders` a, `booking` b WHERE a.customer_id = ? and b.booking_id = a. booking_id and b.booking_date = CURRENT_DATE";
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

export function select_order(req, res) {
  const q = "SELECT * FROM `orders` WHERE `order_id` = ?";
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
    "INSERT INTO `orders`(`customer_order_id`,`is_complete`,`customer_id`, `booking_id`, `allow_orders`, `sub_total`, `discount`, `charges`, `net_total`, `entry_date`, `update_date`, `entry_by`, `entry_by_role`, `updated_by`, `updated_by_role`) VALUES (?)";
  const values = [
    Date.now(),
    false,
    req.body.customer_id,
    req.body.booking_id,
    req.body.allow_orders,
    0,
    0,
    0,
    0,
    new Date(),
    new Date(),
    req.body.entry_by,
    req.body.entry_by_role,
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
    "UPDATE `orders` SET `is_complete`=?,`customer_id`=?,`booking_id`=?, `allow_orders`=?,`sub_total`=?,`discount`=?,`charges`=?,`net_total`=?,`update_date`=?,`updated_by`=?,`updated_by_role`=? WHERE `order_id` = ?";
  const values = [
    req.body.is_complete,
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
  const q = "DELETE FROM `orders` WHERE `order_id` = ?";
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
