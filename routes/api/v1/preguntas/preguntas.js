const express = require("express");
const router = express.Router();

const Preguntas = require("../../../../dao/preguntas/preguntas.model");
const preguntasModel = new Preguntas();

router.get("/all", async (req, res) => {
  try {
    console.log("User Request", req.user);
    const rows = await preguntasModel.getAll();
    res.status(200).json({ status: "ok", preguntas: rows });
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ status: "failed" });
  }
});

router.post("/new", async (req, res) => {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;

  const {
    pregunta,
    respuesta,
    categoria,
    dificultad,
    revision,
    autor,
    fechaCreacion = dateTime,
    fechaModificacion,
  } = req.body;
  try {
    rslt = await preguntasModel.new(
      pregunta,
      respuesta,
      categoria,
      dificultad,
      revision,
      autor,
      fechaCreacion,
      fechaModificacion
    );
    res.status(200).json({
      status: "ok",
      result: rslt,
    });
  } catch (ex) {
    console.log(ex);
    res.status(500).json({
      status: "failed",
      result: {},
    });
  }
});

router.get("/byid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const row = await preguntasModel.getById(id);
    res.status(200).json({ status: "ok", preguntas: row });
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ status: "failed" });
  }
});

router.put('/revision/:id', async (req, res) => {
  try{
    const {revision} = req.body;
    const {id} = req.params;
    const result = await preguntasModel.revisionUpdate(id, revision);
    res.status(200).json({
      status: 'ok',
      result
    })
  }catch (ex){
    console.log(ex);
    res.status(500).json({
      status: "failed",
      result: {},
    });
  }
})

module.exports = router;
