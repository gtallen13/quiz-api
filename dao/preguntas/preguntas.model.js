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
    autor,
    fechaCreacion,
    fechaModificacion
  ) {
    const newPregunta = {
      pregunta,
      respuesta,
      categoria,
      dificultad,
      revision:false,
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
  async getCategories(categoria, dificultad, cantidad ){
    if (categoria !==  "" && dificultad !== "" && cantidad != ""){
      const  filter = this.collection.find({categoria: categoria, dificultad: dificultad}).limit(cantidad);
    const documents = await filter.toArray();
    return documents;
    }
    return false;
  }

 async getPreguntas(email){
   if (email !== ""){
     const filter = this.collection.find({autor: email});
     const documents = await filter.toArray();
     return documents;
   }
   return false;
 }

  async getAmount(cantidad){
    const cursor =  this.collection.find({}).limit(cantidad)
    const documents = await cursor.toArray()
    return documents; 
  }
  async revisionUpdate(id, revision){
    const filter = {_id: new ObjectId(id)};
    const updateCmd = {
      '$set':{
        revision
      }
    };
    return await this.collection.updateOne(filter, updateCmd);
  }
  async getPreguntasRevision(){
    const filter = {revision:true};
    const cursor = this.collection.find(filter); 
    const documents = await cursor.toArray()
    return documents;
  }
}

module.exports = Preguntas;
