const express = require("express");
const tareasRouter = require("./routes/tareas");
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tareas", tareasRouter);

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
