import connection from "../db.js";

export function show_roles(req, res) {
  const q = "";
  const values = [];
  try {
    connection.query(q, values, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function select_role(req, res) {
  const q = "";
  const values = [];
  try {
    connection.query(q, values, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}

export function create_role(req, res) {
  const q = "";
  const values = [];
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
  const q = "";
  const values = [];
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
  const q = "";
  const values = [];
  try {
    connection.query(q, values, (err, data) => {
      console.log(err ?? `\n**********Data Sent = ${data}`);
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
}
