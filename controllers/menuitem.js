import connection from "../db.js";

export function show_menuitems(req, res) {
  const { category } = req.query;
  const query = category ? " where category= '" + category + "'" : "";
  const q = "SELECT * FROM `menuitem`" + query;
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

export function select_menuitem(req, res) {
  const q = "SELECT * FROM `menuitem` WHERE `menuitem_id` = ?";
  const values = [];
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

export function create_menuitem(req, res) {
  const q =
    "INSERT INTO `menuitem`(`image_url`, `category`, `price`, `item_name`, `entry_date`, `entry_by`, `entry_by_role`) VALUES (?)";
  console.log(req.file);
  const values = [
    req.file.filename,
    req.body.category,
    req.body.price,
    req.body.item_name,
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

export function update_menuitem(req, res) {
  const q =
    "UPDATE `menuitem` SET `image_url`=?,`category`=?,`price`=?,`item_name`=?, `update_date`=?, `updated_by`=?,`updated_by_role`=? WHERE `menuitem_id` = ?";
  const values = [
    req?.file?.filename || req.body.image_url,
    req.body.category,
    req.body.price,
    req.body.item_name,
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

export function update_menuitem_noimage(req, res) {
  console.log("\n\n***************without image", req.body);
  const q =
    "UPDATE `menuitem` SET `category`=?,`price`=?,`item_name`=?, `update_date`=?, `updated_by`=?,`updated_by_role`=? WHERE `menuitem_id` = ?";
  const values = [
    req.body.category,
    req.body.price,
    req.body.item_name,
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

export function delete_menuitem(req, res) {
  const q = "DELETE FROM `menuitem` WHERE `menuitem_id` = ?";
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
