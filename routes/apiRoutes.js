let data = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = function(app) {
    app.get('/api/notes', function(req, res){
        let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
    });

app.post('/api/notes', function(req,res){
    notes.push(req.body);
    var updatedNotes = JSON.stringify(notes);
    fs.writeFileSync('./db/db.json', updatedNotes);
    res.json(req.body);
});

    app.delete('/api/notes/:id', function(req,res){
        var noteID = req.params.id;
        let notes = JSON.parse(fs.readFileSync(path.join(_dirname, '../db/db.json')));
        let index = note.findIndex( element => {
            if (element.id === noteID) return true;
        });
        notes.splice(index, 1);

        var updatedNotes = JSON.stringify(notes);
        fs.writeFileSync('./db/db.json', updatedNotes);

        res.send('Deleting note');
    });
}
