//dependencies boilerplate
const path = require("path");
const fs = require("fs");
let noteBook = require("../db/db.json");

module.exports = function (app) {

    //APP.GET retrieves the notes from the notebook when called by AJAX
    app.get("/api/notes", function (req, res) {
        res.json(noteBook);
        // console.log("get")
    });

    //APP.POST creates a new note object, fills it with the user inputs, then pushes it to the notebook array
    app.post("/api/notes", function (req, res) {
        let note = {id: req.body.id, title: req.body.title, text: req.body.text };

        noteBook.push(note);

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(noteBook), err => {
            if (err) throw err
            res.send(note);
            // console.log("post");
        });
    });

    //APP.DELETE deletes the selected note
    //parameterized as per index.js
    app.delete("/api/notes/:id", function (req, res) {

    });

};



