const db = require("../db/index");
const bcrypt = require("bcrypt");
const create = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.send({
        success: false,
        message: "Email inválido",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await db.query(
      "insert into users(name, mail, password) values($1, $2, $3)",
      [name, email, passwordHash]
    );

    return res
      .status(201)
      .json({ success: true, message: ":D", data: newUser });
  } catch (error) {
    return next(error);
  }
};

module.exports = { create };
