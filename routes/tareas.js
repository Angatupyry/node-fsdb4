const express = require("express");
const { get, create, update } = require("../controllers/tareas");
const router = express.Router();

router.get("/", get);

router.post("/", create);

router.put("/:id", update);

module.exports = router;
