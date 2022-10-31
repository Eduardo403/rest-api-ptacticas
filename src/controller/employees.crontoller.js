import { pool } from "../db.js";
/*optener empleados*/
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from emplodee");

    res.send(rows);
  } catch (error) {
    return res.status(500).json({
      massage: "something gose wrong",
    });
  }
};
/*optener un solo empleaado*/
export const getEmployeeById = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from emplodee where id=?", [
      req.params.id,
    ]);

    if (rows.length <= 0) {
      res.status(404).json({
        massage: "Emplodeey not found",
      });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    return res.status(500).json({
      massage: "something gose wrong",
    });
  }
};

/*insertar empleados*/
export const postEmployees = async (req, res) => {
  const { users, salary } = req.body;
  try {
    const [rows] = await pool.query(
      "insert into emplodee (users,salari)  value (?,?)",
      [users, salary]
    );
    res.send({
      id: rows.insertId,
      users,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      massage: "something gose wrong",
    });
  }
};

/*elimnar emopleados*/
export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("delete  from emplodee where id=?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0) {
      res.status(404).json({
        massage: "Emplodeey not found",
      });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).json({
      massage: "something gose wrong",
    });
  }
};

/*actualizar empleados*/
export const putEmployees = async (req, res) => {
  const { id } = req.params;
  const { users, salary } = req.body;
  try {
    const [result] = await pool.query(
      "update emplodee set users= ifnull(?,users) ,salari= ifnull(?,salari) where id = ?;",
      [users, salary, id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({
        massage: "Emplodeey not found",
      });
    } else {
      const [rows] = await pool.query("select * from emplodee where id = ?", [
        id,
      ]);
      res.send(rows[0]);
    }
  } catch (error) {
    return res.status(500).json({
      massage: "something gose wrong",
    });
  }
};
