const express = require("express");
const tareasRouter = require("./routes/tareas");
const pokemonRouter = require("./routes/pokemon");
const userRouter = require("./routes/user");
const app = express();
const cors = require("cors");
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/tareas", tareasRouter);
app.use("/pokemon", pokemonRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
