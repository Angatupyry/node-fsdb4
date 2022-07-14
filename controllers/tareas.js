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
    /**
     * 1 Obtener el valor por el cual filtrar (where) el dato.
     *    1.1 ¿Cómo? [x]
     * 2 Llamar a la función db.query y ejecutar la sentencia de update con el where (utilizando el
     *   parámetro obtenido en el punto 1)
     * 3 Llenar los datos del update con los del cliente (body)
     * 4 Retorar un 204 si todo fue OK.
     */

    const id = req.params.id;
    const { titulo } = req.body;

    await db.query("update tareas set titulo = ${1} where id = ${2}", [
      titulo,
      id,
    ]);

    return res.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
};

module.exports = { get, create, update };
