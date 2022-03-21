const express = require("express");
const router = express.Router();

const Preguntas = require("../../../../dao/preguntas/preguntas.model");
const preguntasModel = new Preguntas();

function getCurrentDateTime(){
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;
  return dateTime
}
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
  
  const {
    pregunta,
    respuesta,
    categoria,
    dificultad,
    revision,
    autor,
    fechaCreacion = getCurrentDateTime(),
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
router.put("/update/:id", async(req, res)=>{
  try{
    const {id} = req.params;
    const {pregunta,
      respuesta,
      categoria,
      dificultad} = req.body
      const result = await preguntasModel.updateOne(
        id,
        pregunta,
        respuesta,
        categoria,
        dificultad,
        getCurrentDateTime())
      res.status(200).json({
        status:"ok",
        result
      })
  } catch(e){
    console.log(e);
    res.status(500).json({status:"failed"});
  }
})

module.exports = router;
