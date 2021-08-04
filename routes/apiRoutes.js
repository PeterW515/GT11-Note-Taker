//enable access to db json
const db = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(db);
        console.log(JSON.stringify(db));

    });

    app.post('/api/notes', (req, res) => {
        JSON.parse(db).push(req.body);
        //res.json(req);
    });
}