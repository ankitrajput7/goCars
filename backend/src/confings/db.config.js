import dotenv from "dotenv";
dotenv.config();

// const dbConfig = {
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   port: process.env.DB_PORT,
// };

const dbConfig = {
  host: process.env.AWS_HOST,
  user: process.env.AWS_ACCESS_KEY_ID,
  password: process.env.AWS_SECRET_ACCESS_KEY,
  port: process.env.AWS_DB_PORT,
  connectionLimit: 10,
};

export default dbConfig;
