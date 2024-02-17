const { insertOne, findOne } = require("../services/db/crud");

const collection = "item";

async function AddItem(req, res, next) {
    try {
      const result = await insertOne(collection, req.body);
      console.log(`Nouvel objet ajouté. Id : ${result.insertedId}`);
      return res.status(201).send(result);
    } catch (e) {
      console.log(e);
      return next(e);
    }
}

async function findItem(req, res, next){
  try{
    const result = await findOne(collection, req.query);
    return res.send(result);
  }catch(e){
    console.log(e);
    return next(e);
  }
}
  
module.exports = { AddItem, findItem };