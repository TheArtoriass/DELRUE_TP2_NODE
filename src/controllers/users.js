const { insertOne, findOne } = require("../services/db/crud");
const collection = "users";

async function findUser(req, res, next){
    try{
        const result = await findOne(collection, req.query);
        return res.send(result);
    } catch(e){
        console.log(e);
        return next(e);
    }
}

async function createUser(req, res, next){
    try{
        const newUser = req.body;
        const result = await insertOne(collection, newUser);
        console.log(`Nouvel utilisateur enregistré, id: ${result.insertedId}`);
        return res.status(201).send(result); 
    } catch(e){
        console.log(e);
        return next(e);
    }
}

async function getUser(req, res, next) {
    try {
        const user = await findOne(collection, { _id: req.params.id });
        if (!user) {
            return res.status(404).send("Utilisateur non trouvé");
        }
        return res.status(200).send(user);
    } catch (e) {
        console.log(e);
        return next(e);
    }
}

module.exports = {
    findUser,
    createUser,
    getUser
}