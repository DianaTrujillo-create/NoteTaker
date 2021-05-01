const fs = require('fs');
const path = require('path');
const { all } = require('sequelize/types/lib/operators');

module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        fs.readFileSync(path.join(__dirname, '../db/db.json'), "utf8", function(err,data) {
            if (err) throw err;
            res.json(JSON.parse(data));
            console.log(data)
        })
        return res.status(200);
    });

        app.post('/api/notes', function(req, res) {
  
            fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function(err, data) {
                if (err) throw err;

                const allNotes = JSON.parse(data);
                console.log(allNotes);
                const newNotes = [];

                allNotes.push(req.body);
                console.log(allNotes)

                for(let i = 0; i < allNotes.lenght; i++) {
                    const addNote = {
                        title: allNotes[i].title,
                        text: allNotes[i].text,
                        id: newNotes.length
                    };
                    
                    newNotes.push(addNote);
                    console.log(newNotes);
                }

                fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(newNotes, null, 2), function(err) {
                    if (err) throw err;
                    res.json(req.body);
                    console.log(newNotes);
                    console.log(allNotes)
                });
                return res.status(200)
            });
        });
    
        app.delete('/api/notes/:id', function(req,res) {
        
            fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function(err, data) {
                if (err) throw err;

                let allNotes = JSON.parse(data);
                console.log(JSON.stringify(allNotes) + "will be deleted");

                allNotes = allNotes.filter(function(data) {
                    return data.id !=req.params.id;
                });

                fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify (allNotes, null, 2), function(err) {
                    if (err) throw err;
                    res.json(req.body);
                    });
                });

                return res.status(200)
            });
}
