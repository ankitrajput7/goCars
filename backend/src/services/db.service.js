import mysql from "mysql2/promise";
import dbConfig from "../confings/db.config.js";

export async function mysqlQueryConn(query, params=[]) {
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
