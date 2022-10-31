import { pool } from "../db.js";

export const ping = async (rep, res) => {
  const [result] = await pool.query("select 1+1 AS result");
  res.json(result);
};
