import connection from "../db.js";

export function show_employees(req, res) {
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

export function select_employee(req, res) {
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

export function create_employee(req, res) {
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

export function update_employee(req, res) {
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

export function delete_employee(req, res) {
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
