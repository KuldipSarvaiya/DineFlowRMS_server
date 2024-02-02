import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  password: "",
  database: "dineflow",
  port: 3306,
  user: "root",
});

export default connection