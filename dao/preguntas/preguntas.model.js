const ObjectId = require("mongodb").ObjectId;
const getDb = require("../mongodb");

let db = null;
class Preguntas {
  collection = null;
  constructor() {
    getDb()
      .then((database) => {
        db = database;
        this.collection = db.collection("Preguntas");
        if (process.env.MIGRATE === "true") {
          // Por Si se ocupa algo
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  getCurrentDateTime()
  async new(
    pregunta,
    respuesta,
    categoria,
    dificultad,
    autor,
    fechaCreacion = dateTime,
    fechaModificacion = dateTime
  ) {
    const newPregunta = {
      pregunta,
      respuesta,
      categoria,
      dificultad,
      autor,
      fechaCreacion,
      fechaModificacion,
    };
    const rslt = await this.collection.insertOne(newPregunta);
    return rslt;
  }

  async getAll() {
    const cursor = this.collection.find({});
    const documents = await cursor.toArray();
    return documents;
  }

  async getById(id) {
    const _id = new ObjectId(id);
    const filter = { _id };
    console.log(filter);
    const myDocument = await this.collection.findOne(filter);
    return myDocument;
  }
}

function getCurrentDateTime() {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;
  return dateTime;
}
