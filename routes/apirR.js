//dependencies
const path = require("path");
const fs = require("fs");
let noteDB = require("../db/db.json");


module.exports = function (app) {

    
    app.get("/api/notes", function (req, res) {
        res.json(noteDB);
        console.log("success")
    });

    // //     // app.post new notes to the DB when they save it
    // app.post('/api/notes', function (req, res) {
    //     fs.appendFile(noteDB, newNote, function (err, data) {
    //         if (err) throw err
    //         console.log("it ran")
    //         //res.send (or similar) has to be the last line 
    //         res.send(data)
       //noteDB.push
    //     })
    // })

    //     // app.delete from the notes DB when they load it

    //     // overwrite the notes DB to blank when they delete 

};



