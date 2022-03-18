const getDb = require("../mongodb");
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
    autor,
    fechaCreacion,
    fechaModificacion
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

  async  getAll(){
    const cursor = this.collection.find({});
    const documents = await cursor.toArray();
    return documents;
  }
}
