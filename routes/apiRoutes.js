//enable access to db json
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');


module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        const db = fs.readFileSync(path.join(__dirname, '../db/db.json'));
        let database = JSON.parse(db);
        res.json(database);
    });

    app.post('/api/notes', (req, res) => {
        const dbFile = fs.readFileSync(path.join(__dirname, '../db/db.json'));
        let database = JSON.parse(dbFile);

        let reqData = req.body;
        reqData.id = uuid.v1();

        database.push(reqData);

        let newDbFile = JSON.stringify(database);

        fs.writeFileSync(path.join(__dirname, '../db/db.json'), newDbFile);

        res.json(reqData);

    });

    app.delete('/api/notes/:id', (req,res)=>{
        const dbFile = fs.readFileSync(path.join(__dirname, '../db/db.json'));
        let database = JSON.parse(dbFile);
        database.splice(database.findIndex((obj) => obj.id === req.params.id),1);
        let newDbFile = JSON.stringify(database);
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), newDbFile);
        res.status(200).send('Success');
    })
}