const db = require("../db/index");

const get = async (req, res, next) => {
  try {
    const tareas = await db.query("select * from tareas");

    return res.status(200).json({ tareas: tareas.rows });
  } catch (error) {
    return next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { titulo, prioridad } = req.body;

    await db.query("insert into tareas (titulo, prioridad) values($1, $2)", [
      titulo,
      prioridad,
    ]);

    return res.status(201).json({ success: true, message: ":D" });
  } catch (error) {
    return next(error);
  }
};

const update = async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
};

module.exports = { get, create, update };
