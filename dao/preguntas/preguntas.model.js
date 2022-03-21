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

  async new(
    pregunta,
    respuesta,
    categoria,
    dificultad,
    revision,
    autor,
    fechaCreacion,
    fechaModificacion
  ) {
    const newPregunta = {
      pregunta,
      respuesta,
      categoria,
      dificultad,
      revision,
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
  async updateOne(
    id,
    pregunta,
    respuesta,
    categoria,
    dificultad,
    fechaModificacion){
    const filter = {_id:new ObjectId(id)};
    const updateCmd = {
      "$set":{
        pregunta,
        respuesta,
        categoria,
        dificultad,
        fechaModificacion,
      }
    }
    return await this.collection.updateOne(filter, updateCmd)
  }
}

module.exports = Preguntas;
