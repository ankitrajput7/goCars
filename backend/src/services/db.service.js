import mysql1 from "mysql2/promise";
import dbConfig from "../confings/db.config.js";
import mysql from "mysql";

import dotenv from "dotenv";
dotenv.config();

// let connection = mysql.createConnection({
//   host: process.env.AWS_HOST,
//   user: process.env.AWS_ACCESS_KEY_ID,
//   password: process.env.AWS_SECRET_ACCESS_KEY,
//   port: process.env.AWS_DB_PORT,
//   connectionLimit: 10,
// });

// let connection = mysql.createConnection({host:process.env.AWS_HOST});

// connection.connect((err) => {
//   if (err) {
//     console.error("Database connection failed: " + err.stack);
//     return;
//   }

//   console.log("Connected to database.");
// });

// export default connection;

async function mysqlQueryConn(query, params=[]) {
  try {
    const pool = mysql.createPool(dbConfig);
    const connection = await pool.getConnection();
    let response;

    if (params.length > 0) {
      response = await connection.query(query, params);
    } else {
      response = await connection.query(query);
    }

    connection.release();
    return response;
  } catch (error) {
    return error;
  }
}

export default mysqlQueryConn;
