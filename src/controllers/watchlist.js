const { insertOne, findOne, updateOne } = require("../services/db/crud");
const collection = "watchlist";

async function createWatchlist(req, res, next) {
    try {
        const userId = req.body.utilisateurId
        const user = await findOne("users", { "id" : (userId) });
        if (user) {
            const result = await insertOne(collection, req.body);
            console.log(`Nouvelle watchlist créée. Id : ${result.insertedId}`);
            return res.status(201).send(result);
        }else{
            return res.status(404).send("Utilisateur non trouvé");
        }
    }catch (e){
        console.log(e);
        return next(e);
    }
}

async function addItemToWatchlist(req, res, next) {
    try {
        const watchlist = await findOne(collection, { _id: req.params.id });
        if (!watchlist) {
            return res.status(404).send({ message: 'Watchlist non trouvée' });
        }
        watchlist.items.push({ item: req.body.item });
        const result = await updateOne(collection, { _id: req.params.id }, watchlist);
        console.log(`Item ajouté à la watchlist. Id : ${result.upsertedId || req.params.id}`);
        return res.status(200).send(result);
    } catch (e) {
        console.log(e);
        return next(e);
    }
}

async function findWatchlist(req, res, next) {
    try {
        const watchlist = await findOne(collection, { _id: req.params.id });
        if (!watchlist) {
            return res.status(404).send({ message: 'Watchlist non trouvée' });
        }
        return res.status(200).send(watchlist);
    } catch (e) {
        console.log(e);
        return next(e);
    }
}

module.exports={
    createWatchlist,
    addItemToWatchlist,
    findWatchlist
}
               