import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT),
});

export async function query<T>(sql: string, params?: any[]) {
  if (process.env.LOG_SQL === "true") {
    console.log("SQL:", sql, params);
  }

  const [rows] = await pool.query(sql, params);
  return rows as T[];
}
