import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  password: "",
  database: "dineflow",
  port: 3306,
  user: "root",
});

export default connection