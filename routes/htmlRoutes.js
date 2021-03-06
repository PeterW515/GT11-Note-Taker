const path = require('path');

module.exports = (app) => {
    //this returns the notes html when the notes endpoint is hit
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    //this returns index html when any unknown endpoint is hit
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}