//dependencies boilerplate
const path = require("path");
const fs = require("fs");
let noteBook = require("../db/db.json");

module.exports = (app) => {

    //APP.GET retrieves the notes from the notebook when called by AJAX
    app.get("/api/notes", (req, res) => {
        res.json(noteBook);
        // console.log("get")
    });

    //APP.POST creates a new note object, fills it with the user inputs, then pushes it to the notebook array
    app.post("/api/notes", (req, res) => {
        let note = { id: req.body.id, title: req.body.title, text: req.body.text };
        //push the note object to the noteBook array
        noteBook.push(note);

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(noteBook), err => {
            if (err) throw err
            res.send(note);
            // console.log("post");
        });
    });

    //APP.DELETE deletes the selected note
    // receive a parametixed query containing the id of a note to delete
    app.delete("/api/notes/:id", (req, res) => {
        // read all notes from the db.json file, return all notes EXCEPT the target
        let target = req.params.id;
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
            if (err) throw err
            noteBook = JSON.parse(data).filter((note) => {
                return note.id !== target
            });

            //and then rewrite the rest of the notes to the db.json file
            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(noteBook), err => {
                if (err) throw err
                res.send(noteBook);
                // console.log("deleted")
            });
        });
    });
};





